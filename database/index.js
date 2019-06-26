const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : null,
  database : 'camping'
});

connection.connect((err) => {
  if (err) { throw err };
  console.log('Connected to db!')
});

module.exports = { connection }