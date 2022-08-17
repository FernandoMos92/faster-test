import React, { createContext, ReactNode, useState } from 'react'

type eventType = {
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
   newEvent: {
    date: string,
    hour: string,
    minute: string,
    title: string,
    description: string,
    location: string
   },
  setNewEvent: (newState: eventType) => void;
  value: string;
  setValue: (newState: string) => void;
  allEvents: any;
  setAllEvents: (newState: string) => void;
}

type UserContextProps = {
  children: ReactNode
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => { },
  newEvent: {
    date: '',
    hour: '',
    minute: '',
    title: '',
    description: '',
    location: ''
  },
  value: '',
  allEvents: []
}

export const UserContext = createContext<UserContextTypes>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  const [newEvent, setNewEvent] = useState(initialValue.newEvent)
  const [value, setValue] = useState(new Date())
  const [allEvents, setAllEvents] = useState(initialValue.allEvents)

  const scheduleContext = {
    isOpenModal,
    setIsOpenModal,
    newEvent,
    setNewEvent,
    value,
    setValue,
    allEvents,
    setAllEvents
  }

  return (
    <UserContext.Provider value={scheduleContext}>
      { children }
    </UserContext.Provider>
  )
}
