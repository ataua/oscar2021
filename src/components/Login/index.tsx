import { useContext } from 'react'
import { Context, userActions } from '../../context'
import { Button, Input } from '../atoms'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type User = {
  email: string
  password: string
}

type UpdateUser = ({ action: string, user: User }) => boolean

const schema = yup.object().shape({
  email: yup.string().required({ msg: 'Campo obrigatório' }),
  password: yup.string().required({ msg: 'Campo obrigatório' }),
});

export const Login = () => {
  const { updateUser } = useContext(Context)
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema)
  })

  const formLogin = () => {
    updateUser({
      action: userActions.LOGIN,
      user: watch()
    })
  }

  return (
    <>
      <form onSubmit={() => handleSubmit(formLogin)}>
        <Input
          type='email'
          label='email'
          {...register('email')}
        />
        <p>{errors.email?.message}</p>
        <Input
          type='password'
          label='password'
          {...register('password')}
        />
        <p>{errors.password?.message}</p>
        <Button type='submit'>Login</Button>
      </form>
    </>
  )
}
