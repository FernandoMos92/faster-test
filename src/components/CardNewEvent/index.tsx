import React, { useContext, useState, useEffect } from 'react'
import { UserContext } from '../../Context/Context'
import { BsPinMapFill } from 'react-icons/bs'
import { FaTemperatureLow } from 'react-icons/fa'
import NewEvent from '../../styles/CardNewEvent'
import clearForms from '../../utils/clearFroms'
import generateSchudele from '../../utils/generateSchudele'
import { inputchange } from '../../utils/inpuChange'
import saveLocalStorage from '../../utils/saveLocalStorage'
import formatDate from '../../utils/formatDate'
import readLocalStorage from '../../utils/readLocalStorage'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function CardNewEvent ({ temperature }: any) {
  const [temp] = useState(temperature.toFixed(1))
  const [isDisabled, setIsDisabled] = useState(true)

  const notify = () => toast('Wow so easy!')

  const { hours, minutes } = generateSchudele()
  const {
    setIsOpenModal,
    newEvent,
    setNewEvent,
    updateEvents,
    dateEvent,
    clearEventStage
  } = useContext(UserContext)

  function handleButton () {
    setIsDisabled(true)
    const { title, date } = newEvent
    const checked = title.length > 0 || date.length > 0
    if (checked) {
      setIsDisabled(false)
    }
  }

  async function clickAndSave () {
    const dtEvent = formatDate(dateEvent)
    newEvent.date = dtEvent
    newEvent.id = readLocalStorage().length + 1
    saveLocalStorage(newEvent)
    updateEvents()
    clearEventStage()
    setIsOpenModal(false)
    await notify()
  }

  useEffect(() => {
    handleButton()
  }, [newEvent.date, newEvent.title])

  return (
    <NewEvent>
       <ToastContainer />
      <h2>
        São Paulo{' '}
        <abbr title='Localização atual'>
          <BsPinMapFill style={{ color: '#4CA7A8' }} />
        </abbr>
        {` - ${temp}º `}
        <abbr title='Temperatura atual'>
          <FaTemperatureLow
            style={temp < 20 ? { color: '#4CA7A8' } : { color: '#d12004' }}
          />
        </abbr>
      </h2>
      <h2>{`${formatDate(dateEvent)}`}</h2>
      <button
        className='newEvent_closeModal'
        onClick={() => setIsOpenModal(false)}>
        X
      </button>
      <form className='newEvent__form'>
        <section className='newEvent__container-hour'>
          <h3 className='newEvent__container-hour-title'>
            Selecione a hora do seu evento
          </h3>
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
          <label className='newEvent__label-title' htmlFor='newEvent__title'>
            <h3>Titulo do seu evento</h3>
          </label>
          <input
            id='newEvent__title'
            name='title'
            type='text'
            value={newEvent.title}
            onChange={inputchange(newEvent, setNewEvent)}
          />

          <label
            className='newEvent__label-description'
            htmlFor='newEvent__description'>
            <h3>Descrição do seu evento</h3>
          </label>
          <input
            id='newEvent__description'
            name='description'
            type='text'
            value={newEvent.description}
            onChange={inputchange(newEvent, setNewEvent)}
          />

          <label
            className='newEvent__label-location'
            htmlFor='newEvent__location'>
            <h3>Local do seu evento</h3>
          </label>
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
