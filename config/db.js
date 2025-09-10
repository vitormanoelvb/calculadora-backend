const mysql = require('mysql');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // ajuste se houver senha
  database: 'calculadora'
});

db.connect((err) => {
  if (err) throw err;
  console.log('🗄️ Conectado ao MySQL!');
});

module.exports = db;
