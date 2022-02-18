const initialPromptHandler = answer => {
    switch (answer.initialChoice) {
        case 'View all departments':
            console.log(1);
            break;
        case 'View all roles':
            console.log(2);
            break;
        case 'View all eployees':
            console.log(3);
            break;
        case 'Add a department':
            console.log(4);
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