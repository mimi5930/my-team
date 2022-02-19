const db = require('../db/connection');

class Employee {
    constructor(firstName, lastName, roleId, managerId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }

    addtoDb() {
        return new Promise ((resolve, reject) => {
            let query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${this.firstName}', '${this.lastName}', '${this.roleId}', '${this.managerId}');`
            db.query(query, (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })
        .then(results => {
            if (results) {
                console.log(`\nAdded ${this.firstName} ${this.lastName} to your employees\n`);
                return true;
            }
        })
    }
}

module.exports = Employee;