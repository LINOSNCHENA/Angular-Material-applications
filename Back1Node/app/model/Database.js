'user strict';
var mysql = require('mysql2');

var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : 'Monze@2019',
    database : 'presly'
});
module.exports = connection;
