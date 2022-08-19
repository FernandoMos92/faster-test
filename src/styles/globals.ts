import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

  * {
    background-color:  #FFFFFF;
    color: #0F1527;
    font-family: 'DM Sans', sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    display: flex;
    flex-flow: row nowrap;
    height: 100vh;
    width: 100vw;
  }
`
