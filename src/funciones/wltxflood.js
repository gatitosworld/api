function wltxflood(string) {
    let regex = /^(.*?)( ?\1)+$/g;
    if(string.match(regex)) return true;
    else return false; 
}

module.exports = wltxflood;

/**
 * @description Detecta flood en un único mensaje que puede derivar en "walltext"
 * @param {string} string El texto a evaluar.
 */