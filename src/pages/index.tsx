import React from 'react'
import styled from 'styled-components'
import Image from '../../node_modules/next/image'
import Logo from '../../public/images/fasters.png'
import generateDate from '../utils/generateDate'
import { mainIcons, myAccontIcons, systemIcons } from '../utils/icons'

const Aside = styled.aside`
  background-color: #FFFFFF;
  border:  2px solid black;
  height: 100vh;
  width: 268px;

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

        span {
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

        span {
          margin-left: 16px;
          font-weight: 500;
        }
      }
    }
  }
`

const Sheader = styled.header`
  border:  2px solid black;
  position: absolute;
  left: 266px;
  top: 0;
  height: 139px;
  width: 84.1%;
  padding: 55px 32px;
`

const Main = styled.main`
  border:  2px solid red;
  position: absolute;
  top: 138px;
  left:  266px;
  height: 84.3%;
  width: 84.1%;
`

function Home () {
  console.log(generateDate())
  return (
    <>
      <Sheader>
        <section className=''>
          date
        </section>
        <section className=''>
          search
        </section>
      </Sheader>
      <Aside>
        <div>
          <Image src={Logo} alt="" />
          <section className="aside__main-container">
            <ul className="aside__list-icon">
              {
                mainIcons.map(({ icon, name }) => (
                  <li key={name}>
                    <Image src={icon} alt="icone" />
                    <span>{ name}</span>
                  </li>
                ))
              }
            </ul>
          </section>
          <section className="aside__myAccount-contianer">
            <p>My account</p>
            {
              myAccontIcons.map(({ icon, name }) => (
                <li key={name}>
                  <Image src={icon} alt="icone" />
                  <span>{ name}</span>
                </li>
              ))
            }
          </section>
          <section className="aside__settings-contianer">
            <p>System</p>
             {
              systemIcons.map(({ icon, name }) => (
                <li key={name}>
                  <Image src={icon} alt="icone" />
                  <span>{ name}</span>
                </li>
              ))
              }
          </section>
        </div>
      </Aside>
      <Main>
        main
      </Main>
    </>
  )
}

export default Home
