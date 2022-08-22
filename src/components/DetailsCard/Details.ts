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
  position: absolute;
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
    background-color: transparent;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    width: 100%;
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
    width: 80%;

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
      top: 8px;
      font-size: 10px;
    }

    .data_event-label-hour {
      left: 25px;
    }

    .data_event-label-minute {
      left: 157px;
    }

  }

   .container__event-hour {
      width: 90%;
      height: 70px;
      margin: 0 auto;

      select {
      background-color: #f2f2f283;
      width: 80px;
      border-radius: 6px;
      font-size: 18px;
      padding: 5px;
    }
    label {
      top: 0;
      margin-bottom: 10px;
    }
    .data_event-label-hour {
      left: 12px;
    }

    .data_event-label-minute {
      left: 108px;
    }
    }

  @media screen and (min-width: 1441px){
    width: 350px;
    .container__event-hour {
      width: 90%;
      height: 70px;
      margin: 0 auto;

      select {
      background-color: #f2f2f283;
      width: 80px;
      border-radius: 6px;
      font-size: 18px;
      padding: 5px;
    }
    label {
      top: 0;
      margin-bottom: 10px;
    }
    .data_event-label-hour {
      left: 20px;
    }

    .data_event-label-minute {
      left: 140px;
    }
    }
  }
   @media screen and (min-width: 1920px){
    width: 500px;
    
    .details__container-information{
      input {
        width: 80%;
      }
    
    }
    .container__event-hour {
      width: 60%;
      margin: 0 auto;

    select {
      background-color: #f2f2f283;
      width: 80px;
      border-radius: 6px;
      font-size: 18px;
      padding: 5px;
    }
    label {
      top: 0;
    }
    .data_event-label-hour {
      left: 22px;
    }

    .data_event-label-minute {
      left: 152px;
    }
    }
  }
`

export default Details
