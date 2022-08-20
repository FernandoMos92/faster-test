import styled from 'styled-components'

const Aside = styled.aside`
  align-items: center;
  border-right: 1px solid #e8e8e8;
  display: flex;
  flex-flow: column nowrap;
  height: 100%;
  overflow-y: scroll;
  padding: 53px 26px 42px 26px;
  width: 268px;

  ::-webkit-scrollbar {
      width: 1px;
    }

  .default__aside-style {
    height: 71px;
    width: 218px;

    ul {
      li {
        list-style: none;
      }
    }
  }

  .aside__image-logo {
    background-color: #355072;
    padding: 7.3% 9.8% 6.4% 8.4%;

    img {
      background-color: transparent;
    }
  }

  .aside__nav-pages {
    height: 19.1%;
    margin-top: 27px;

    .aside__nav-options {
      display: flex;
      flex-flow: column nowrap;
      height: 100%;
      justify-content: space-between;
      list-style: none;
      .aside__nav-itens {
          li {
            align-items: center;
            border-radius: 6px;
            display: flex;
            font-size: 16px;
            font-weight: 400;
            line-height: 130%;
            height: 48px;
            padding: 12px;
            
            span {
              background-color: transparent;
              margin-left: 14px;
          }

          img {
            background-color: transparent;
            height: 24px;
            width: 24px;
            color: #4ca7a8 !important;
          }
          &:hover {
            background-color: #e9f4f5;
            span {
              color: #4ca7a8 !important;
            }
          }
        }
      }
    }
  }

  .aside__nav-account {
    height: 19.1%;
    margin-top: 50px;

    .aside__list-label {
      color: #AEAEAE;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }

    .aside__list {
      margin-top: 32.5px;
    }

    .aside__nav-itens {
          li {
            align-items: center;
            border-radius: 6px;
            display: flex;
            font-size: 16px;
            font-weight: 400;
            line-height: 130%;
            height: 48px;
            padding: 12px;
            
            span {
              background-color: transparent;
              margin-left: 14px;
          }

          img {
            background-color: transparent;
            height: 24px;
            width: 24px;
            color: #4ca7a8 !important;
          }
          &:hover {
            background-color: #e9f4f5;
            span {
              color: #4ca7a8 !important;
            }
          }
        }
      }
  }

  .aside__nav-system {
    height: 19.1%;
    margin-top: 167px;

    .aside__list-label {
      color: #AEAEAE;
      font-weight: 400;
      font-size: 16px;
      line-height: 130%;
    }

    #aside__list > span:nth-child(1) > li {
      margin-top: 37.5px;
      margin-bottom: 15.7px;
    }

    #aside__list > span:nth-child(2) > li {
      margin-bottom: 55.7px;
    }

    .aside__nav-itens {
      li {
        align-items: center;
        border-radius: 6px;
        display: flex;
        font-size: 16px;
        font-weight: 400;
        line-height: 130%;
        height: 48px;
        padding: 12px;
            
            span {
              background-color: transparent;
              margin-left: 14px;
          }

          img {
            background-color: transparent;
            height: 24px;
            width: 24px;
            color: #4ca7a8 !important;
          }
          &:hover {
            background-color: #e9f4f5;
            span {
              color: #4ca7a8 !important;
            }
          }
        }
      }
  }

  @media screen and (min-width: 1440px){
    height: 1080px;
  }

  @media screen and (min-width: 1920px){
    height: 1080px;
  }
`
export default Aside
