import Head from 'next/head'
import { useContext } from 'react'
import { Admin, MovieList } from '../components'
import { Context } from '../context'
import styles from '../styles/Home.module.scss'

const Home = () => {
  const { user } = useContext(Context)
  return (
    <>
      <Head>
        <title>{
          user?.token
            ? 'Oscar 2021 | Movies'
            : 'Oscar 2021 | Admin'
        }</title>
      </Head>
      <main className={styles.content}>
        <h1>Oscar 2021</h1>
        {
          user?.token
            ? <MovieList />
            : <Admin />
        }
      </main>
    </>
  )
}

export default Home