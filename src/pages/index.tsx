import Head from 'next/head'
import { useEffect, useState, useContext } from 'react'
import { Admin, MovieList } from '../components'
import { Context } from '../context'
import styles from '../styles/Home.module.scss'

const Home = () => {
  const { user, message } = useContext(Context)
  const [style, setStyle] = useState(styles.alert)

  useEffect(() => {
    setStyle(styles.alert + ' ' + styles[message.type])
  }, [message])

  return (
    <>
      <Head>
        <title>{
          user.email == ''
            ? 'Oscar 2021 | Admin'
            : 'Oscar 2021 | Movies'
        }</title>
      </Head>
      <h1 className={styles.h}>Oscar 2021</h1>
      <main className={styles.content}>
        {message && <div className={style}>{message.text}</div>}
        {
          user.email == ''
            ? <Admin />
            : <MovieList />
        }
      </main>
    </>
  )
}

export default Home