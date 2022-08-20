import React from 'react'
import styled from 'styled-components'

const Main = styled.main`
  border: 2px solid black;
  display: flex;
  padding: 32px;

  .mainComponent__left,
  .mainComponent__right {
    border: 2px solid black;
  }

  .mainComponent__left {
    width: 26.96%;
    height: 753px;
  }

  .mainComponent__right {
    height: 800px;
    width: 68%;
  }

  .mainComponent__separatorLine {
    margin: 0 40px;
  }
`

function MainComponent () {
  return (
    <Main>
      <section className='mainComponent__left'>Esquerda</section>
      <hr className='mainComponent__separatorLine' />
      <section className='mainComponent__right'>Direita</section>
    </Main>
  )
}

export default MainComponent
