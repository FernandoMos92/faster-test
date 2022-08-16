import React, { createContext, ReactNode, useState } from 'react'

type UserContextTypes = {
  isOpenModal: boolean;
  setIsOpenModal: (newState: boolean) => void;
}

type UserContextProps = {
  children: ReactNode
}

const initialValue = {
  isOpenModal: false,
  setIsOpenModal: () => {}
}

export const UserContext = createContext<UserContextTypes>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {
  const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
  return (
    <UserContext.Provider value={{ isOpenModal, setIsOpenModal }}>
      { children }
    </UserContext.Provider>
  )
}
