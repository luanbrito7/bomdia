const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const getMaterial = require('./material')
const port = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.post('/', async (req, res) => {
  let material = await getMaterial(req.body)
  let {
    season,
    theme,
    background
  } = material
  console.log(season)
  console.log(theme)
  console.log(background)
  res.status(200).send('Hello Post!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
