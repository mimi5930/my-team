const db = require('../db/connection') ;

class Department {
    constructor(name) {
        this.name = name;
    }
    
    addtoDb() {
        db.query(`INSERT INTO department (name) VALUES ('${this.name}');`,
        (err, results) => {
        if (err) {
            console.log(err)
        }
        console.log(`Added ${this.name} to your departments`);
        } )
    }
}

module.exports = Department;