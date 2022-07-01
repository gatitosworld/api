function walltext(string) {

    var prueba = (string.match(/\n/g) || '').length;
    if(prueba > 8) return true;
    else return false;

}

function wltx2(string) {
    string = string.replace(/\s+/g,"_");
    return /(\S)(\1{5,})/g.test(string);
}

module.exports = walltext, wltx2;

/**
 * @description El módulo detecta si una cadena de texto tiene más de 8 lineas.
 * @param {String} string El texto a evaluar.
 * @param {RegExp} regex El regex que detecta las líneas.
 */