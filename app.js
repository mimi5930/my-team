// require('dotenv').config();
const cTable = require('console.table');
const db = require('./db/connection');
const initialQuestions = require('./prompts/prompts');

// function connectToDb() {
//     db.connect(err => {
//         if (err) {
//             console.log(err);
//             return false;
//         };
//         console.log('Employee Database connected!')
//     })
// }

welcomeMessage = () => {
console.log(`
========================
  Welcome to My Team!
An interactive employee
       database
========================
`)
}

welcomeMessage();
initialQuestions(answer => {
    return console.log(answer);
});