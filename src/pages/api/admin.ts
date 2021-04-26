export default (req, res) => {
  if (req.method === 'GET') {
    res.status(405).json({ msg: 'Method not allowed' })
  }

  if (req.method === 'POST') {
    const userData = req.body
    const userList = require('../../data/users.json')
    console.log(userList)
    res.status(200).json(userList)
  }

}