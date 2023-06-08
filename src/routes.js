//Destructuramos el médoto Router propio de Express, asignado a una variable
const { Router } = require('express')
const router = Router();

const { bot } = require('../src/bot')

router.post('/chaide-clientes', async (req, res) => {
    let data = await bot(req);
    res.json(data);
})

//Ruta para consultar datos **BASE DE PRUEBA**

router.get('/', async function(req, res) {
    try {
        res.send("Bot Chaide Clientes");
    } catch (error) {
        return res.json({ error:true, message:error });
    }
})

//Exportamos los módulos
module.exports = router;