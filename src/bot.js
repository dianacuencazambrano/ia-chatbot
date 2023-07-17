require('dotenv').config();
const { getNameOnly, validateSession } = require('../src/helper');

const { textResponse, quickResponse } = require('../src/responses');
const {
    soledad,
    laborales,
    estudiantil,
    social,

    opSiNo,
    opSocial

} = require('../src/title&body');

async function bot(request) {
    let intent = request.body.queryResult.intent.displayName;
    
    console.log('\n\nIntent: ' + intent);

    switch (intent) {
        /* case 'Default Welcome Intent':
            title = 'Buen día, gracias por escribirnos! Para un mejor asesoramiento, indíquenos cuál es su nombre por favor: ';
            response = new Array(textResponse(title));
            break; */
        case 'ansiedad_estudiantil':
            title = estudiantil.inicio;
            response = new Array(quickResponse(title, opSiNo));
            break;
        case 'dormir-si':
            title = estudiantil.dormirSi;
            response = new Array(quickResponse(title, opSiNo));
            break;
        case 'dormir-no':
            title = estudiantil.dormirNo;
            response = new Array(quickResponse(title, opSiNo));
            break;
        case 'hobby-no':
            title = estudiantil.hobby;
            response = new Array(textResponse(title));
            break;
        case 'hobby-si':
            title = estudiantil.hobby;
            response = new Array(textResponse(title));
            break;
        case 'hobby-si-2':
            title = estudiantil.hobby;
            response = new Array(textResponse(title));
            break;
        case 'hobby-no-2':
            title = estudiantil.hobby;
            response = new Array(textResponse(title));
            break;
        case 'soledad':
            title = soledad.inicio;
            response = new Array(textResponse(title));
            break;
        case 'familia':
            title = soledad.familia;
            response = new Array(textResponse(title));
            break;
        case 'amigos':
            title = soledad.amigos;
            response = new Array(textResponse(title));
            break;
        case 'pareja':
            title = soledad.pareja;
            response = new Array(textResponse(title));
            break;
        case 'ansiedad_social':
            title = social.inicio;
            response = new Array(quickResponse(title, opSocial));
            break;
        case 'funciona':
            title = social.funcionoSi;
            response = new Array(textResponse(title));
            break;
        case 'no_funciona':
            title = social.funcionoNo;
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

