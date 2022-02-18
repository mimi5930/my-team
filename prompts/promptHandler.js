const db = require('../db/connection');
const table = require('../utils/createTable');


const initialPromptHandler = answer => {
    switch (answer.initialChoice) {
        case 'View all departments':
            db.query('SELECT * FROM department', (err, res) => {
                if (err) {
                    console.log(err);
                    return;
                }
                return res;
            })
            break;
        case 'View all roles':
            db.query('SELECT * FROM role', (err, res) => {
                if (err) {
                    console.log(err);
                    return;
                }
                return res;
            })
            break;
        case 'View all eployees':
            db.query('SELECT * FROM employee', (err, res) => {
                if (err) {
                    console.log(err);
                    return;
                }
                return res;
            })
        case 'Add a department':
            break;
        case 'Add a role':
            console.log(5);
            break;
        case 'Add an employee':
            console.log(6);
            break;
        case 'Update an employee':
            console.log(7);
            break;
        case 'Update an employee role':
            console.log(8);
            break;
        default:
            console.log('Err: answer does not match');
    }
}

module.exports = initialPromptHandler;