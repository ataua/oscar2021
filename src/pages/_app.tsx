import { contextValues, Context } from '../context'
import '../styles/globals.scss'

const MyApp = ({ Component, pageProps }) => {
  const values = contextValues()

  return (
    <Context.Provider value={values}>
      <main>
        <Component {...pageProps} />
      </main>
    </Context.Provider>
  )
}

export default MyApp
