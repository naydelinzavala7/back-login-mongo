const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express()

//Capturar el body
app.use(bodyParser.urlencoded({
    extended: false
}))
app.use(bodyParser.json())

// Conexion a la base de datos
const url = `mongodb+srv://Naydelin:NAYDE78910@cluster0.7pfwcay.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log('Conectado a BD'))
  .catch((error) => console.log('Error: ' + error))

// Creacion e importacion de rutas
const authRoutes = require('./routes/auth')

// Rutas del middleware
app.use('/api/user', authRoutes)

app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona bien'
    })
})

// Iniciamos el servidor
const PORT = process.env.PORT || 10000
app.listen(PORT, () => {
    console.log(`Servidor en Puerto: ${PORT}`)
})
