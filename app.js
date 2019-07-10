const colors = require('colors');
const {argv} = require('./config/yargs');
const {listarTabla, crearArchivo} = require('./multiplicar/multiplicar.js');

// Obtener el comando
let comando = argv._[0];

// Cuál comando utilizar
switch (comando) {
  case 'listar':
    listarTabla(argv.base, argv.limite)
      .then(contenido => console.log(contenido.green))
      .catch((err) => {
        console.log(err)
      });
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then(archivo => console.log(`Archivo creado: ${colors.green(archivo)}`))
      .catch((err) => {
        console.log(err);
      });
    break;
  default:
    console.log('Comando no reconocido');
}
