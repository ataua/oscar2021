import { useState, createContext } from 'react'
import { MovieList, MoviePayload, User, UserPayload, ContextType } from './helper'
import { api } from '../services/api'

export const userActions = {
  REGISTER: 'REGISTER',
  LOGIN: 'LOGIN',
  LOGOFF: 'LOGOFF'
}
const noUser: User = {
  name: '',
  token: '',
}

export const contextValues = () => {
  const [user, setUser] = useState(noUser as User)
  const [movieList, setMovieList] = useState([] as MovieList)

  const updateUser = async ({ action, user }: UserPayload) => {
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
        await api.post('/admin', newUser)
        setUser(newUser)
        break

      case LOGIN:
        // TODO: verificação de dados
        const data = await api.get('/admin')
        const found = data.filter(item => item.email = user.login)
        if (found.length) {
          foundUser = found[0].password == user.password ? found[0] : null
          setUser(data)
        }
        break

      case LOGOFF:
        setUser(noUser)
        break

      default:
        return user
    }
  }

  const updateMovieList = ({ action, movie }: MoviePayload) => {
    switch (action) {
      case 'update':
        if (!movieList.includes(movie)) {
          setMovieList([...movieList, movie])
        }
        break
      case 'remove':
        const newList = movieList.filter(m => m.title !== movie.title)
        setMovieList(newList)
        break
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
