var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'newschema'
});

connection.connect();

connection.query('SELECT * FROM topic', function (error, results, fields) {
    if (error) throw error;
    console.log(results);
});

connection.end();