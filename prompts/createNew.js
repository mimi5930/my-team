const inquirer = require("inquirer");
const db = require('../db/connection');
const Department = require('../lib/Department');
const Employee = require('../lib/Employee');
const Role = require('../lib/Role');
const { findDepartments, findAllRoles, findManagers } = require("../utils/queryConstructor");


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
        return newDep.addtoDb();
    });
}

const promptNewRole = async () => {
    const departments = await findDepartments();
    let depArr = []
    for (i = 0; i < departments.length; i++) {
        let depName = departments[i].name;
        depArr.push(depName)
    };

    const prompt = await inquirer.prompt([
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
            type: 'list',
            message: 'What department does the role belong to?',
            choices: depArr
        }
    ])

    let searchArr = departments.filter(obj => {
        return obj.name === prompt.department
    })
    let searchObj = searchArr.pop()
    let { title, salary } = prompt;

    let newRole = new Role(title, salary, searchObj.id);
    return newRole.addtoDb();
}

const promptNewEmployee = async () => {
    const roles = await findAllRoles();
    let roleArr = []
    for (i = 0; i < roles.length; i++) {
        let roleName = roles[i].title;
        roleArr.push(roleName);
    }
    
    let hasManagers = true;
    const managerList = await findManagers();
    let managerArr = [];
    for (i = 0; i < managerList.length; i++) {
        let managerName = `${managerList[i].first_name} ${managerList[i].last_name}`;
        managerArr.push(managerName);
    }
    if (managerArr.length === 0) {
        hasManagers = false;
    }

    const prompt = await inquirer.prompt([
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
            type: 'list',
            message: `What is the employee's role?`,
            choices: roleArr
        },
        {
            name: 'isManager',
            type: 'confirm',
            message: 'Is this employee a manager?',
            default: false
        }
    ])

    // handle role data
    let filteredRoleArr = roles.filter(obj => {
        return obj.title === prompt.role
    })
    let roleObj = filteredRoleArr.pop();
    

    
    // handle manager data
    if (!hasManagers && !prompt.isManager) {
        console.log('\nPlease add a manager first!\n')
        return true;
    }

    let managerNameChoice;
    if (!prompt.isManager) {
        const prompt = await inquirer.prompt([
            {
                name: 'manager',
                type: 'list',
                message: "Who is the employee's manager?",
                choices: managerArr
            }
        ])
        managerNameChoice = prompt;
    }    

    // create employee as a manager
    if (prompt.isManager) {
        let { firstName, lastName } = prompt;
        let newManager = new Employee(firstName, lastName, roleObj.id, null);
        return newManager.addtoDb();
    } else {
        // handle manager choice
        let filteredManagerArr = managerList.filter(obj => {
            let managerSplit = managerNameChoice.manager.split(' ');
            let managerFirst = managerSplit[0];
            return obj.first_name === managerFirst;
        })
        let managerObj = filteredManagerArr.pop();


        // create employee as a non-manager
        let { firstName, lastName, } = prompt;
        let newEmployee = new Employee(firstName, lastName, roleObj.id, managerObj.id);
        return newEmployee.addtoDb();
    }
}

module.exports = { promptNewDepartment, promptNewRole, promptNewEmployee }