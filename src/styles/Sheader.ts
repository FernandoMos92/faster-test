import styled from 'styled-components'

const Sheader = styled.header`
  border: 2px solid gray;
  display: flex;
  position: absolute;
  background-color: #FFFFFF;
  left: 266px;
  top: 0;
  height: 139px;
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
    .header__search-button {
      background-color: #4CA7A8;
      border: none;
      border-radius: 6px;
      color: #FFFFFF;
      padding: 10px 24px;
      height: 38px;
      width: 144px;
    }

    .header__search-input {
      padding: 16px;  
      border: none;
      width: 460px;
      height: 56px;
      margin: 0 16px;
      background: #FAFAFA;
      border-radius: 12px;
    }

    .header__button-bell, .header__button-user {
      border: none;
      width: 56px;
      height: 56px;
      background: #FAFAFA;
      border-radius: 12px;
    }

    .header__button-bell {
      margin-right: 16px;
    }
  }
`

export default Sheader
