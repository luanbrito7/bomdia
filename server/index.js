const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors = require('cors')
const getMaterial = require('./service/material')
const getPhrase = require('./service/phrase')
const createImage = require('./service/compose')
const port = process.env.PORT || 8080

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); 
app.use(cors())

app.get('/', (req, res) => {
  res.status(200).send('The server is READY for use!')
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
    material,
    image
  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
