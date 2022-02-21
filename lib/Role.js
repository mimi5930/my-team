const db = require('../db/connection');

class Role {
    constructor(title, salary, departmentId) {
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }

    async addtoDb() {
        const query = await new Promise ((resolve, reject) => {
            let query = `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?);`
            let params = [this.title, this.salary, this.departmentId];
            db.query(query, params, (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })

        if (query) {
            console.log(`\nAdded ${this.title} to your roles!\n`);
            return true;
        }
    }
}

module.exports = Role;