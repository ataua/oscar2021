import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import UserList from 'users.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  // verifica se o usuário já existe (ou outro com mesmo email)
  const found = UserList.filter(user => user.email === email)
  if (found.length) {
    res.status(400)
  }

  // atualiza os dados
  const newList = [...UserList, { email, password }]

  // salva os dados atualizados
  const saveData = JSON.stringify(newList)
  fs.writeFile(
    'users.json',
    saveData,
    (err) => {
      if (err) {
        console.log(err)
        res.status(500)
      }
    }
  )
  res.status(201)
}