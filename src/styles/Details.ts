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
      position: absolute;
      top: -40px;
      right: 0px;
    }
  }



  .details__icon-edit {
    background-color: transparent;
    cursor: pointer;
    top: 46px;
    right: 60px;
    transition: all 0.2s ease-in-out;

    &:active {
      transform: scale(1.2);
    }
  }

  .details__button-delete,
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
    width: 100%;
    padding: 0;
    margin: 0;
  }
`

export default Details
