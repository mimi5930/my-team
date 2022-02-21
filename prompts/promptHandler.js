const { promptNewDepartment, promptNewRole, promptNewEmployee } = require('./createNew');
const updateEmployee = require('./updateExisting');
const { queryDb } = require('../utils/queryConstructor');


const promptHandler = (answer) => {
    let choice = answer.choice;

    if (choice === 'View all departments') {
        let query = 'SELECT * FROM department';
        return queryDb(query, 'Departments');
    
    } else if (choice === 'View all roles') {
        let query = 'SELECT role.id, role.title, department.name AS department, role.salary FROM role JOIN department ON role.department_id = department.id';
        return queryDb(query, 'Roles');

    } else if (choice === 'View all employees') {
        let query = 'SELECT * FROM employee';
        return queryDb(query, 'Employees');

    } else if (choice === 'Add a department') {
        return promptNewDepartment();

    } else if (choice === 'Add a role') {
        return promptNewRole();

    } else if (choice === 'Add an employee') {
        return promptNewEmployee();

    } else if (choice === 'Update an employee role') {
        return updateEmployee();

    } else {
        return false;
    }
}



module.exports = promptHandler;