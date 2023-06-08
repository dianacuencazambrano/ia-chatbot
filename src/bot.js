require('dotenv').config();
const { getNameOnly, validateSession } = require('../src/helper');

const { textResponse, quickResponse } = require('../src/responses');
const {
    generalChaide,
    asesoriaVentas,
    productos,
    opcionesMenu,

    opMenuPrincipal,
    opAsesoriaVentas,
    opProductos,
    opPreciosPromociones

} = require('../src/title&body');

async function bot(request) {
    let intent = request.body.queryResult.intent.displayName;
    
    console.log('\n\nIntent: ' + intent);

    switch (intent) {
        case 'Default Welcome Intent':
            title = 'Buen día, gracias por escribirnos! Para un mejor asesoramiento, indíquenos cuál es su nombre por favor: ';
            response = new Array(textResponse(title));
            break;
        default:
            response = 'No se encontró la intención';
            break;
    }
    let respo = { "fulfillmentMessages": response };
    console.log(respo.fulfillmentMessages);
    return respo;
}

module.exports = { bot }

