const inquirer = require('inquirer');
const { findEmployees, findRoles } = require('../utils/queryConstructor');
const Employee = require('../lib/Employee');
const Role = require('../lib/Role');

// holds employee info (used to escape promise hell)
var employeeInfo = {};
var roleInfo = {};

const updateEmployee = async () => {

    const employeeObj = await findEmployees();
    let { employeeArr } = employeeObj;
    employeeInfo = employeeObj;

    const employee = await inquirer.prompt([
        {
            name: 'employeeName',
            type: 'list',
            message: 'Which employee would you like to change?',
            choices: employeeArr
        }
    ]);

    // store chosen employee's id
    let employeeIndex = employeeInfo.employeeArr.indexOf(employee.employeeName);
    let employeeId = employeeInfo.employeeId[employeeIndex];
    employeeInfo = [{ employeeId: employeeId }];

    const rolesObj = await findRoles();
    let { rolesArr } = rolesObj;
    roleInfo = rolesObj;

    const role = await inquirer.prompt([
        {
            name: 'roleId',
            type: 'list',
            message: 'Which role would you like to assign your employee',
            choices: rolesArr
        }
    ]);
    let roleIndex = roleInfo.rolesArr.indexOf(role.roleId);
    let roleId = roleInfo.roleId[roleIndex];
    roleInfo = { roleId: roleId };
    
    // get employee and role info
    

}

module.exports = updateEmployee;