const db = require('../db/connection');
const cTable = require('console.table');

const queryDb = async (query, tableName) => {
    const queryResults = await new Promise((resolve, reject) => {
        db.query(query, (err, res) => {
            if (err) {
                return reject(err)
            }
            resolve(res)
        })
    })
    console.log(`\n${tableName.toUpperCase()}\n`)
    if (queryResults.length === 0) {
        console.log(`No data to display in ${tableName}\n`)
    } else {
        console.table(queryResults);
    }
    return true;
}

const findEmployee = async (id) => {
    const employee = await new Promise((resolve, reject) => {
        let query = 'SELECT * FROM employee WHERE id = ?'
        db.query(query, id, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
    return employee;
} 

// return an array of all employees
const findEmployees = async () => {
    const queryResults = await new Promise((resolve, reject) => {
        let query = 'SELECT * FROM employee'
        db.query(query, (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results);
        })
    })
    let employeeArr = [];
    let employeeId = [];
    for (i = 0; i < queryResults.length; i++) {
        let employee = `${queryResults[i].first_name} ${queryResults[i].last_name}`
        let id = queryResults[i].id;
        employeeArr.push(employee);
        employeeId.push(id);
    }
    return { employeeArr, employeeId };
}

// return an array of roles
const findRoles = async () => {
    const queryResults = await new Promise((resolve, reject) => {
        let query = 'SELECT * FROM  role'
        db.query(query, (err, results) => {
            if (err) {
                reject(err);
            }
            resolve(results)
        })
    })
    let rolesArr = [];
    let roleId = [];
    for (i = 0; i < queryResults.length; i++) {
        let roleName = queryResults[i].title;
        let id = queryResults[i].id;
        rolesArr.push(roleName);
        roleId.push(id);
    }
    return { rolesArr, roleId };
}

// find departments and returns names
const findDepartments = async () => {
    const departments = await new Promise ((resolve, reject) => {
        let query = 'SELECT * FROM department'
        db.query(query, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
    return departments;
}

const findAllRoles = async () => {
    const roles = await new Promise ((resolve, reject) => {
        let query = 'SELECT * FROM role';
        db.query(query, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
    return roles;
}

const findManagers = async () => {
    const managers = await new Promise ((resolve, reject) => {
        let query = 'SELECT * FROM employee WHERE manager_id IS NULL';
        db.query(query, (err, result) => {
            if (err) {
                reject(err)
            }
            resolve(result)
        })
    })
    return managers;
}

module.exports = { queryDb, findEmployees, findEmployee, findRoles, findDepartments, findAllRoles, findManagers };
