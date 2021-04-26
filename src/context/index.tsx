import { useState, createContext } from 'react'
import { MovieList, MoviePayload, User, UserPayload, ContextType } from './helper'

export const userActions = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN',
  LOGOFF: 'LOGOFF'
}

export const contextValues = () => {
  const [user, setUser] = useState({} as User)
  const [movieList, setMovieList] = useState([] as MovieList)

  const updateUser = ({ action, user }: UserPayload) => {
    const { REGISTER, LOGIN, LOGOFF } = userActions
    switch (action) {
      case REGISTER:
        // TODO: jwt
        const token = 'temporary data'
        const password = 'criptografar'
        const newUser = {
          name: user.name,
          email: user.email,
          token,
          password
        }
        // TODO: armazenar no arquivo .json
        setUser(newUser)
        return true

      case LOGIN:
        // TODO: verificação de dados
        const data = {
          name: 'Atauã',
          token: '123456'
        }
        setUser(data)
        return true

      case LOGOFF:
        setUser({
          name: '',
          token: '',
        })
        return true

      default:
        return false
    }
  }

  const updateMovieList = ({ action, movie }: MoviePayload) => {
    switch (action) {
      case 'update':
        if (!movieList.includes(movie)) {
          setMovieList([...movieList, movie])
          return true
        }
        return false
      case 'remove':
        const newList = movieList.filter(m => m.title !== movie.title)
        setMovieList(newList)
        return true
      default:
        return false
    }
  }

  return {
    user,
    updateUser,
    movieList,
    updateMovieList
  }
}

export const Context = createContext({} as ContextType)
