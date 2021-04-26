import Head from 'next/head'
import { useContext } from 'react'
import { Login, MovieList } from '../components'
import { Context } from '../context'
import styles from '../styles/Home.module.css'

const Home = () => {
  const { user } = useContext(Context)
  return (
    <>
      <Head>
        <title>{
          user?.token
            ? 'Oscar 2021 | Movies'
            : 'Oscar 2021 | Login'
        }</title>
      </Head>
      {
        user?.token
          ? <MovieList />
          : <Login />
      }
    </>
  )
}

export default Home