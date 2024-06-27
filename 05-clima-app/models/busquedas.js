const axios = require("axios").default;

class Busquedas {
    historial = ['Cartago', 'San Jose'];

    constructor(){
        //TODO: leer DB
    }

    async ciudad (lugar = ''){
        //peticion http
        const resp = await axios.get('https://reqres.in/api/users?delay=3')
        console.log('ciudad',lugar);

        return []; //retornar los lugares
    }
}
module.exports = Busquedas; 