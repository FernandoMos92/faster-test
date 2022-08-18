import styled from 'styled-components'

const Scalendar = styled.main`
  background-image: url('../../public/images/arrow-left.svg');
  display: flex;
  flex-flow: column nowrap;
  background-color: #FFF;
  position: absolute;
  top: 138px;
  left:  266px;
  height: 85.6vh;
  width: 85.5vw;
  padding: 32px 32px 0 32px;

  .calendar__container {
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
  }
`

export default Scalendar
