import React, { useContext } from 'react'
import { UserContext } from '../../Context/UserContext'
import ModalDelete from './ModalDelete'
import updateLocal from '../../utils/updateLoca'

function DeleteEventModal (props:any) {
  const myContext = useContext(UserContext)

  const handleDelete = ():void => {
    const { allEvents, setDeleteEvent } = myContext
    const result = allEvents.filter((el) => el.id !== parseInt(props.identifyEvent))
    updateLocal(result)
    setDeleteEvent(false)
    myContext.setIsDetailOpen(false)
    myContext.updateEvents()
  }

  return (
    <ModalDelete>
      <p>Tem certeza que deseja deletar esse evento?</p>
      <abbr title="Sim">
        <button
          className='deleteEvent__button-yes'
          onClick={ handleDelete }
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
