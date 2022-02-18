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
    ]);
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
            // make this a list
            message: `What is the employee's role?`
        },
        {
            name: 'manager',
            message: `Who is the employee's manager`
        }
    ]);
}

module.exports = { promptNewDepartment, promptNewRole, promptNewEmployee }