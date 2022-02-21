const db = require('../db/connection') ;

class Department {
    constructor(name) {
        this.name = name;
    }
    
    async addtoDb() {
        const query = await new Promise((resolve, reject) => {
            let query = `INSERT INTO department (name) VALUES (?);`
            let param = [this.name];
            db.query(query, param, (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })
        
        if (query) {
            console.log(`\nAdded ${this.name} to your departments\n`);
            return true;
        }
    }
}

module.exports = Department;