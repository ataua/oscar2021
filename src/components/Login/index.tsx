import { useContext, useState } from 'react'
import { Context, userActions } from '../../context'

type User = {
  email: string,
  password: string
}
type UpdateUser = ({ action: string, user: User }) => boolean

const { LOGIN, REGISTER, LOGOFF } = userActions

const Login = () => {
  const { user, updateUser } = useContext(Context)
  const [formData, setFormData] = useState({
    email: 'ataua@ataua.com',
    password: '123456'
  })

  const login = () => {
    const logged = updateUser({
      action: LOGIN,
      user: formData
    })
    console.log(user)
    if (!logged) {
      console.log('Não foi possível fazer o login')
    }
  }

  return (
    <>
      <h1>Olá. Registre-se ou faça seu login</h1>
      <button onClick={login}>Login</button>
    </>
  )
}

export default Login