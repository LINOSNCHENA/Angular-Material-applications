'user strict';
var mysql = require('mysql');

var connection = mysql.createConnection
({
    host     : 'localhost',
    user     : 'root',
    password : 'Monze@2019',
    database : 'presly'
});
module.exports = connection;
