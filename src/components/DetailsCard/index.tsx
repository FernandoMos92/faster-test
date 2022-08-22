import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/UserContext'
import { AiOutlineClose, AiFillEdit } from 'react-icons/ai'
import DeleteEventModal from '../DeleteEventModal/index'
import Details from './Details'
import { formatHour } from '../../utils/formatHour'

function DetailsCard (props: any) {
  const { setIsDetailOpen, deleteEvent, setDeleteEvent } = useContext(UserContext)
  const { title, description, hour, id, location, minute, date } = props.elements
  const objTime = {
    hour,
    minute
  }

  const [edit, setEdit] = useState(false)

  const handleDelete = (evt) => {
    setDeleteEvent(true)
  }

  return (
    <Details id={id}>
      <section className='details__header'>
        <abbr title="Fechar os detalhes do evento">
          <AiOutlineClose
            onClick={() => setIsDetailOpen(false)}
            className='details__icon-close'
          />
        </abbr>
          { !edit &&
    (
      <abbr title='Editar evento'>
        <AiFillEdit
          className='details__icon-edit'
          onClick={() => setEdit(true)}
        />
      </abbr>
    ) }
        <h2>
          {edit ? 'Editar evento' : 'Detalhes do evento'}
        </h2>
      </section>

      <section className='details__container-information'>
        <label htmlFor=''>Titulo</label>
        {
          edit
            ? (
                <abbr title='Input para troca de titulo habilitado'>
                  <input type='text' />
                </abbr>
              )
            : (
                <p>{title}</p>
              )
        }

        <label htmlFor=''>Descrição</label>
        {
          edit
            ? (
                <abbr title='Input para troca de descrição habilitado'>
                  <input type='text' />
                </abbr>
              )
            : (
                <p>{description}</p>
              )
        }
        {
          deleteEvent && <DeleteEventModal identifyEvent={ id } />
        }
        <label htmlFor=''>Local do evento</label>
        {
          edit
            ? (
                <abbr title='Input para troca de local do evento habilitado'>
                  <input type='text' />
                </abbr>
              )
            : (
                <p>{location}</p>
              )
        }

        <label htmlFor=''>Hora e Data</label>
        {edit
          ? (
              'TESTE'
            )
          : (
              <p>{`${formatHour(objTime) === 'undefined' ? 'null' : formatHour(objTime)} - ${date}`}</p>
            )}
      </section>
      {edit
        ? (
            <div className='details__container-buttons'>
              <abbr title='Fechar a edição sem salvar'>
                <button
                  className='details__button-close'
                  onClick={() => setEdit(false)}>
                  Fechar
                </button>
              </abbr>
              <abbr title='Salvar edição'>
                <button
                  className='details__button-save'
                  onClick={() => setEdit(false)}>
                  Salvar edição
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
                onClick={ () => setEdit(true) }
              >
                Editar evento
              </button>
            </abbr>
            <abbr title='Excluir evento'>
            <button
                id={id}
                className='details__button-delete'
                onClick={ handleDelete }
              >
                Excluir evento
              </button>
            </abbr>
          </div>
          )}
    </Details>
  )
}

export default DetailsCard
