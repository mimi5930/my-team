const db = require('../db/connection');
const cTable = require('console.table');
const { promptNewDepartment, promptNewRole, promptNewEmployee } = require('./createNew');
const queryDb = require('../utils/queryConstructor');


const promptHandler = (answer) => {
    let choice = answer.choice;

    if (choice === 'View all departments') {
        let query = 'SELECT * FROM department';
        return queryDb(query, 'Departments');
    
    } else if (choice === 'View all roles') {
        let query = 'SELECT * FROM role';
        return queryDb(query, 'Roles');

    } else if (choice === 'View all employees') {
        let query = 'SELECT * FROM employee';
        return queryDb(query, 'Employees');

    } else if (choice === 'Add a department') {
        return promptNewDepartment();

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