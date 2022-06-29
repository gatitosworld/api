function whitelist(string, array){
        for(let i = 0; i < array.length; i++) {
                if(string.indexOf(array[i]) > -1) return true;
        } return false; 
}

module.exports = whitelist;
/**
 * @description Comprueba si el texto introducido se encuentra en la whitelist.
 * @param {String} texto El texto a comprobar. 
 * @param {Array} whl La base de datos que contiene todos los enlaces permitidos.
 */