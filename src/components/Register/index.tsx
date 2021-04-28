import { useContext } from 'react'
import { Context, userActions } from '../../context'
import { Button, Input, Error } from '../atoms'
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
  const { register, handleSubmit, formState: { errors }, watch } = useForm({
    resolver: yupResolver(schema)
  })

  const formRegister = () => {
    watch().isValid
    updateUser({
      action: userActions.REGISTER,
      user: watch()
    })
  }

  return (
    <>
      <form onSubmit={() => handleSubmit(formRegister)}>
        <Input
          type='text'
          label='nome'
          {...register('name')} />
        <Error>{errors.text?.message}</Error>
        <Input
          type='email'
          label='email'
          {...register('email')} />
        <Error>{errors.email?.message}</Error>
        <Input
          type='password'
          label='password'
          {...register('password')} />
        <Error>{errors.password?.message}</Error>
        <Input
          type='password'
          label='repita o password'
          {...register('password2')} />
        <Error>{errors.password?.message}</Error>
        <Button type='submit'>Registro</Button>
      </form>
    </>
  )
}
