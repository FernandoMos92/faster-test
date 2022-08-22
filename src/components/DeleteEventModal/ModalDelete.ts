import styled from 'styled-components'

const ModalDelete = styled.div`
  background-color: #F2F2F2;
  color: #EF2505;
  border-radius: 6px;
  position: absolute;
  left: 10px;
  top: 30%;
  height: 120px;
  width: 280px;
  padding: 20px;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 600;
  z-index: 99;

  .deleteEvent__button-yes, .deleteEvent__button-no {
    width: 100px;
    height: 30px;
    margin-top: 20px;
    border-radius: 6px;
    font-family: 600;
    background-color: #FFFFFF;
    border: none;
    border: 2px groove #355072;
    color: #355072;
    font-size: 18px;
    cursor: pointer;
    transition: all .2s ease-in-out;

    &:hover {
      color: #FFFFFF;
      background-color: #355072;
      transform: scale(.9);
    }
  }

  .deleteEvent__button-yes {
    margin-right: 20px;
  }

  @media screen and (min-width: 1441px) {
     width: 330px;
  }

  @media screen and (min-width: 1920px) {
    width: 500px;
  }
`

export default ModalDelete
