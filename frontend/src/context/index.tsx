import React, { createContext, useState } from 'react'

type UserType = {
  name?: string;
  email?: string;
  age?: Number;
  photo?: string;
  phone?: string;
}

type InitialState = {
  auth: Boolean;
  setAuth: Function;
  theme: Boolean;
  setTheme: Function;
  id: Number;
  setId: Function;
  errors: any[];
  addError: Function;
  user: UserType;
}

const state:InitialState = {
  auth: false,
  theme: false,
  id: 0,
  setAuth: () => {},
  setTheme: () => {},
  setId: () => {},
  errors: [],
  addError: () => {},
  user: {}
}

export const Context = createContext<InitialState>(state)

export const Provider:React.FC = ({ children }) => {

  const [id, setId] = useState<Number>(0)
  const [user, setUser] = useState<UserType>({})
  const [auth, setAuth] = useState<Boolean>(false)
  const [theme, setTheme] = useState<Boolean>(false) 
  const [errors, setErrors] = useState<any[]>([]) 

  const addNewError = (error) => setErrors(prev => [...prev, error])

  const state:InitialState = {
    id,
    user,
    setId,
    auth,
    setAuth,
    theme,
    setTheme,
    errors,
    addError: addNewError,
  }

  return (
    <Context.Provider value={state}>
      {
        children
      }
    </Context.Provider>
  )

}