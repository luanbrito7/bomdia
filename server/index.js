const express = require('express')
const app = express()
const cors = require('cors')
const port = 8080

app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
