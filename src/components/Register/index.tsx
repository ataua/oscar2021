import { useContext } from 'react'
import { Context, userActions } from '../../context'
import { Button, Label, Error } from '../atoms'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type User = {
  name: string
  email: string
  password: string
}
type UpdateUser = ({ action: string, user: User }) => boolean

const schema = yup.object().shape({
  name: yup.string().required('Campo obrigatório'),
  email: yup.string().required('Campo obrigatório'),
  password: yup.string().required('Campo obrigatório'),
  password2: yup.string().required('Campo obrigatório'),
});

export const Register = () => {
  const { updateUser } = useContext(Context)
  const { register, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema)
  })

  const formRegister = (e) => {
    e.preventDefault()
    watch().isValid
    console.log(watch())
    debugger
    updateUser({
      action: userActions.REGISTER,
      user: watch()
    })
  }

  return (
    <form onSubmit={formRegister}>
      <Label text='nome'>
        <input
          type='text'
          {...register('name')}
        />
      </Label>
      <Error>{errors.text?.message}</Error>
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
      <Label text='repita o password'>
        <input
          type='password'
          {...register('password2')}
        />
      </Label>
      <Error>{errors.password?.message}</Error>
      <Button type='submit'>Registro</Button>
    </form>
  )
}
