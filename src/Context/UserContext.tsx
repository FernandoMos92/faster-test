import React, { createContext, ReactNode, useState, useEffect } from 'react'
import readLocalStorage from '../utils/readLocalStorage'

type eventType = {
  id: number,
  date: string,
  hour: string,
  minute: string,
  title: string,
  description: string,
  location: string
}

type UserContextTypes = {
  isOpenModal: boolean;
  setIsOpenModal: (newState: boolean) => void;
  isDetailOpen: boolean;
  setIsDetailOpen: (newState: boolean) => void;
  deleteEvent: boolean;
  setDeleteEvent: (newState: boolean) => void;
  newEvent: eventType,
  setNewEvent: (newState: eventType) => void;
  allEvents: eventType[];
  setAllEvents: (newState: string | any) => void;
  updateEvents: () => void;
  clearEventStage: () => void;
  dateEvent: Date;
  setDateEvent: (newState: any) => void;
  filterEvents: any[];
  setFilterEvents: (newState: any) => void;
}

const clearEvent = {
  id: 0,
  date: '',
  hour: '1 am',
  minute: '0',
  title: '',
  description: '',
  location: ''
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => { },
  isDetailOpen: false,
  setIsDetailOpen: () => { },
  deleteEvent: false,
  setDeleteEvent: () => { },
  newEvent: clearEvent,
  setNewEvent: () => { },
  allEvents: [],
  setAllEvents: () => { },
  updateEvents: () => { },
  clearEventStage: () => { },
  dateEvent: null,
  setDateEvent: () => { },
  filterEvents: [],
  setFilterEvents: () => { }
}

type UserContextProps = {
  children: ReactNode
}

export const UserContext = createContext<UserContextTypes>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  const [isDetailOpen, setIsDetailOpen] = useState(initialValue.isOpenModal)
  const [newEvent, setNewEvent] = useState<eventType>(initialValue.newEvent)
  const [dateEvent, setDateEvent] = useState(new Date())
  const [allEvents, setAllEvents] = useState(initialValue.allEvents)
  const [deleteEvent, setDeleteEvent] = useState(false)
  const [filterEvents, setFilterEvents] = useState([])

  useEffect(() => {
    const dataBase = readLocalStorage()
    if (dataBase.length > 0) {
      setAllEvents(dataBase)
    }
  }, [])

  function updateEvents () {
    const database = readLocalStorage()
    if (database.length > 0) {
      return setAllEvents(database)
    }
    return setAllEvents([])
  }

  function clearEventStage () {
    setNewEvent(clearEvent)
  }

  const scheduleContext = {
    isOpenModal,
    setIsOpenModal,
    isDetailOpen,
    setIsDetailOpen,
    newEvent,
    setNewEvent,
    dateEvent,
    setDateEvent,
    allEvents,
    setAllEvents,
    deleteEvent,
    setDeleteEvent,
    updateEvents,
    clearEventStage,
    filterEvents,
    setFilterEvents
  }

  return (
    <UserContext.Provider value={scheduleContext}>
      { children }
    </UserContext.Provider>
  )
}