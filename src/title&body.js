
const soledad = {
    inicio: 'Estas en una situación complicada, tranquilo, aquí estoy para escucharte y darte unos cuantos consejos. ¿Que consideras es lo que te hace sentir solo en este momento?',
    familia: 'Entiendo las situaciones familiares o la ausencia de un familiar puede llegar a ser muy difícil. Puedes intentar hablar con un profesional sobre lo que te aqueja, al inicio puede ser difícil pero después de un tiempo esto te llevara a una mejoría, en otro caso hablar con alguien cercano o de confianza siempre es buena idea. Pero no te preocupes, yo estoy aquí y puedo escucharte!',
    amigos: 'Oh ya veo, bueno si deseas puedes intentar buscar grupos de interés común en línea, ya sea de las series que te gustan o de tus pasatiempos mas amados. También puedes tomar cursos o clases en línea de algo que te gusta, ahí podrás interactuar con varios tipos de gente e intentar crear un ambiente mas cómodo para ti.',
    pareja: 'Una situación difícil, pero recuerda que primero debes de reflexionar y cuidarte a ti mismo para poder centrarte en alguien mas. Así que siempre vela primero por tu bienestar. Puedes intentar distraerte participando en actividades que te gusten, pasatiempos que adores. Y no olvides que si necesitas algo más peudes decírmelo!'
}

const estudiantil = {
    inicio: 'Entiendo, ¿haz dormido entre 7 y 8 horas últimamente?',
    dormirSi: 'Perfecto! El dormir entre 7 y 8 horas es una gran factor de ayuda a tu salud mental tenlo en cuenta siempre.\n\nCuéntame, el hobby que me comentaste anteriormente, ¿lo practicas con regularidad?',
    dormirNo: 'Recuerda que las horas de sueño pueden afectar rendimiento, recuerda darte el tiempo necesario para que tu cuerpo descanse y pueda seguir en tu día a día.\n\nCuéntame, el hobby que me comentaste anteriormente, ¿lo practicas con regularidad?',
    hobby: 'Entiendo, siempre te recomendaré que tengas una actividad para distraerte y dejar de pensar en aquello que te aqueja, recuerda siempre practicar tu pasatiempo con regularidad!',
}

const laborales = {
    inicio: 'Oh ya veo, lo primero que debemos de hacer es identificar el origen de tu problema exactamente, ya sea una falta de organización en tus labores, falta de concentración y hasta los sentimientos que te provoca tus actuales labores, primero coméntame ¿Realizas algún deporte o actividad física?',
    deporteSi: 'Genial! El practicar un deporte con frecuencia ayudara a mantener una mejor salud mental y física y te ayudará afrontar de mejor manera problemas de ansiedad.\n\nQuisiera saber un poco más de cómo organizas tu tiempo, ¿utilizas alguna agenda o método de organización?',
    deporteNo: 'Puedes intentar practicar deportes de actividad física como son el fútbol, basquet, natación, baile, entre otros. Esto te ayudará a tu estado mental y físico.\n\nQuisiera saber un poco más de cómo organizas tu tiempo, ¿utilizas alguna agenda o método de organización?',
    organizacionSi: 'Me agrada mucho que organices tu tiempo a tu manera, aún así recuerda:\n\n▫ Establece prioridad\n▫ Se puntual con tus propias met\n▫ Saber decir que *no*\n▫ Hablar con alguien cercano siempre ayuda!\n\nCuéntame, ¿haz hablado sobre tus problemas con gente allegada a ti?',
    organizacionNo: 'No hay problema, sin embargo, mantener un itinerario puede ser beneficioso. Aún así, recuerda:\n\n▫ Establece prioridad\n▫ Se puntual con tus propias met\n▫ Saber decir que *no*\n▫ Hablar con alguien cercano siempre ayuda!\n\nCuéntame, ¿haz hablado sobre tus problemas con gente allegada a ti?',
    hablarSi: 'Perfecto! Que tengas alguien con quien hablar y contarle tus problemas es algo muy útil. Además, podrías intentar comunicar situaciones de crisis a tu empleador, esto para poder afrontarlas con apoyo y tiempo en tu trabajo.',
    hablarNo: 'Oh ya veo, debe ser difícil. Aún así, considera contarle tu situación a alguien de confianza ya que puede ayudarte a que situaciones ansiosas puedan ser más llevaderas y tomen menos tiempo del que crees.',
}

const social = {
    inicio: 'Entiendo, por favor, intenta lo siguiente para poder mantener llevar esta situación:\n\n▫ Respira profundamente por la nariz\n▫ Mantén el aire dentro de tu diafragma la mayor cantidad de tiempo que puedas.\n▫ Exhala lentamente por la bocaRealizalo cuantas veces lo necesites.\n\nDime, ¿fue de ayuda?',
    funcionoSi: 'Genial! Me alegro que ya te encuentres mejor, si la sensación regresa puedes comentarme sin ningún problema!',
    funcionoNo: 'Entiendo quizas una técnica de respiración no fue suficiente. Pueden intentar lo siguiente:\n\n▫ Busca 5 objetos con la mirada y piensa sus nombres.\n▫ Toca 4 objetos aleatorios en la habitación.\n▫ Centrate en los 3 sonidos que más llamen tu atención.\n▫ Manten la respiración 2 veces .\n▫ Di en voz alta 1 cosa que te haga feliz.\n\nPuedes repetirlos cada vez que sea necesario y recuerda que estoy aqui para ayudarte!',
}

let opSiNo = [
    "Si",
    "No",
]

let opSocial = [
    "Me ayudó",
    "Sigo igual",
]


module.exports = {
    soledad,
    laborales,
    estudiantil,
    social,

    opSiNo,
    opSocial
}



