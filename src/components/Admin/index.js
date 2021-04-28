import { useState } from 'react'
import { Login } from '../Login'
import { Register } from '../Register'
import styles from './styles.module.scss'

export const Admin = () => {
  const [active, setActive] = useState(true)

  return (
    <div className={styles.container}>
      <header>
        <button onClick={() => setActive(true)}>
          <h2>Login</h2>
        </button>
        <button onClick={() => setActive(false)}>
          <h2>Registro</h2>
        </button>
      </header>
      <main>
        {
          active
            ? <Login />
            : <Register />
        }
      </main>
    </div>
  )
}