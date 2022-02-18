const inquirer = require('inquirer');

const initialQuestions = () => {
    return inquirer.prompt([
    {
        name: 'initialChoice',
        type: 'list',
        message: 'What would you like to do?',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }
    ])
}

module.exports = initialQuestions;