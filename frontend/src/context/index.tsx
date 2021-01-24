import React, { createContext, useState } from 'react'

type InitialState = {
  auth: Boolean;
  setAuth: Function;
  theme: Boolean;
  setTheme: Function;
  id: Number;
  setId: Function;
}

const state:InitialState = {
  auth: false,
  theme: false,
  id: 0,
  setAuth: () => {},
  setTheme: () => {},
  setId: () => {}
}

export const Context = createContext<InitialState>(state)

export const Provider:React.FC = ({ children }) => {

  const [id, setId] = useState<Number>(0)
  const [auth, setAuth] = useState<Boolean>(false)
  const [theme, setTheme] = useState<Boolean>(false) 

  const state:InitialState = {
    id,
    setId,
    auth,
    setAuth,
    theme,
    setTheme
  }

  return (
    <Context.Provider value={state}>
      {
        children
      }
    </Context.Provider>
  )

}