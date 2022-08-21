import styled from 'styled-components'

const NewEvent = styled.div`
  background-color: #FFFFFF;
  border-radius: 6px;
  box-shadow: 0 0 12px #E8E8E8;
  color: #141a29;
  height: 935px;
  left: 19.5vw;
  padding: 15px;
  position: absolute;
  top: 19vh;
  width: 340px;
  z-index: 98;

    h1 {
      margin-top: 25px;
      text-align: center;
    }

  .newEvent__header {
    flex-flow: column nowrap;
    display: flex;
    margin-top: 35px;
    height: 25%;
    width: 100%;

    label {
      color: #AEAEAE;
      font-size: 16px;
      margin-bottom: 5px;
    }
    
    h2, h3 {
      margin-bottom: 5px;
      margin-left: 30px;
    }

    hr {
      margin: 40px 0;
    }

  .newEvent_closeModal {
    border: none;
    color: #4ca7a8;
    font-size: 14px;
    position: absolute;
    top: 20px;
    right: 30px;
    transition: all .2s ease-in-out;
    user-select: none;
    cursor: pointer;
    &:active {
      transform: scale(.8);
    }
  }
  }


  .newEvent__form {
    align-items: flex-start;
    height: 60%;
    display: flex;
    flex-flow: column nowrap;
    label {
      color: #AEAEAE;
    }

    .section__hour-event {
      align-items: center;
      display: flex;
      height: 60px;
      margin-top: 10px;
      padding: 5px;
      position: relative;
      width: 100%;

      label {
        position: absolute;
        margin-left: 10px;
        top: 0;
      }
      select {
        margin-left: 10px;
        option {
          height: 30% !important;
          border: 6px;
        }
      }

      
    }

    .newEvent__container-inputs {
      align-items: center;
      display: flex;
      flex-flow: column nowrap;
      height: 70%;
      justify-content: space-evenly;
      padding: 10px;
      width: 100%;

      .default_style {
        border: none;
        border-bottom: 2px solid #000000;
        border-radius: 6px;
        margin-bottom: 5px;
        font-size: 22px;
        height: 3vh;
        letter-spacing: 2px;
        padding: 10px;
        user-select: none;
        outline: none;
        width: 60%;
      }
      .newEvent__form-title {
        font-size: 18px;
        font-weight: 600;
        text-transform: uppercase;
        width: 80%;
      }
      .newEvent__form-description {
        font-size: 18px;
        height: 8vh;
        margin-top: 15px;
        width: 80%;
      }
    }

    .newEvent__container-buttons {
      display: flex;
      position: absolute;
      justify-content: space-around;
      right: 0;
      bottom: 10px;
      width: 100%;

      .newEvent__buttons-save, .newEvent__buttons-clear {
        background-color: #4ca7a8;
        border: none;
        border-radius: 6px;
        color: #FFFFFF;
        cursor: pointer;
        font-size: 18px;
        height: 40px;
        width: 150px;
        transition: all .2s ease-in-out;
        
        
        &:disabled {
          background-color: gray;
          color: #FFFFFF;
          
        }
        
        &:active {
          transform: scale(.8);
        }
        
      } 
    }
  }

  .newEvent__container-inputs > input {
    border: none;
    border-bottom: 2px solid gray;
    border-radius: 6px;
    font-size: 22px;
    padding: 5px;
    outline: none;
    margin-top: 10px;
    width: 100%;
  }

  @media screen and (min-width: 1920px) {
    left: 18.75rem;
    width: 28.12rem;
    
    .newEvent__form {
      .hour-event {
        text-align: center;
        padding-left: 30px;
        width: 100%;
      }
      .section__hour-event {
        align-items: center;
        display: flex;
        justify-content: center;
      }
    }
  }


`

export default NewEvent
