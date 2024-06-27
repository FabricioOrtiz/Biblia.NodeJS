
const {
    leerInput,
    inquirerMenu, pausa} = require('./helpers/inquirer');
const Busquedas = require('./models/busquedas');

//const Busquedas = require('./models/busquedas');

const main = async() => {
    const busquedas = new Busquedas();
    let option;

    do {
        //consultar sobre opcion de menu
        option = await inquirerMenu();    

        switch (option) {
            case 1:
                
                break;
        
            default:
                break;
        }
        if(option !== 0) await pausa();

    } while (option != 0);
}

main();