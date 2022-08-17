import React, { useContext } from 'react'
import { UserContext } from '../../Context/Context'
import NewEvent from '../../styles/CardNewEvent'
import clearForms from '../../utils/clearFroms'
import generateSchudele from '../../utils/generateSchudele'
// import { inputchange } from '../../utils/inpuChange'

function CardNewEvent () {
  const { hours, minutes } = generateSchudele()
  const { setIsOpenModal, newEvent, setNewEvent } = useContext(UserContext)

  return (
    <NewEvent>
      <button
        className='newEvent_closeModal'
        onClick={ () => setIsOpenModal(false)}
      >
        X
      </button>
      <form className='newEvent__form'>

        <section className='newEvent__container-hour'>
          <h3 className='newEvent__container-hour-title'>Selecione a hora do seu evento</h3>
          <div className='data__container-hour'>
            <label htmlFor="data__event-hour">Hora</label>
            <select
              className='data__event-hour'
              name="data__event-hour"
              id="data__event-hour"
            >
              {
                hours.map((hour) => (
                  <option
                    key={hour}
                    value={hour}
                  >
                    {hour}
                  </option>
                ))
              }
            </select>
          </div>
          <div className='data__container-minute'>
            <label htmlFor="data__event-minute">Minutos</label>
            <select
              className='data__event-minute'
              name="data__event-minute"
              id="data__event-minute"
            >
              {
                minutes.map((minutes) => (
                  <option
                    key={minutes}
                    value={minutes}
                  >
                    {minutes}
                  </option>
                ))
              }
            </select>
          </div>
        </section>

        <section className='newEvent__container-inputs'>
          <label
            className='newEvent__label-title'
            htmlFor="newEvent__title"
          >
            <h3>Titulo do seu evento</h3>
          </label>
          <input
            id='newEvent__title'
            name='newEvent__title'
            type="text"
          />

          <label
            className='newEvent__label-description'
            htmlFor="newEvent__description"
          >
            <h3>Descrição do seu evento</h3>
          </label>
          <input
            id='newEvent__description'
            name='newEvent__description'
            type="text"
          />

          <label
            className='newEvent__label-location'
            htmlFor="newEvent__location"
          >
            <h3>Local do seu evento</h3>
          </label>
          <input
            id='newEvent__local'
            name='newEvent__local'
            type="text"
          />
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
              onClick={ clearForms }
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
