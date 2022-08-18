import React, { useContext, useState } from 'react'
import { UserContext } from '../../Context/Context'
import { AiOutlineClose, AiFillEdit } from 'react-icons/ai'
import { formatHour } from '../../utils/formatHour'
import DeleteEventModal from '../DeleteEventModal/index'
import Details from '../../styles/Details'

function DetailsCard () {
  const { allEvents, setIsDetailOpen, deleteEvent, setDeleteEvent } = useContext(UserContext)
  const objTime = {
    hour: allEvents[0].hour,
    minute: allEvents[0].minute
  }

  const [edit, setEdit] = useState(false)

  return (
    <Details>
      <AiOutlineClose
        onClick={() => setIsDetailOpen(false)}
        className='details__icon-close'
      />
      <h2>{edit ? 'Editar evento' : 'Detalhes do evento'}</h2>
      {!edit && (
        <abbr title='Editar evento'>
          <AiFillEdit
            className='details__icon-edit'
            onClick={() => setEdit(true)}
          />
        </abbr>
      )}
      <section className='details__container-information'>
        <label htmlFor=''>Titulo</label>
        {edit
          ? (
          <abbr title='Input para troca de titulo habilitado'>
            <input type='text' />
          </abbr>
            )
          : (
          <p>{allEvents[0].title}</p>
            )}

        <label htmlFor=''>Descrição</label>
        {edit
          ? (
          <abbr title='Input para troca de descrição habilitado'>
            <input type='text' />
          </abbr>
            )
          : (
          <p>{allEvents[0].description}</p>
            )}
        {deleteEvent && <DeleteEventModal />}
        <label htmlFor=''>Local do evento</label>
        {edit
          ? (
          <abbr title='Input para troca de local do evento habilitado'>
            <input type='text' />
          </abbr>
            )
          : (
          <p>{allEvents[0].location}</p>
            )}

        <label htmlFor=''>Hora e Data</label>
        {edit
          ? (
              'TESTE'
            )
          : (
          <p>{`${formatHour(objTime)} - ${allEvents[0].date}`}</p>
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
              onClick={ () => setDeleteEvent(true)}
            >
              Excluir evento
            </button>
        </abbr>
          )}
    </Details>
  )
}

export default DetailsCard
