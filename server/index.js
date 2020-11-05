const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const port = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.post('/', (req, res) => {
  let {
    type,
    season,
    theme,
    color
  } = req.body
  console.log(type,season,theme,color)
  res.status(200).send('Hello Post!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
