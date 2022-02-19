const db = require('../db/connection');
const cTable = require('console.table');
const { promptNewDepartment, promptNewRole, promptNewEmployee } = require('./createNew');

const promptHandler = answer => {
    switch (answer.choice) {
        case 'View all departments':
            db.query('SELECT * FROM department', (err, res) => {
                if (err) throw err;
                console.log('\nDEPARTMENTS\n')
                console.table(res)
            })
            break;

        case 'View all roles':
            db.query('SELECT * FROM role', (err, res) => {
                if (err) throw err;
                console.log('\nROLES\n')
                console.table(res)
            })
            break;

        case 'View all employees':
            db.query('SELECT * FROM employee', (err, res) => {
                if (err) throw err;
                console.log('\nEMPLOYEES\n')
                console.table(res)
            })
            break;

        case 'Add a department':
            promptNewDepartment();
            break;

        case 'Add a role':
            promptNewRole();
            break;

        case 'Add an employee':
            promptNewEmployee();
            break;

        case 'Update an employee':
            console.log(7);
            break;

        case 'Update an employee role':
            console.log(8);
            break;

        default:
            console.log('Goodbye!')
            break;
    }
}



module.exports = promptHandler;