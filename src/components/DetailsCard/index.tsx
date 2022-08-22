import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import { AiOutlineClose, AiFillEdit } from 'react-icons/ai'
import DeleteEventModal from '../DeleteEventModal/index'
import Details from './Details'
import { inputchange } from '../../utils/inpuChange'
import { formatHour } from '../../utils/formatHour'
import generateSchudele from '../../utils/generateSchudele'
import readLocalStorage from '../../utils/readLocalStorage'

function DetailsCard (props: any) {
  const { elements, setDetails } = props
  const {
    setAllEvents,
    setIsDetailOpen,
    deleteEvent,
    setDeleteEvent
  } = useContext(UserContext)
  const { title, description, hour, id, location, minute, date } =
    props.elements
  const objTime = {
    hour,
    minute
  }

  const [edit, setEdit] = useState(false)
  const { hours, minutes } = generateSchudele()

  const handleDelete = () => {
    setDeleteEvent(true)
  }

  function updateEvent () {
    const [filterEvent] = readLocalStorage().filter((event) => event.id === id)
    if (filterEvent) {
      const eventEdit = {
        id,
        date,
        title,
        description,
        location,
        hour,
        minute
      }
      const diferentElements = readLocalStorage().filter((el) => el.id !== id)
      localStorage.setItem('events', JSON.stringify([...diferentElements, eventEdit]))
      setAllEvents([...diferentElements, eventEdit])
    }
    setEdit(false)
    setIsDetailOpen(false)
  }

  return (
    <Details id={id}>
      <section className='details__header'>
        <abbr title='Fechar os detalhes do evento'>
          <AiOutlineClose
            onClick={() => setIsDetailOpen(false)}
            className='details__icon-close'
          />
        </abbr>
        <h2>{edit ? 'Editar evento' : 'Detalhes do evento'}</h2>
      </section>
        {!edit && (
          <abbr title='Editar evento'>
            <AiFillEdit
              className='details__icon-edit'
              onClick={() => setEdit(true)}
            />
          </abbr>
        )}

      <section className='details__container-information'>
        <label htmlFor=''>Título</label>
        {edit
          ? (
          <abbr title='Input para troca de titulo habilitado'>
            <input
              name='title'
              type='text'
              value={title}
              placeholder={title}
              onChange={inputchange(elements, setDetails)}
            />
          </abbr>
            )
          : (
          <p>{title}</p>
            )}

        <label htmlFor=''>Descrição</label>
        {edit
          ? (
          <abbr title='Input para troca de descrição habilitado'>
            <input
              name='description'
              type='text'
              value={description}
              placeholder={description}
              onChange={inputchange(elements, setDetails)}
            />
          </abbr>
            )
          : (
          <p>{description}</p>
            )}
        {deleteEvent && <DeleteEventModal identifyEvent={id} />}
        <label htmlFor=''>Local do evento</label>
        {edit
          ? (
          <abbr title='Input para troca de local do evento habilitado'>
            <input
              name='location'
              type='text'
              value={location}
              placeholder={location}
              onChange={inputchange(elements, setDetails)}
            />
          </abbr>
            )
          : (
          <p>{location}</p>
            )}

        <label htmlFor=''>Hora</label>
        {edit
          ? (
            <div className='container__event-hour'>
              <label
                htmlFor="data__event-hour"
                className='data_event-label-hour'
              >
                {
                  hour.split('')[0] > 1 ? 'Horas' : 'Hora'
                }
              </label>
            <select
              className='data__event-hour'
              name='hour'
                id='data__event-hour'
                defaultValue={ props.elements.hour}
              onChange={inputchange(elements, setDetails)}>
              {hours.map(hour => (
                <option
                  defaultValue={ hour }
                  key={hour}
                  value={hour}
                >
                  {hour}
                </option>
              ))}
              </select>
              :
              <label
                htmlFor="data__event-minute"
                className='data_event-label-minute'
              >
                {
                  minute > 1 ? 'Minutos' : 'Minuto'
               }
              </label>
              <select
                className='data__event-minute'
                name='minute'
                id='data__event-minute'
                onChange={inputchange(elements, setDetails)}
                defaultValue={ props.elements.minute}
              >
                {minutes.map(minute => (
                  <option
                    defaultValue={ minute }
                    key={minute}
                    value={minute}
                  >
                    {minute}
                  </option>
                ))}
              </select>
          </div>
            )
          : (
          <p>{`${
            formatHour(objTime) === 'undefined' ? 'null' : formatHour(objTime)
          } - ${date}`}</p>
            )}
      </section>
      {edit
        ? (
        <div className='details__container-buttons'>
          <abbr title='Salvar edição'>
            <button
              className='details__button-save'
              onClick={() => updateEvent()}>
              Salvar edição
            </button>
          </abbr>
          <abbr title='Fechar a edição sem salvar'>
            <button
              className='details__button-close'
              onClick={() => setEdit(false)}>
              Fechar
            </button>
          </abbr>
        </div>
          )
        : (
        <div className='details__container-buttons'>
          <abbr title='Editar evento'>
            <button
              id={id}
              className='details__button-edit'
              onClick={() => setEdit(true)}>
              Editar evento
            </button>
          </abbr>
          <abbr title='Excluir evento'>
            <button
              id={id}
              className='details__button-delete'
              onClick={handleDelete}>
              Excluir evento
            </button>
          </abbr>
        </div>
          )}
    </Details>
  )
}

export default DetailsCard
