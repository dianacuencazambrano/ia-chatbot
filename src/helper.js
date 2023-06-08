
function getActualDateOrFormatted(date){
    var d = (date != '') ? new Date(date) : new Date();
    var curr_date = d.getDate();
    var curr_month = d.getMonth() + 1;
    var curr_year = d.getFullYear();
    let dateFormatted = curr_date + '-' + curr_month + '-' + curr_year;
    return dateFormatted;
}

function getNameOnly(name){
    //console.log(name)
    let nameAux = '';
    let contactName = '';
    if(name.indexOf(" ") === -1){
        contactName = name
    }else{
        nameAux = name.split(' ');
        //console.log(nameAux)
        contactName = nameAux[0];
    }
    return contactName;
}

function validateSession(clientDate){
    let validation = '';
    let today = '';
    //console.log('--------------------------');
    clientDate = getActualDateOrFormatted(clientDate);
    //console.log({clientDate})
    today = getActualDateOrFormatted('');
    //console.log({today})

    validation = (clientDate != today) ? 0 : 1;
    //console.log({ validation });
    //console.log('--------------------------');
    return validation;
}

module.exports = {
    getActualDateOrFormatted,
    getNameOnly,
    validateSession
};