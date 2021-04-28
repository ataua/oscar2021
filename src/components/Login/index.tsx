import { useContext } from 'react'
import { Context, userActions } from '../../context'
import { Button, Label, Error } from '../atoms'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup.object().shape({
  email: yup.string().required({ message: 'Campo obrigatório' }),
  password: yup.string().required({ message: 'Campo obrigatório' }),
});

type User = {
  email: string
  password: string
}

export const Login = () => {
  const { updateUser } = useContext(Context)
  const { register, handleSubmit, formState: { errors }, watch } = useForm<User>({
    resolver: yupResolver(schema)
  })

  const formLogin = async () => {
    console.log(watch())
    await updateUser({
      action: userActions.LOGIN,
      user: watch()
    })
  }

  return (
    <form method='post' onChange={() => console.log(watch())}>
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
      <Error>{errors.password?.message}</Error>
      <Button onClick={() => handleSubmit(formLogin)}>Login</Button>
    </form>
  )
}
