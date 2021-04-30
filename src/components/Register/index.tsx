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

const emptyUser = {
  email: '',
  password: ''
}

const schema = yup.object().shape({
  email: yup
    .string()
    .required('Campo obrigatório'),
  password: yup
    .string()
    .required('Campo obrigatório'),
  password2: yup
    .string()
    .oneOf([yup.ref('password'), null], "Passwords devem coincidir")
    .required('Campo obrigatório'),
});

export const Register = () => {
  const { updateUser, showMessage } = useContext(Context)
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm({ resolver: yupResolver(schema) })

  const formRegister = async () => {
    const user = {
      email: watch().email,
      password: sha256(watch().password)
    }

    const res = await updateUser({
      action: userActions.REGISTER,
      user
    })

    reset(emptyUser)
    switch (res) {
      case 201:
        showMessage({ type: 'success', text: 'Usuário criado com sucesso' })
        break
      case 400:
        showMessage({ type: 'warning', text: 'Usuário já existente' })
        break
      case 500:
        showMessage({ type: 'error', text: 'Erro interno, Impossível salvar dados' })
        break
      default:
        break
    }

  }

  return (
    <>
      <form onSubmit={handleSubmit(formRegister)}>

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

        <Label text='repita a password'>
          <input
            type='password'
            {...register('password2')}
          />
        </Label>
        <Error>{errors.password2?.message}</Error>

        <Button type='submit'>Registro</Button>
      </form>
    </>
  )
}
