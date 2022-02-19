const db = require('../db/connection');

class Role {
    constructor(title, salary, departmentId) {
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }

    addtoDb() {
        return new Promise ((resolve, reject) => {
            let query = `INSERT INTO role (title, salary, department_id) VALUES ('${this.title}', '${this.salary}', '${this.departmentId}');`
            db.query(query, (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })
        .then(results => {
            if (results) {
                console.log(`\nAdded ${this.title} to your roles!\n`);
                return true;
            }
        })
    }
}

module.exports = Role;