import styled from 'styled-components'

const NewEvent = styled.div`
  border: 2px groove #E8E8E8;
  background-color: #f2f2f2ee;
  border-radius: 6px;
  color: #4ca7a8;
  position: absolute;
  top: 15vh;
  left: 17vw;
  padding: 15px;
  height: 300px;
  width: 700px;
  z-index: 98;

  h1 {
    margin-left: 85px;
  }

  .newEvent_closeModal {
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

  .newEvent__form {
    align-items: flex-start;
    display: flex;
    flex-flow: column nowrap;
    height: 80%;
    padding: 15px;

    .newEvent__container-input {
      display: flex;
      flex-flow: column nowrap;
      align-items: center;
      justify-content: center;
      padding: 10px;
      width: 100%;
      .default_style {
        border: none;
        border-bottom: 2px solid #000000;
        border-radius: 6px;
        margin-bottom: 5px;
        height: 3vh;
        letter-spacing: 2px;
        width: 60%;
        padding: 10px;
        user-select: none;
        outline: none;
      }
      .newEvent__form-title {
        width: 80%;
        text-transform: uppercase;
        font-weight: 600;
      }
      .newEvent__form-description {
        margin-top: 15px;
        height: 8vh;
        width: 80%;
      }
    }

    .newEvent__container-time {
      width: 100%;
      padding-left: 70px;

      .newEvent__section-hours {
        :first-child {
          margin-right: 15px;
        }
      }
      .newEvent__form-moment {
        margin-left: 10px;
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
`

export default NewEvent
