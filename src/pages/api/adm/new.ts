import type { NextApiRequest, NextApiResponse } from 'next'
import * as fs from 'fs'
import userList from 'users.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  // verifica se o usuário já existe (ou outro com mesmo email)
  const found = userList.filter(user => user.email === email)
  if (found.length) {
    return res.status(400)
  }

  // atualiza os dados
  const newList = [...userList, { email, password }]

  // salva os dados atualizados
  const saveData = JSON.stringify(newList)
  fs.writeFile(
    'users.json',
    saveData,
    (err) => {
      if (err) {
        res.status(500)
      }
    }
  )
  res.status(201)
}