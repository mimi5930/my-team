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
            let query = `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);`
            let params = [this.firstName, this.lastName, this.roleId, this.managerId]
            db.query(query, params, (err, results) => {
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

    updateRole(newRoleId, employeeId) {
        return new Promise ((resolve, reject) => {
            let query = `UPDATE employee SET role_id = ? WHERE id = ?;`
            let params = [newRoleId, employeeId]
            db.query(query, params, (err, results) => {
                if (err) {
                    reject(err)
                }
                resolve(results)
            })
        })
        .then(results => {
            if (!results.affectedRows) {
                console.log(`\n${this.name} already has that position!\n`)
                return true;
            }
            console.log(`\nupdated ${this.firstName} ${this.lastName}'s role!\n`)
            return true;
        })
    }
}

module.exports = Employee;