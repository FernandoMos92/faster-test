import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/Context'
import NewEvent from '../../styles/CardNewEvent'
import {
  generateHour,
  generateMinute
} from '../../utils/generateHoursAndMinute'
import { inputchange } from '../../utils/inpuChange'

function CardNewEvent () {
  const [newEvent, setNewEvent] = useState({
    title: '',
    description: '',
    hours: '',
    minutes: '',
    period: ''
  })
  const hours = []
  const minutes = []
  const { setIsOpenModal } = useContext(UserContext)

  generateHour(hours)
  generateMinute(minutes)

  return (
    <NewEvent>
      <h1>DATA QUI</h1>
      <button
        className='newEvent_closeModal'
        onClick={ () => setIsOpenModal(false)}
      >
        X
      </button>
      <form className='newEvent__form'>

        <section className='newEvent__container-input'>
          <input
            onChange={inputchange(newEvent, setNewEvent)}
            name='title'
            value={ newEvent.title }
            className='newEvent__form-title default_style'
            type='text'
            placeholder='Insira o titulo do seu novo evento'
          />
          <textarea
            onChange={inputchange(newEvent, setNewEvent) }
            name='description'
            value={ newEvent.description }
            className='newEvent__form-description default_style'
            placeholder='Inisira a descrição do seu evento'></textarea>
        </section>

        <section className='newEvent__container-time'>
          <label htmlFor='form-hours' className='newEvent__section-hours'>
            <select name='form-hours' id='form-hours' className='newEvent__form-hours'>
              {hours.map(hour => (
                <option
                  key={hour}
                  value={newEvent.hours}
                >
                  {hour}
                </option>
              ))}
            </select>
            Horas
          </label>
          <label htmlFor=''>
            <select className='newEvent__form-minutes' name='' id=''>
              {minutes.map(minute => (
                <option
                  key={minute}
                  value={ newEvent.minutes }
                >
                  {minute}
                </option>
              ))}
            </select>
            Minutos
          </label>
        </section>

        <section className='newEvent__container-buttons'>
          <abbr title='Salvar seu evento'>
            <button
              type='button'
              onClick={ () => event.preventDefault()}
              className='newEvent__buttons-save'
              disabled
            >
              Salvar
            </button>
          </abbr>
          <abbr title='Limpar os campos'>
            <button
              type='button'
              onClick={ () => event.preventDefault()}
              className='newEvent__buttons-clear'
            >
              Limpar
            </button>
          </abbr>
        </section>
      </form>
    </NewEvent>
  )
}

export default CardNewEvent
