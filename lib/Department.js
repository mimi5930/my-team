const db = require('../db/connection') ;

class Department {
    constructor(name) {
        this.name = name;
    }
    
    addtoDb() {
        return new Promise ((resolve, reject) => {
            let query = `INSERT INTO department (name) VALUES (?);`
            let param = [this.name];
            db.query(query, param, (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })
        .then(results => {
            if (results) {
                console.log(`\nAdded ${this.name} to your departments\n`);
                return true;
            }
        })
    }
}

module.exports = Department;