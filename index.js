// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown.js');
const renderLicenseBadge = generateMarkdown.renderLicenseBadge;
const renderLicenseSection = generateMarkdown.renderLicenseSection;

const fs = require('fs');
// TODO: Create an array of questions for user input

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
        choices: ['MIT', 'Apache 2.0', 'GNU GPLv3', 'ISC', 'None'],
        name: 'license'
    }, {
        message: 'GitHub username',
        name: 'username'
    }, {
        message: 'Email Contact',
        name: 'email'
    }
])

    .then(({ title, describe, instruct, usage, contribute, test, license, username, email }) => {
        const licenseSection = renderLicenseSection(license);
        const licenseBadge = renderLicenseBadge(license);

        const content = `
# ${title}
${describe}
${licenseBadge}
        
## Tablt of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Test](#test)
- [Questions](#questions)

## Installation:
${instruct}

## Usage:
${usage}

## License:
${licenseSection}

## Contributing:
${contribute}

## Test:
${test}

## Questions:
For additional questions, you can reach me through my [GitHub profile](https://github.com/${username}) or via email at ${email}.
        `
        fs.writeFile('./README.md', content, (err) => {
            if (err) throw err;
        })

    })
    


    // // TODO: Create a function to initialize app
    // function init() { }

    // // Function call to initialize app
    // init();


