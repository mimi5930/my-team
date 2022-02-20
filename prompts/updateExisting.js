const inquirer = require('inquirer');
const { findEmployees, findRoles, findEmployee } = require('../utils/queryConstructor');
const Employee = require('../lib/Employee');
const Role = require('../lib/Role');


const updateEmployee = async () => {
    // holds db info
    let employeeInfo;
    let roleInfo;

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
    console.log(employeeId);

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
    console.log("role id" +roleId)
    
    // get employee info
    const foundEmployee = await findEmployee(roleId);
    let {first_name, last_name, role_id, manager_id } = foundEmployee.pop();
    let newEmployee = new Employee(first_name, last_name, role_id, manager_id);
    console.log(newEmployee)
    return newEmployee.updateRole(roleId, employeeId);
}

module.exports = updateEmployee;