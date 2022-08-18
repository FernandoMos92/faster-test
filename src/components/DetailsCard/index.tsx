import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/Context'
import { AiOutlineClose, AiFillEdit } from 'react-icons/ai'
import DeleteEventModal from '../DeleteEventModal/index'
import Details from '../../styles/Details'
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
    console.log(evt.target.id)
    setDeleteEvent(true)
  }

  return (
    <Details id={id}>
      <AiOutlineClose
        onClick={() => setIsDetailOpen(false)}
        className='details__icon-close'
      />
      <h2>
        {edit ? 'Editar evento' : 'Detalhes do evento'}
      </h2>
      {!edit &&
      (
        <abbr title='Editar evento'>
          <AiFillEdit
            className='details__icon-edit'
            onClick={() => setEdit(true)}
          />
        </abbr>
      )}
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
          deleteEvent && <DeleteEventModal />
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
              <p>{`${date} - ${formatHour(objTime) === 'undefined' ? 'null' : formatHour(objTime)}`}</p>
            )}
      </section>
      {edit
        ? (
            <>
              <abbr title=''>
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
            </>
          )
        : (
            <abbr title='Excluir evento'>
              <button
                className='details__button-delete'
                onClick={ handleDelete }
              >
                Excluir evento
              </button>
            </abbr>
          )}
    </Details>
  )
}

export default DetailsCard
