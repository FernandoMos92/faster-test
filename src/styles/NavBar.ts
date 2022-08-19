import styled from 'styled-components'

const NavBar = styled.aside`  
  border-right: 2px solid black;
  background-color: #FFFFFF;
  height: 100%;
  width: 18.7%;

  div {
    align-items: center;
    justify-content: center;
    margin-top: 53px;
    margin-bottom: 27px;
    margin-left: 23px ;
    display: flex;
    width: 218px;
    height: 71px;
    background-color: #355072;

    .aside__main-container {
      .aside__list-icon {
        position: absolute;
        top: 151px;
        left: 26px;
        font-size: 16px;
      li {
        align-items: center;
        display: flex;
        color: #0F1527;
        list-style: none;
        justify-content: flex-start;
        line-height: 130%;
        width: 216px;
        padding: 12px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: calc( .25em + 1vw);
        line-height: 130%;
        &:hover {
          border-radius: 6px;
          background-color: #E9F4F5;
          color: #4CA7A8;
        }

        span {
          margin-left: 16px;
          font-weight: 500;
        }
      }
    } 
  }
    .aside__myAccount-contianer {
      color: #AEAEAE;
      font-weight: 400;
      position: absolute;
      top: 353px;
      height: 209px;
      width: 220px;
         li {
        align-items: center;
        display: flex;
         color: #0F1527;
        list-style: none;
        justify-content: flex-start;
        line-height: 130%;
        width: 216px;
        padding: 12px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: calc( .25em + 1vw);
        line-height: 130%;
        &:hover {
          border-radius: 6px;
          background-color: #E9F4F5;
          color: #4CA7A8;
        }

        span {
          border-radius: 6px;
          margin-left: 16px;
          font-weight: 500;
        }
      }
    }

    .aside__settings-contianer {
      color: #AEAEAE;
      font-weight: 400;
      position: absolute;
      bottom: 40px;
      height: 157px;
      width: 220px;
         li {
        align-items: center;
        display: flex;
        list-style: none;
        color: #0F1527;
        justify-content: flex-start;
        line-height: 130%;
        width: 216px;
        padding: 12px;
        font-family: 'DM Sans';
        font-style: normal;
        font-weight: 400;
        font-size: calc( .25em + 1vw);
        line-height: 130%;
         &:hover {
          border-radius: 6px;
          background-color: #E9F4F5;
          color: #4CA7A8;
        }

        span {
          margin-left: 16px;
          font-weight: 500;
        }
      }
    }
  }
`

export default NavBar