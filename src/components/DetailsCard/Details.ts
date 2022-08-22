import styled from 'styled-components'

const Details = styled.div`
  background-color: #355072;
  border-radius: 6px;
  color: #f2f2f2;
  height: 800px;
  padding: 20px;
  position: absolute;
  text-align: center;
  top: 165px;
  width: 300px;
  z-index: 99;

  .details__header {
    background-color: transparent;
    position: relative;
    margin-top: 40px;
    height: 40px;

    .details__icon-close {
      background-color: transparent;
      cursor: pointer;
      position: absolute;
      top: -40px;
      right: 0px;
    }
  }



  .details__icon-edit {
    background-color: #355072;
    cursor: pointer;
    top: 46px;
    right: 60px;
    transition: all 0.2s ease-in-out;
    position: absolute;
    right: 10px;
    top: 8px;
    &:active {
      transform: scale(1.2);
    }
  }

  .details__button-delete,
  .details__button-edit,
  .details__button-save,
  .details__button-close {
    cursor: pointer;
    bottom: 10px;
    font-weight: 600;
    right: 20px;
    border: none;
    border-radius: 6px;
    width: 150px;
    height: 40px;
    font-size: 16px;
    color: #f2f2f2;
    background-color: #4ca7a8;
    transition: all 0.2s ease-in-out;

    &:active {
      background-color: #f2f2f2;
      border: 1px groove #4ca7a8;
      color: #4ca7a8;
      transform: scale(0.9);
    }
  }

  .details__button-close {
    left: 20px;
  }

  .details__container-buttons {
    display: flex;
    flex-flow: column nowrap;
    position: absolute;
    bottom: 0;
    width: 100%;
    left: 0;
    background-color:  transparent;
    height: 20%;
    justify-content: space-evenly;
  }

  .details__container-information {
    background-color: transparent;
    display: flex;
    flex-flow: column nowrap;
    height: 80%;
    margin-top: 30px;
    padding: 20px;
  }
  
  h2 {
    background-color: transparent;
  }

  label {
    text-align: left;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
    background-color: transparent;
  }

  p {
    text-align: left;
    margin-left: 30px;
    margin-bottom: 10px;
    background-color: transparent;
  }

  input {
    background-color: #f2f2f283;
    cursor: text;
    border: none;
    border-radius: 6px;
    margin-bottom: 10px;
    font-size: 18px;
    font-weight: 500;
    height: 30px;
    padding: 10px;

    &:focus {
      outline-color: #ff0000;
    }
  }

  abbr {
    background-color: transparent;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .container__event-hour {
    align-items: center;
    justify-content: space-around;
    display: flex;
    background-color: transparent;
    height: 10%;
    padding: 10px;
    position: relative;

    label {
      position: absolute;
      top: 24px;
      font-size: 10px;
    }

    .data_event-label-hour {
      left: 15px;
    }

    .data_event-label-minute {
      left: 135px;
    }

  }

  @media screen and (min-width: 1441px){
    width: 350px;
  }
   @media screen and (min-width: 1920px){
    width: 500px;
  }
`

export default Details