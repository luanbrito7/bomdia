const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const getMaterial = require('./material')
const getPhrase = require('./phrase')
const createImage = require('./compose')
const port = 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('Hello World!')
})

app.post('/', async (req, res) => {
  const [ phrase, material ] = await Promise.all([
    getPhrase(req.body),
    getMaterial(req.body)
  ]);
  console.log(phrase)
  console.log(material)
  
  const image = await createImage(material.background, material.season, material.theme, phrase)
  console.log(image)
  
  res.status(200).send({
    phrase,
    material
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
