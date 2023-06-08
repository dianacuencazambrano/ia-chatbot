//Invocamos express
const express = require('express')

//importacion de librerias
require('dotenv').config()
const cors = require('cors')

//Instanciamos el servidor en un puerto local
const app = express()
const port = process.env.PORT

//Declaración de middlewares
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Llamada al enrutador
app.use('/', require('./src/routes'));

//Puerto
app.listen(port, () => {
  console.log(`Listening on port ${port}`)
});