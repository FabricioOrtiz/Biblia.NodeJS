const { Axios } = require("axios");

class Busquedas {
    historial = ['Cartago', 'San Jose'];

    constructor(){
        //TODO: leer DB
    }

    async ciudad (lugar = ''){
        //peticion http
        const resp = await Axios.get('https://reqres.in/api/users?delay=3')
        console.log('ciudad',lugar);

        return []; //retornar los lugares
    }
}
module.exports = Busquedas; 