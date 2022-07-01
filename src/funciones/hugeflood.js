function hugeflood(string) {
    string = string.replace(/\s+/g,"_");
    return /(\S)(\1{5,})/g.test(string);
}

module.exports = hugeflood;

/**
 * @description Detecta flood en un único mensaje que puede derivar en "walltext"
 * @param {string} string El texto a evaluar.
 */