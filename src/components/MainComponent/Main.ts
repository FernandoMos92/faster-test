import styled from 'styled-components'

const Main = styled.main`
  border-top: 1px solid #e8e8e8;
  display: flex;
  padding: 32px;

  .mainComponent__left,
  .mainComponent__right {
  }

  .mainComponent__left {
    width: 26.96%;
    height: 753px;
  }

  .mainComponent__right {
    border-top: 2px solid #e8e8e8;
    height: 800px;
    overflow-y: scroll;
    width: 68%;
    ::-webkit-scrollbar {
      width: 1px;
    }
  }

  .mainComponent__separatorLine {
    margin: 0 40px;
  }

  .calendar__container {
    align-items: center;
    border: 1px solid #e8e8e8;
    display: flex;
    height: 355px;
    justify-content: center;
    margin-bottom: 32px;
    width: 100%;
    .calendar__container-month {
      display: flex;
      justify-content: space-between;
      width: 365px;
    }

    .calendar__container-nameMonth {
      font-size: 13px;
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
      content: ' ';
      background-image: url('/images/arrow-left.svg');
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      height: 10px;
      width: 10px;
      top: 0.8rem;
      left: 0.8rem;
    }
    .rc_header_nav.rc_header_nav-next::before {
      content: ' ';
      background-image: url('/images/arrow-right.svg');
      background-size: contain;
      background-repeat: no-repeat;
      position: absolute;
      height: 10px;
      width: 10px;
      top: 1rem;
      right: 1rem;
    }
  }

  .nextEvent {
    color: #0f1527;
    font-weight: 700;
    font-size: 20px;
    line-height: 130%;
  }

    @media screen and (min-width: 1440px){
      width: 99%;
      height: 995px;

    .mainComponent__left {
      height: 100%;
    }

    .mainComponent__separatorLine {
      width: .5px;
      height: 100%;
    }

    .mainComponent__right {
      height: 100%;
    }
  }

    @media screen and (min-width: 1920px){
      height: 995px;

    .mainComponent__left {
      height: 100%;
    }

    .mainComponent__separatorLine {
      width: .5px;
      height: 100%;
    }

    .mainComponent__right {
      height: 100%;
    }
  }


`

export default Main
