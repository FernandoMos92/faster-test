import React from 'react'
// import { UserContext } from '../../Context/UserContext'
// import readLocalStorage from '../../utils/readLocalStorage'

// Components import
import Aside from '../Aside'
import Header from '../Header'
import Home from './Home'
import MainComponent from '../MainComponent'
// import Schedule from '../Schedule/index'
// import CardNewEvent from '../CardNewEvent/index'
// import CardEvent from '../CardEvent/index'
// import DetailsCard from '../DetailsCard/index'

function HomePage ({ temperature }:any) {
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
        {/* <MyCalendar /> */}
      {/* <section className='calendar__events'>
        <h2 className='calendar__events-title'>Next Event</h2>
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
