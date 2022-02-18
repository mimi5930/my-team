// const cTable = require('console.table');
const initialQuestions = require('./prompts/prompts');
const initialPromptHandler = require('./prompts/promptHandler');
// require('dotenv').config();

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
initialQuestions()
.then(answer => {
  return initialPromptHandler(answer);
});