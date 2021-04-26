// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default (req, res) => {
  if (req.method === 'GET') {
    const data = require('../../data/oscar.json')
    console.log(data)
    res.status(200).json(data)
  }

  if (req.method === 'POST') {
    res.status(200).json({ msg: 'Post method' })
  }

}