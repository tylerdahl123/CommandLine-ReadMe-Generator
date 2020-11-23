const inquirer = require('inquirer');
const fs =require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
inquirer
.prompt ([
    {
        type: 'input',
        message: 'What is the Title of your Project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Give a brief description of your project!',
        name: 'description',
    },
    {
        type: 'input',
        message: 'What do I need to install to use your project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'How or why would some one use your project?',
        name: 'usage',
    },
    { 
        type: 'input',
        message: 'Do you have any rules for future collaboraters or developers?',
        name: 'contr',
    },
    { 
        type: 'input',
        message: 'Did you run any tests for this app? If so what were they?',
        name: 'test',
    },
    {
        type: 'list',
        message: 'What liscense would you include in your Project?',
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
    },
    {
        type: 'input',
        message: 'What is the name of your github Account?',
        name: 'github',
    },
    {
        type: 'input',
        message: 'What is the name of your github repo?',
        name: 'repo',
    },
    { 
        typer: 'input',
        message: 'What is your Email Address',
        name: 'email',
    }
]).then((data) => {
    const { title, description, install, github, usage,license, test, contr, repo, email} = data;
    const markdown = `![Badge for Github License](https://img.shields.io/github/license/${github}/${repo})![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${github}/${repo}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${github}/${repo}?style=flat&logo=appveyor) \n
# ${title}
## Description
 ---
 \n ${description}
## Install 
---
\n ${install} 
## Contributing 
---
\n ${contr} 
## Usage 
---
\n ${usage} 
## Tests
---
\n ${test}
## License 
---
\n ${license} license(s) 
## Questions 
---
\n  if you have any questions feel free to reach out to me at [My Github](https://github.com/${github}) or feel free to email me at [My Email](${email}) 
    `

   
    //read me .md
fs.writeFile("README.md", (markdown), (err) => 
err ? console.log(err) : console.log('sucess!')
);
});


// function to write README file




// function to initialize program
function init() {

}

// function call to initialize program
init();
// const questions = [

// ];

// const util = require('util');

// const writeFileAsync = util.promisify(fs.writeFile);

