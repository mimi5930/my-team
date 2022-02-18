const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'ChristianEggertsViolins85957!',
    database: 'myteam'
});

module.exports = db;