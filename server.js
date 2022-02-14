const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const dotenv = require('dotenv');
const cTable = require('console.table');

const PORT = 3001;

db.connect(err => {
    if (err) throw err;
    console.log('Database connected');
    append.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});