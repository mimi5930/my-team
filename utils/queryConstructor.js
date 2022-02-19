const db = require('../db/connection');

const queryDb = (query, tableName) => {
    return new Promise((resolve, reject) => {
        db.query(query, (err, res) => {
            if (err) {
                return reject(err)
            }
            resolve(res)
        })
    })
    .then(res => {
        console.log(`\n${tableName}\n`)
        console.table(res);
        return true;
    })
}

module.exports = queryDb;
