import styled from 'styled-components'

const Sheader = styled.header`
  border-bottom: 1px solid #e8e8e8;
  display: flex;
  position: absolute;
  background-color: #ffffff;
  left: 266px;
  top: 0;
  height: 137px;
  width: 85.4%;
  padding: 55px 32px;

  .header__date {
    margin-left: 32px;
  }

  .header__search {
    display: flex;
    align-items: center;
    position: absolute;
    right: 32px;

    .header__addButton-event {
      background-color: #4ca7a8;
      border: none;
      border-radius: 6px;
      font-size: 16px;
      color: #ffffff;
      cursor: pointer;
      padding: 10px 24px;
      height: 38px;
      width: 160px;
      transition: all 0.3s ease-in-out;

      &:hover {
        background-color: #ffffff;
        border: 1px groove #4ca7a8;
        color: #4ca7a8;
      }

      &:active {
        transform: scale(0.8);
      }
    }

    .header__search-input {
      padding-left: 45px;
      border: none;
      width: 460px;
      height: 56px;
      margin: 0 16px;
      background: #fafafa;
      border-radius: 12px;
      outline: none;
      text-transform: uppercase;

      &::placeholder {
        font-size: 18px;
        color: #aeaeae;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
      }
    }

    .header__button-bell,
    .header__button-user {
      border: none;
      width: 56px;
      height: 56px;
      background: #fafafa;
      border-radius: 12px;
    }

    .header__button-bell {
      margin-right: 16px;
    }
  }

  .header__search-icon {
    color: #aeaeae;
    font-size: 22px;
    position: absolute;
    left: 190px;
  }
`

export default Sheader
