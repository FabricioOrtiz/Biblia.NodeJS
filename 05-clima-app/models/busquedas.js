const axios = require("axios").default;

class Busquedas {
    historial = ['Cartago', 'San Jose'];

    constructor(){
        //TODO: leer DB
    }

    get params(){
        return{
            
        }
    }

    async ciudad (lugar = ''){
        //peticion http
        //const resp = await axios.get('https://reqres.in/api/users?delay=3');
        
        const instace = axios.create({
            baseURL: 'https://reqres.in/api/users',
            params: {
                'delay':'3'
            }
        });

        const resp = await instace.get();
        console.log(resp.data.data);
        return resp.map(lugar =>({
            first_name: lugar.first_name,
            last_name: last_name
        }));
    
    }
}
module.exports = Busquedas; 