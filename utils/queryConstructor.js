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
        console.log(`\n${tableName.toUpperCase()}\n`)
        if (res.length === 0) {
            console.log(`No data to display in ${tableName}\n`)
        }
        else {
            console.table(res);
        }
        return true;
    })
}

module.exports = queryDb;
