import React, { createContext, useState } from 'react'
import { User } from '../components/User'

interface User {
  name?: string;
  email?: string;
  username?: string;
  description?: string;
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
  user: User;
  setUser: Function
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
  user: {},
  setUser: () => {}
}

export const Context = createContext<InitialState>(state)

export const Provider:React.FC = ({ children }) => {

  const [id, setId] = useState<Number | null>(null)
  const [user, setUser] = useState<User>({})
  const [auth, setAuth] = useState<Boolean>(false)
  const [theme, setTheme] = useState<Boolean>(false) 
  const [errors, setErrors] = useState<any[]>([]) 

  const addNewError = (error) => setErrors(prev => [...prev, error])

  const state:InitialState = {
    id,
    user,
    setUser,
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