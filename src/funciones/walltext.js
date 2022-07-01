function walltext(string) {

    let regex = /\n/g;
    if(string.match(regex || '').length > 8) return true;
    else return false;

}

module.exports = walltext;

/**
 * @description El módulo detecta si una cadena de texto tiene más de 8 lineas.
 * @param {String} string El texto a evaluar.
 * @param {RegExp} regex El regex que detecta las líneas.
 */