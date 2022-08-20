import styled from 'styled-components'

const Home = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;

  .container__home-main {
    width: 100%;
  }
  /* .calendar__container {
    border: 1px solid #E8E8E8;
    margin-bottom: 32px;
    padding: 24px;
    height: 375px;
    width: 420px;
    .calendar__container-month {
      display: flex;
      justify-content: space-between;
      width: 365px;
    }

    .calendar__container-nameMonth {
      font-size: 24px;
      margin-bottom: 24px;
    }

     .rc_header_nav.rc_header_nav-prev > span {
      visibility: hidden;
    } 
    
    .rc_header_nav.rc_header_nav-next > span {
      visibility: hidden;
    }

    .rc_header_nav.rc_header_nav-prev {
      position: relative;
    }

    .rc_header_nav.rc_header_nav-prev::after {
    content: " ";
    background-image: url('/images/arrow-left.svg');
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    height: 10px;
    width:10px;
    top: .8rem;
    left: .8rem;
    }
    .rc_header_nav.rc_header_nav-next::before {
      content: " ";
      background-image: url('/images/arrow-right.svg');
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      height: 10px;
      width:10px;
      top: 1rem;
      right: 1rem;
    }
  }

  .calendar__daily {
    border-top: 1px solid #E8E8E8;
    border-left: 1px solid #E8E8E8;
    position: absolute;
    right: 32px;
    top: 32px;
    overflow-y: scroll;
    padding: 40px;
    width: 1080px;
    height: 780px;
    ::-webkit-scrollbar {
      width: 1px;
    }
  } */
`

export default Home
