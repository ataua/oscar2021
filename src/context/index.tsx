import { useState, createContext } from 'react'
import { User, UserPayload, ContextType, Message } from './helper'
import { api } from '../services/api'

export const userActions = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN',
}

export const noUser: User = {
  email: '',
}

const defaultMessage: Message = { type: null, text: '' }

export const contextValues = () => {
  const [user, setUser] = useState(noUser)
  const [message, setMessage] = useState(defaultMessage)

  const updateUser = ({ action, user }: UserPayload) => {
    const { REGISTER, LOGIN } = userActions

    switch (action) {

      case REGISTER:
        api
          .post('/adm/new', user)
          .then(res => { res.status })

      case LOGIN:
        api
          .post('/adm/connect', user)
          .then(({ status, data }) => {
            if (status === 200) {
              setUser(data)
            }
            return { status }
          })
    }
  }

  const showMessage = (msg: Message) => {
    setMessage(msg)
    setTimeout(setMessage, 3000, defaultMessage)
  }

  return {
    user,
    updateUser,
    message,
    showMessage
  }
}

export const Context = createContext({} as ContextType)
