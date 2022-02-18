const db = require('../db/connection') ;

class Department {
    constructor(name) {
        this.name = name;
    }
    
    addtoDb() {
        db.query(`
        INSERT INTO department (name)
        VALUES (${this.name})`,
        (err, results) => {
        if (err) {
            console.log('Employee could not be added!')
            return;
        }
        return results;
        } )
    }
}

module.exports = Department;