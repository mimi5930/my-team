const inquirer = require("inquirer");
const db = require('../db/connection');
const Department = require('../lib/Department');
const Employee = require('../lib/Employee');
const Role = require('../lib/Role');

const promptNewDepartment = () => {
    return inquirer.prompt([
        {
            name: 'depName',
            message: 'What is the department name?'
        }
    ])
    .then(answers => {
        let { depName } = answers;
        let newDep = new Department(depName);
        newDep.addtoDb();
    });
}

const promptNewRole = () => {
    return inquirer.prompt([
        {
            name: 'title',
            message: 'What is name of the role?'
        },
        {
            name: 'salary',
            message: 'What is the salary of the role?'
        },
        {
            name: 'department',
            message: 'What department does the role belong to?'
        }
    ])
    .then(answers => {
        let { title, salary, department } = answers;
        let newRole = new Role(title, salary, department);
        newRole.addtoDb();
    });
}

const promptNewEmployee = () => {
    return inquirer.prompt([
        {
            name: 'firstName',
            message: `What is the employee's first name?`
        },
        {
            name: 'lastName',
            message: `What is the employee's last name?`
        },
        {
            name: 'role',
            message: `What is the employee's role?`
        },
        {
            name: 'manager',
            // NEEDS to be a list! (input needs to be an integer)
            message: `Who is the employee's manager`
        }
    ])
    .then(answers => {
        let { firstName, lastName, role, manager } = answers;
        let newEmployee = new Employee(firstName, lastName, role, manager);
        newEmployee.addtoDb();
    });
}

module.exports = { promptNewDepartment, promptNewRole, promptNewEmployee }