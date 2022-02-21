const inquirer = require('inquirer');
const promptHandler = require('./promptHandler');

const initialQuestions = async () => {
    const prompt = await inquirer.prompt([
        {
            name: 'choice',
            type: 'list',
            message: 'What would you like to do?',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Exit']
        }
    ])

    const handleResponse = await promptHandler(prompt);

    if (handleResponse) {
        initialQuestions();
    } else {
        console.log('Goodbye!')
        process.exit();
    }
}

module.exports = initialQuestions;