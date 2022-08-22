import styled from 'styled-components'

const HeaderComponent = styled.header`
  align-items: center;
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
      width: 25.93%;
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

    .header__container-search {
      align-items: center;
      display: flex;
      position: relative;
      width: 65.18%;

      .header__button-newEvent {
        background-color: #4CA7A8;
        border: none;
        border-radius: .37rem;
        color: #FFFFFF;
        cursor: pointer;
        line-height: 130%;
        font-size: 10px;
        font-weight: 400;
        height: 52px;
        padding: 10px 24px;
        transition: all 0.3s ease-in-out;
        width: 144px;

        &:hover {
          background-color: #F2F2F2;
          color: #4CA7A8;
        }

        &:active {
          transform: scale(0.8);
        }
      }

      .header__search-icon {
        background-color: transparent;
        color: #aeaeae;
        font-size: 18px;
        left: 168px;
        position: absolute;
      } 

      .header__search-input {
        background: #FAFAFA;
        border: none;
        border-radius: .75rem;
        height: 56px;
        margin: 0 1rem;
        outline: none;
        padding-left: 3.2rem;
        width: 460px;

        &::placeholder {
          color: #AEAEAE;
          font-size: 16px;
          font-weight: 400;
          line-height: 130%;
        }
      }
    }
  }

    .header__button-bell,
   .header__button-user {
     background: #FAFAFA;
     border: none;
     border-radius: .75rem;
     cursor: pointer;
     height: 56px;
     width: 56px;
     img {
      background-color: transparent;
     }
   }

   .header__button-bell {
    margin-right: 16px;
   }

   @media screen and (min-width: 1440px){
    width: 81vw;

     .header__container {
      width: 100%;
      margin-left: 50px;

      .header__container-search  {
        width: 81%;
        .header__button-newEvent {
          font-size: 16px;
          width: 160px;
        }

        .header__search-icon {
          left: 12.5rem;
        }
        .header__search-input{
          width: 540px;
        }
      }
    }
   }

  @media screen and (min-width: 1440px){
 
   }

   @media screen and (min-width: 1920px){
     width: 85.8vw;
    .header__container {
      width: 90%;
      margin-left: 50px;

      .header__container-search  {
        .header__button-newEvent {
          font-size: 18px;
          width: 200px;
        }

        .header__search-icon {
          font-size: 22px;
          left: 14.6rem;
        }
        .header__search-input{
          width: 720px;
        }
      }
    }
   }
   
  `

export default HeaderComponent
