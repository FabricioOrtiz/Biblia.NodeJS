
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

        switch (parseInt(option)) {
            case 1:
                
                const lugar = await leerInput('ciudad: ');

                const lugares =  await busquedas.ciudad(lugar);
                
                console.log('\nInformacion de la ciudad\n'.green);
                console.log('lugares: ' + lugares);
                
                break;
        
            default:
                break;
        }
        if(option !== 0) await pausa();

    } while (option != 0);
}

main();