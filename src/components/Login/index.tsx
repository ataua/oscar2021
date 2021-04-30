import { useContext } from 'react'
import { Context, userActions } from '../../context'
import { Button, Label, Error } from '../atoms'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { sha256 } from 'js-sha256'
import * as yup from 'yup'

type User = {
  email: string
  password: string
}

const schema = yup.object().shape({
  email: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
});

export const Login = () => {
  const { updateUser } = useContext(Context)
  const { register, handleSubmit, formState: { errors }, watch } = useForm({ resolver: yupResolver(schema) })

  const formLogin = () => {
    const user = {
      email: watch().email,
      password: sha256(watch().password)
    }

    updateUser({
      action: userActions.LOGIN,
      user
    })
  }

  return (
    <form onSubmit={handleSubmit(formLogin)}>

      <Label text='email'>
        <input
          type='email'
          {...register('email')}
        />
      </Label>
      <Error>{errors.email?.message}</Error>

      <Label text='password'>
        <input
          type='password'
          {...register('password')}
        />
      </Label>
      < Error > {errors?.password?.message}</Error>

      <Button type='submit'>Login</Button>
    </form>
  )
}
