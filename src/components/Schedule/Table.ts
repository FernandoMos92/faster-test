import styled from 'styled-components'

const Table = styled.table`
position: relative;
tbody {
  td {
    border-bottom: 2px solid #E8E8E8;
    color: #B4BAC5;
    font-size: 16px;
    text-align: end;
    padding: 10px;
    width: 160px;
    height: 80px;
    user-select: none;
  }
  
  .schedule__hour {
    align-items: flex-start;
    border-right: 2px solid #E8E8E8;
    color: #B4BAC5;
    display: flex;
    font-weight: 500;
    font-size: 13px;
    height: 80px;
    justify-content: flex-end;
    line-height: 17px;
    padding: 16px;
    width: 160px;
  }

  .schedule__lineTime {
    width: 85%;
  }

  .schedule__firstHalf-hour {
    border-bottom: 1px solid #E8E8E8;
    height: 50%;
  }

  .schedule__secondHalf-hour {
     border-top: 1 solid  #E8E8E8;
     height: 50%;
  }
}

@media screen and (min-width: 1440px){
}

  @media screen and (min-width: 1920px){
     .schedule__firstHalf-hour, .schedule__secondHalf-hour {
        width: 160%;
     }
  
}
`

export default Table
