const db = require('../db/connection') ;

class Department {
    constructor(name) {
        this.name = name;
        
    }

    viewAll() {
        db.query(
            'SELECT * FROM department'
        )
    }
}