const initialQuestions = require("../prompts/prompts")

const loop = (boolean) => {
    if (boolean) {
        initialQuestions();
    }
    else {
        process.exit();
    }
}

module.exports = loop;