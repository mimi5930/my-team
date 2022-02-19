const mysql = require('mysql2');
const pw = require('../pw.json');

const db = mysql.createConnection({
    host: 'localhost',
    user: pw.SQL_U,
    password: pw.SQL_PW,
    database: pw.DB
})

module.exports = db;