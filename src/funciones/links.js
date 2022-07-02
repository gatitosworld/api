function links(texto) {
    let regexp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi; 

    if(regexp.test(texto)) return true; 
    else return false; 

}

module.exports = links;
/**
 * @description Comprueba si un texto contiene un enlace/link mediante expresiones regulares.
 * @param {String} texto Texto a evaluar.
 */