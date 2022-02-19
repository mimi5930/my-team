const db = require('../db/connection');

class Employee {
    constructor(firstName, lastName, roleId, managerId) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.roleId = roleId;
        this.managerId = managerId;
    }

    addtoDb() {
        db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${this.firstName}', '${this.lastName}', '${this.roleId}', '${this.managerId}');`,
        (err, results) => {
        if (err) {
            console.log(err)
            return;
        }
        console.log(`Added ${this.name} to your employees`)
        } )
    }
}

module.exports = Employee;