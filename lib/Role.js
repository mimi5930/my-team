const db = require('../db/connection');

class Role {
    constructor(title, salary, departmentId) {
        this.title = title;
        this.salary = salary;
        this.departmentId = departmentId;
    }

    addtoDb() {
        db.query(`
        INSERT INTO role (title, salary, department_id)
        VALUES (${this.title}, ${this.salary}, ${this.departmentId})`,
        (err, results) => {
        if (err) {
            console.log('Employee could not be added!')
            return;
        }
        return results;
        })
    }
}

module.exports = Role;