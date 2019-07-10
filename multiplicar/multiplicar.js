const fs = require('fs');

let listarTabla = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject('La base no es un número');
      return;
    }
    else if (!Number(limite)) {
      reject('El límite no es un número');
      return;
    }
    let contenido = '';
    for (let i = 1; i <= limite; i++) {
      contenido += `${base} * ${i} = ${base * i}\n`;
    }
    resolve(contenido);
  });
}

let crearArchivo = (base, limite) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      reject('La base no es un número');
      return;
    }
    else if (!Number(limite)) {
      reject('El límite no es un número');
      return;
    }
    let contenido = '';
    for (let i = 1; i <= limite; i++) {
      contenido += `${base} * ${i} = ${base * i}\n`;
    }
    fs.writeFile(`tablas/tabla-${base}.txt`, contenido, (err) => {
      if (err) {
        reject(err);
      }
      else {
        resolve(`tabla-${base}.txt`);
      }
    });
  });
};

module.exports = {
  crearArchivo,
  listarTabla
}
