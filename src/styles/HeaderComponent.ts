import styled from 'styled-components'

const HeaderComponent = styled.header`
  background-color: #FFFFFF;
  border-bottom: 1px solid #E8E8E8;
  display: flex;
  height: 8.56rem;
  left: 266px;
  padding: 3.44rem 2rem;
  position: absolute;
  top: 0;
  width: 85.4%;

  .header__date {
    margin-left: 2rem;
  }

  .header__search {
    align-items: center;
    display: flex;
    position: absolute;
    right: 2rem;

    .header__addButton-event {
      background-color: #4CA7A8;
      border: none;
      border-radius: .37rem;
      color: #FFFFFF;
      cursor: pointer;
      font-size: 1rem;
      height: 2.37rem;
      padding: .62rem 1.5rem;
      transition: all 0.3s ease-in-out;
      width: 10rem;

      &:hover {
        background-color: #FFFFFF;
        border: 1px groove #4CA7A8;
        color: #4CA7A8;
      }

      &:active {
        transform: scale(0.8);
      }
    }

    .header__search-input {
      background: #FAFAFA;
      border: none;
      border-radius: .75rem;
      height: 3.5rem;
      margin: 0 1rem;
      outline: none;
      padding-left: 2.81rem;
      width: 28.75rem;

      &::placeholder {
        color: #AEAEAE;
        font-size: 1rem;
        font-weight: 400;
        line-height: 130%;
      }
    }

    .header__button-bell,
    .header__button-user {
      background: #FAFAFA;
      border: none;
      border-radius: .75rem;
      height: 3.5rem;
      width: 3.5rem;
    }

    .header__button-bell {
      margin-right: 1rem;
    }
  }

  .header__search-icon {
    color: #aeaeae;
    font-size: 1.37rem;
    left: 11.87rem;
    position: absolute;
  }
`

export default HeaderComponent
