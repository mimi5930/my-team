const db = require('../db/connection') ;

class Department {
    constructor(name) {
        this.name = name;
    }

    viewAll() {
        db.query('SELECT * FROM department', (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            console.log(results)
        })
    }
}

module.exports = Department;