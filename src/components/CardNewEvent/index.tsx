import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../Context/UserContext'
import NewEvent from './CardNewEvent'
import clearForms from '../../utils/clearFroms'
import generateSchudele from '../../utils/generateSchudele'
import { inputchange } from '../../utils/inpuChange'
import saveLocalStorage from '../../utils/saveLocalStorage'
import formatDate from '../../utils/formatDate'
import readLocalStorage from '../../utils/readLocalStorage'

import { AiFillCloud } from 'react-icons/ai'
import { BsFillSunFill, BsFillCloudRainFill } from 'react-icons/bs'

function CardNewEvent (props:any) {
  const {
    setIsOpenModal,
    newEvent,
    setNewEvent,
    updateEvents,
    dateEvent,
    clearEventStage,
    climate
  } = useContext(UserContext)
  const [isDisabled, setIsDisabled] = useState(true)
  const { name, main, weather } = climate

  const { hours, minutes } = generateSchudele()

  function handleButton () {
    setIsDisabled(true)
    const { title, hour } = newEvent
    const checked = title.length > 0 && hour.length > 0
    if (checked) {
      setIsDisabled(false)
    }
  }

  function clickAndSave () {
    const dtEvent = formatDate(dateEvent)
    newEvent.date = dtEvent
    newEvent.id = readLocalStorage().length + 1
    saveLocalStorage(newEvent)
    updateEvents()
    props.notify()
    clearEventStage()
    setIsOpenModal(false)
  }

  const iconClimate = {
    Clouds: <AiFillCloud />,
    Rain: <BsFillCloudRainFill />,
    Clear: <BsFillSunFill />
  }

  useEffect(() => {
    handleButton()
  }, [newEvent.date, newEvent.title])

  return (
    <NewEvent>
      <h1>Novo evento</h1>
      <section className='newEvent__header'>
        <label htmlFor='locationEvent'>Localização</label>
        <h2 id='locationEvent'>{ name }</h2>
        <label htmlFor='temperatureEvent'>Temperatura atual</label>
        <h3 id='temperatureEvent'>
          {`${main.temp.toFixed(1)} º`} {iconClimate[weather[0].main]}
        </h3>
        <label htmlFor='dateEvent'>Data do evento</label>
        <h3 id='dateEvent'>{`${formatDate(dateEvent)}`}</h3>
        <abbr title='Fecha a criação de novo evento'>
          <button
            className='newEvent_closeModal'
            onClick={() => setIsOpenModal(false)}>
            X
          </button>
        </abbr>
        <hr />
      </section>

      <form className='newEvent__form'>
        <label htmlFor='hour-event' className='hour-event'>Qual será a hora do evento?</label>

        <section id='hour-event' className='section__hour-event'>
          <div className='data__container-hour'>
            <label htmlFor='data__event-hour'>Hora</label>
            <select
              className='data__event-hour'
              name='hour'
              id='data__event-hour'
              onChange={inputchange(newEvent, setNewEvent)}>
              {hours.map(hour => (
                <option defaultValue='1' key={hour} value={hour}>
                  {hour}
                </option>
              ))}
        </select>

          </div>
          <div className='data__container-minute'>
            <label htmlFor='data__event-minute'>Minutos</label>
            <select
              className='data__event-minute'
              name='minute'
              id='data__event-minute'
              onChange={inputchange(newEvent, setNewEvent)}>
              {minutes.map(minute => (
                <option defaultValue='0' key={minute} value={minute}>
                  {minute}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section className='newEvent__container-inputs'>
          <label htmlFor="">Titulo do evento</label>
          <input
            id='newEvent__title'
            name='title'
            type='text'
            value={newEvent.title}
            onChange={inputchange(newEvent, setNewEvent)}
          />
          <label htmlFor="">Descrição do evento</label>
          <input
            id='newEvent__description'
            name='description'
            type='text'
            value={newEvent.description}
            onChange={inputchange(newEvent, setNewEvent)}
          />

          <label htmlFor="">Local do evento</label>

          <input
            id='newEvent__local'
            name='location'
            type='text'
            value={newEvent.location}
            onChange={inputchange(newEvent, setNewEvent)}
          />
        </section>

        <section className='newEvent__container-buttons'>
          <abbr title='Limpar os campos'>
            <button
              type='button'
              onClick={clearForms}
              className='newEvent__buttons-clear'>
              Limpar
            </button>
          </abbr>
          <abbr title='Salvar seu evento'>
            <button
              type='button'
              onClick={clickAndSave}
              className='newEvent__buttons-save'
              disabled={isDisabled}>
              Salvar
            </button>
          </abbr>
        </section>

      </form>
    </NewEvent>
  )
}

export default CardNewEvent
