const db = require('../db/connection');

const queryDb = (query, tableName) => {
    return new Promise((resolve, reject) => {
        db.query(query, (err, res) => {
            if (err) {
                return reject(err)
            }
            resolve(res)
        })
    })
    .then(res => {
        console.log(`\n${tableName.toUpperCase()}\n`)
        if (res.length === 0) {
            console.log(`No data to display in ${tableName}\n`)
        }
        else {
            console.table(res);
        }
        return true;
    })
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
const findEmployees = () => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM employee'
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results);
        })
    })
    .then(results => {
        let employeeArr = [];
        let employeeId = [];
        for (i = 0; i < results.length; i++) {
            let employee = `${results[i].first_name} ${results[i].last_name}`
            let id = results[i].id;
            employeeArr.push(employee);
            employeeId.push(id);
        }
        return { employeeArr, employeeId };
    })
}

// return an array of roles
const findRoles = () => {
    return new Promise((resolve, reject) => {
        let query = 'SELECT * FROM  role'
        db.query(query, (err, results) => {
            if (err) {
                return reject(err);
            }
            resolve(results)
        })
    })
    .then(results => {
        let rolesArr = [];
        let roleId = [];
        for (i = 0; i < results.length; i++) {
            let roleName = results[i].title;
            let id = results[i].id;
            rolesArr.push(roleName);
            roleId.push(id);
        }
        return { rolesArr, roleId };
    })
}

module.exports = { queryDb, findEmployees, findEmployee, findRoles };
