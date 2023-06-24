// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
        {
            message: 'Project Title.',
            name: 'title'
        }, {
            message: 'Project Description.',
            name: 'descript'
        }, {
            message: 'Installation Instructions.',
            name: 'instruct'
        }, {
            message: 'Usage Information',
            name: 'usage'
        }, {
            message: 'Contribution Guidelines',
            name: 'contribute'
        }, {
            message: 'Test Instructions',
            name: 'instruct'
        }, {
            type: 'checkbox',
            message: 'Choose a License',
            name: 'license'
        }, {
            message: 'GitHub username',
            name: 'username'
        }, {
            message: 'Email Contact',
            name: 'email'
        }
    ])
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();
