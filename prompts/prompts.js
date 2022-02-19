const inquirer = require('inquirer');
const promptHandler = require('./promptHandler');

const initialQuestions = () => {
    inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
        }
    ])
    .then(answer => {
        promptHandler(answer);
    })
}

module.exports = initialQuestions;