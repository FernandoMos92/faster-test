import React from 'react'

// Components import
import Aside from '../Aside'
import Header from '../Header'
import Home from './Home'
import MainComponent from '../MainComponent'
// import CardEvent from '../CardEvent/index'
// import DetailsCard from '../DetailsCard/index'

function HomePage () {
  // const { isOpenModal, isDetailOpen, setIsDetailOpen } = useContext(UserContext)
  // const [details, setDetails] = useState({
  //   title: '',
  //   description: '',
  //   date: Date,
  //   hour: '',
  //   id: 0,
  //   location: '',
  //   minute: ''
  // })

  // function handleDetails ({ target }) {
  //   const elementsLocal = readLocalStorage()
  //   elementsLocal.forEach((el) => {
  //     if (el.id === parseInt(target.id)) {
  //       const { date, description, hour, id, location, minute, title } = el
  //       setDetails({
  //         title,
  //         description,
  //         hour,
  //         id,
  //         location,
  //         minute,
  //         date
  //       })
  //     }
  //     if (!isDetailOpen) setIsDetailOpen(true)
  //   })
  // }

  return (
    <Home>
      <Aside />
      <div className='container__home-main'>
        <Header />
        <MainComponent />
      </div>
      {/*
        <CardEvent
          onClick={handleDetails}
        />
        {
          isDetailOpen && <DetailsCard elements={details} />
      }
      </section>
      <section className='calendar__daily'>
        <Schedule />
      </section>
      {
        isOpenModal && <CardNewEvent temperature={ temperature } />
      } */}
    </Home>
  )
}

export default HomePage
