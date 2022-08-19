import styled from 'styled-components'

const HeaderComponent = styled.header`
  align-items: center;
  border-bottom: 1px solid #E8E8E8;
  display: flex;
  height: 15.44%;
  justify-content: center;
  width: 84.1%;
  
  .header__container {
    display: flex;
    justify-content: space-between;
    height: 59px;
    width: 91.12%;

    .header__container-date {
      .header__date-month {
        font-weight: 700;
        font-size: 24px;
        line-height: 140%;
      }
  
      .header__date-fullDate {
        color: #AEAEAE;
        font-weight: 400;
        font-size: 16px;
        line-height: 130%;
      }
    }
  }

  @media screen and (min-width: 1920px) {
    width: 88.2%;
  }

 

  /* .header__date {
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
  } */
`

export default HeaderComponent
