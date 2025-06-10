// models/ceramicaModel.js
const connection = require('../db'); // Importamos la conexión a la base de datos

// Obtener todas las cerámicas
const obtenerCeramicas = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM ceramicas';
    connection.query(query, (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

// Crear una nueva cerámica
const crearCeramica = (nombre, descripcion, precio, imagen, categoria) => {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO ceramicas (nombre, descripcion, precio, imagen, categoria) VALUES (?, ?, ?, ?, ?)';
    connection.query(query, [nombre, descripcion, precio, imagen, categoria], (err, results) => {
      if (err) reject(err);
      resolve(results);
    });
  });
};

module.exports = {
  obtenerCeramicas,
  crearCeramica
};
