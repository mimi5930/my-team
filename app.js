const initialQuestions = require('./prompts/prompts');

const welcomeMessage = () => {
return console.log(`
========================
  Welcome to My Team!
An interactive employee
       database
========================
`)
}

welcomeMessage();
initialQuestions(results => {
  console.log(results)
});