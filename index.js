// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitUser'
    },
    {
        type: 'input',
        message: 'What is the name of this projects title? ',
        name: 'title'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },

    {
        type: 'input',
        message: 'Please provide a description of your project (1-2 lines)',
        name: 'description'
    },
    {
        type: 'input',
        message: 'Please provide detailed installation instructions',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'Please provide detailed usage instructions',
        name: 'usage'
    },
    {
        type: 'input',
        message: "Please provide guidelines for how others can contribute",
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'Please provide information around testing of your application',
        name: 'tests'
    },
    {
        type: 'list',
        message: 'What license have you chosen for your project?',
        name: 'license',
        choices: [
            'MIT',
            'Apache',
            'GNU',
            'BSD',
            'Mozilla',
            'N/A'
        ]
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, err => err
        ? console.log('error')
        : console.log('done'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            console.log(response);
            writeToFile('README.md', generateMarkdown(response));
        })
        .catch((error) => {
            console.log(error);
        });
}

// Function call to initialize app
init();
