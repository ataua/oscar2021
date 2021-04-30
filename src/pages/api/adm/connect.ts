import { NextApiRequest, NextApiResponse } from 'next'
import userList from 'users.json'

export default (req: NextApiRequest, res: NextApiResponse) => {
  const { email, password } = req.body

  const found = userList.filter(user => user.email === email)
  if (found.length) {
    const user = found[0]
    if (user.password === password) {
      res.status(200).json({ email })
    } else {
      res.status(403)
    }
  }
  res.status(404)
}