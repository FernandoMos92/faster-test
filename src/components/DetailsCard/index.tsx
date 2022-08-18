import React, { useContext } from 'react'
import { UserContext } from '../../Context/Context'
import styled from 'styled-components'
import { AiOutlineClose, AiFillEdit } from 'react-icons/ai'
import { formatHour } from '../../utils/formatHour'

const Details = styled.div`
  background-color: #355072;
  color: #F2F2F2;
  border-radius: 6px;
  position: absolute;
  top: 32px;
  padding: 20px;
  padding-top: 40px;
  height: 95%;
  width: 420px;
  text-align: center;

  .details__icon-close, .details__icon-edit {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .details__icon-edit {
    cursor: pointer;
    top: 46px;
    right: 60px;
    transition: all .2s ease-in-out;

    &:active {
      transform: scale(1.2);
    }
  }

  .details__button-delete {
    position: absolute;
    cursor: pointer;
    bottom: 10px;
    font-weight: 600;
    right: 20px;
    border: none;
    border-radius: 6px;
    width: 150px;
    height: 40px;
    font-size: 16px;
    color: #F2F2F2;
    background-color: #4ca7a8;
    transition: all .2s ease-in-out;

    &:active {
      background-color: #F2F2F2;
      border: 1px groove #4ca7a8;
      color: #4ca7a8;
      transform: scale(.9);
    }
  }
`

function DetailsCard () {
  const { allEvents, setIsDetailOpen } = useContext(UserContext)
  const objTime = {
    hour: allEvents[0].hour,
    minute: allEvents[0].minute
  }

  return (
    <Details>
      <AiOutlineClose
        onClick={ () => setIsDetailOpen(false) }
        className='details__icon-close'
      />
      <h2>Detalhes do evento</h2>
      <abbr title="Editar evento">
        <AiFillEdit className='details__icon-edit'/>
      </abbr>
      <section>
        <label htmlFor="">
          Titulo
        </label>
        <p>{ allEvents[0].title }</p>

        <label htmlFor="">
          Descrição
        </label>
        <p>{ allEvents[0].description }</p>

        <label htmlFor="">
          Local do evento
        </label>
        <p>{ allEvents[0].location }</p>

        <label htmlFor="">
          Hora e Data
        </label>
        <p>{`${formatHour(objTime)} - ${allEvents[0].date}`}</p>

      </section>
      <abbr title="Excluir evento">
        <button className='details__button-delete'>Excluir evento</button>
      </abbr>
    </Details>
  )
}

export default DetailsCard
