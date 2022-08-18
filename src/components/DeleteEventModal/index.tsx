import React, { useContext } from 'react'
import { UserContext } from '../../Context/Context'
import ModalDelete from '../../styles/ModalDelete'

function DeleteEventModal () {
  const myContext = useContext(UserContext)

  return (
    <ModalDelete>
      <p>Tem certeza que deseja deletar esse evento?</p>
      <abbr title="Sim">
        <button
          className='deleteEvent__button-yes'
        >
          Sim
        </button>
      </abbr>
      <abbr title="Não">
        <button
          className='deleteEvent__button-no'
          onClick={ () => myContext.setDeleteEvent(false)}
        >
          Não
        </button>
      </abbr>
    </ModalDelete>
  )
}

export default DeleteEventModal
