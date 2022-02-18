const mysql = require('mysql2');

require('dotenv').config();

const db = mysql.createConnection({
    host: 'localhost',
    user: process.env.SQL_U,
    password: process.env.SQL_PW,
    database: 'myteam'
});

module.exports = db;