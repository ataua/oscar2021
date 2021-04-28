import type { NextApiRequest, NextApiResponse } from 'next'
export default (req: NextApiRequest, res: NextApiResponse) => {
  const file = '../../data/oscar.json'
  const data = require(file)

  if (req.method === 'GET') {
    console.log(data)
    return res.status(200).json(data)
  }

  if (req.method === 'POST') {
    const fs = require('fs')
    data.push(req.body)
    const movieList = JSON.stringify(data)
    try {
      fs.writeFileSync(file, movieList)
      return res.status(201).json({ msg: 'Criado' })
    } catch (err) {
      return res.status(500).json({ msg: 'Não foi possível salvar' })
    }
  }

}