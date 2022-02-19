const db = require('../db/connection');
const cTable = require('console.table');
const { promptNewDepartment, promptNewRole, promptNewEmployee } = require('./createNew');
const queryDb = require('../utils/queryConstructor');


const promptHandler = (answer) => {
    let choice = answer.choice;
    if (choice === 'View all departments') {
        let query = 'SELECT * FROM department'
        return queryDb(query, 'DEPARTMENT');
    
    } else if (choice === 'View all roles') {
        db.query('SELECT * FROM role', (err, res) => {
            console.log('\nROLES\n')
            console.table(res)
        })
        return true;

    } else if (choice === 'View all employees') {
        db.query('SELECT * FROM employee', (err, res) => {
            console.log('\nEMPLOYEES\n')
            console.table(res)
        })
        return true;

    } else if (choice === 'Add a department') {
        promptNewDepartment();
        return true;

    } else if (choice === 'Add a role') {
        promptNewRole();
        return true;

    } else if (choice === 'Add an employee') {
        promptNewEmployee();
        return true;

    } else if (choice === 'Update an employee') {
        // TODO: add an update function
        return true;

    } else if (choice === 'Update an employee role') {
        // TODO: add an update function
        return true;

    } else {
        return false;
    }
}



module.exports = promptHandler;