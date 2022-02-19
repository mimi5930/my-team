const inquirer = require('inquirer');
const promptHandler = require('./promptHandler');

const initialQuestions = () => {
    return inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
        }
    ])
    .then((answer) => {
        return promptHandler(answer)
    })
    .then((newQuestions) => {
        if (newQuestions) {
            initialQuestions();
        }
        else {
            console.log('Goodbye!')
        }
    })
}

module.exports = initialQuestions;