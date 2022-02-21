DROP DATABASE IF EXISTS myteam;
CREATE DATABASE myteam;

USE myteam;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(30)
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY (department_id) REFERENCES department(id) 
);

CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT
);

SELECT role.id, role.title, department.name AS department, role.salary
FROM role
JOIN department
ON role.department_id = department.id
ORDER BY role.id;

SELECT employee.id, employee.first_name, employee.last_name, role.title AS title, department.name AS department, role.salary AS salary, employee.manager_id
FROM employee
LEFT JOIN role
ON employee.role_id = role.id 
LEFT JOIN department
ON department_id = department.id
RIGHT JOIN employee
ON employee.manager_id = employee.id
