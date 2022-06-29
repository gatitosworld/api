
export function links(texto) {
    let regexp = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi; 

    if(regexp.test(texto)) return true; // Si el regexp se prueba y es positivo, devolverá un booleano verdadero al output de la función.
    else return false; // Devuelve booleano negativo.

}


/**
 * @description Comprueba si un texto contiene un enlace/link mediante regex.
 * @param {String} texto Texto.
 */