function walltext(string) {

    var wltx = (string.match(/\n/g) || '').length;
    if(wltx > 8) return true;
    else return false;

}


module.exports = walltext;

/**
 * @description El módulo detecta si una cadena de texto tiene más de 8 lineas.
 * @param {String} string El texto a evaluar.
 * @param {RegExp} wltx La cantidad de líneas que hay en el mensaje.
 */