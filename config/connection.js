/* //Llamada a la librería
const { promisify }= require('util');
const cors = require('cors')
const express = require('express')
const app = express()
let db = require('mysql2')

app.use(cors())

//Establecemos conexión con la BD
const pool = db.createPool({
    host: "34.74.221.96",
    database: "chaide",
    user: "diana",
    password: "pPm42AN@YUre"
});

pool.getConnection(function (err, connection) {
    if (err) { console.error(`Error al conectar: ${err.stack}`); }
    if (connection) { connection.release(); console.log(`Conectado`);};
    return;
});

pool.query = promisify(pool.query);

module.exports = pool;

//Exportamos los módulos
// module.exports = {
//     connection,
//     query
// } */