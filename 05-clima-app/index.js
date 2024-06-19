
const {
    leerInput,
    inquirerMenu} = require('./helpers/inquirer')

const main = async() => {
    //Saludar al usuario
    console.log("Garming Weather API");

    do {
        //consultar sobre opcion de menu
        let option = await inquirerMenu();    

        switch (option) {
            case 1:
                
                break;
        
            default:
                break;
        }
        if(option !== 0)
            await pausa();

    } while (option != 0);
}

main();