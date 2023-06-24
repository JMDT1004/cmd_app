// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
// const license = require($(license[license]));
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    inquirer.prompt([
        {
            message: 'Project Title.',
            name: 'title'
        }, {
            message: 'Project Description.',
            name: 'describe'
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
            name: 'test'
        }, {
            type: 'checkbox',
            message: 'Choose a License',
            choices:['MIT license, none'],
            name: 'license'
        }, {
            message: 'GitHub username',
            name: 'username'
        }, {
            message: 'Email Contact',
            name: 'email'
        }
    ])

    .then(({title,describe,instruct,usage,contribute,test,license,username,email}) =>{
        const content = `
        #Title: ${title}
        ##Tablt of Contents:[Description]
        ##Description:${describe}
        ##Installation:${instruct}
        ##Usage:${usage}
        ##License:${license}
        ##Contributing:${contribute}
        ##Tests:${test}
        ##Questions:${username.email}
        `
        // // TODO: Create a function to write README file
        // function writeToFile(fileName, data) { }
        fs.writeFile('./README.md', content, (err) =>{
            if (err) throw err;
        })
    })
];


// // TODO: Create a function to initialize app
// function init() { }

// // Function call to initialize app
// init();
