// index.js
require('dotenv-vault-core').config()

const PORT = process.env.PORT || 8080
const express = require('express')
const app = express()

app.listen(PORT, () => {
  console.log(`Running on port ${PORT}.`)
})

app.get('/', (req, res) => {
  res.send(`Hello ${process.env.HELLO}`)
})
