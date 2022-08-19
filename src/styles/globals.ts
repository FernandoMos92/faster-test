import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    background-color:  #FFFFFF;
    box-sizing: border-box;
    color: #0F1527;
    font-family: 'DM Sans', sans-serif;
    margin: 0px;
    padding: 0px;
  }

  html {
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;
    width: 100vw;
  }
`
