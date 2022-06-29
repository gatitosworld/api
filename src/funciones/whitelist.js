function whitelist(whl, texto){

        if(texto.indexOf(whl)) return true; 
        else return false; 

}

module.exports = whitelist;
/**
 * @description Comprueba si el texto introducido se encuentra en la whitelist.
 * @param {String} texto El texto a comprobar. 
 * @param {Array} whl La base de datos que contiene todos los enlaces permitidos.
 */