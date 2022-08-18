import styled from 'styled-components'

const Details = styled.div`
  background-color: #355072;
  color: #f2f2f2;
  border-radius: 6px;
  position: absolute;
  top: 32px;
  padding: 20px;
  padding-top: 40px;
  height: 95%;
  width: 420px;
  text-align: center;

  .details__icon-close,
  .details__icon-edit {
    position: absolute;
    top: 20px;
    right: 20px;
  }

  .details__icon-edit {
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
    display: flex;
    flex-flow: column nowrap;
    height: 80%;
    margin-top: 30px;
    padding: 20px;
  }

  label {
    text-align: left;
    text-transform: uppercase;
    font-weight: 600;
    margin-bottom: 10px;
  }

  p {
    text-align: left;
    margin-left: 30px;
    margin-bottom: 10px;
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
