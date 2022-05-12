const mysql = require('mysql');
const config = require('./config.json');

const connection = mysql.createConnection({
    host:config.mysql.host,
    user:config.mysql.user,
    password:config.mysql.password,
    database:config.mysql.database
});

module.exports = connection;