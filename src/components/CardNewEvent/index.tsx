import React from 'react'
import NewEvent from '../../styles/CardNewEvent'
import {
  generateHour,
  generateMinute
} from '../../utils/generateHoursAndMinute'

function CardNewEvent () {
  const hours = []
  const minutes = []

  generateHour(hours)
  generateMinute(minutes)

  return (
    <NewEvent>
      <h1>DATA QUI</h1>
      <p className='newEvent_closeModal'>X</p>
      <form className='newEvent__form'>

        <section className='newEvent__container-input'>
          <input
            className='newEvent__form-title default_style'
            type='text'
            placeholder='Insira o titulo do seu novo evento'
          />
          <textarea
            className='newEvent__form-description default_style'
            placeholder='Inisira a descrição do seu evento'></textarea>
        </section>

        <section className='newEvent__container-time'>
          <label htmlFor='form-hours' className='newEvent__section-hours'>
            <select name='form-hours' id='form-hours' className='newEvent__form-hours'>
              {hours.map(hour => (
                <option key={hour}>{hour}</option>
              ))}
            </select>
            Horas
          </label>
          <label htmlFor=''>
            <select className='newEvent__form-minutes' name='' id=''>
              {minutes.map(minute => (
                <option key={minute}>{minute}</option>
              ))}
            </select>
            Minutos
          </label>
          <select name="" id="" className='newEvent__form-moment'>
            <option value="am" >AM</option>
            <option value="pm" >PM</option>
          </select>
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
