const inquirer = require('inquirer');
const fs =require('fs');

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
        message: 'How would one go about installing your Project?',
        name: 'install',
    },
    {
        type: 'input',
        message: 'Did you collaborate on this project? If so with who?',
        name: 'colab',
    },
    {
        type: 'input',
        message: 'How or why would some one use your project?',
        name: 'usage',
    },
    {
        type: 'list',
        message: 'What liscense would you include in your Project?',
        choices: ['Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license',
    },
    {
        typel: 'input',
        message: 'What is the name of your github Account?',
        name: 'github',
    },
]).then((data) => {
    const { title, description, install, github, colab, usage,license} = data;
    const markdown = `# Project Title \n ${title} #Description \n ${description} \n
 
 #Install \n ${install}\n 
 #Collaborations\n ${colab}\n 
#Usage \n${usage}\n 
 #license \n ${license}\n 
#GitHub Account \n ${github}\n 
    `

   
    //read me .md
fs.writeFile("Readme.md", (markdown), (err) => 
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

