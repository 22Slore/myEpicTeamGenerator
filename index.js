//defined variables and constants
var inquirer = require('inquirer');
var fs = require("fs");
const path = require("path");
const generate = require('./Utils/generateHTML.js');
var outputDirectory = path.resolve(__dirname, 'output')
var outputPath = path.join(outputDirectory, 'team.html')
// const Employee = require('./library/Employee.js');
const Manager = require('./library/Manager.js');
const Intern = require('./library/Intern.js');
const Engineer = require('./library/Engineer.js');

//array for team
const teamArray = [];



function createTeam() {
    inquirer.prompt([
        {
            type: "list",
            message: "Which type of employee would you like to add?",
            name: "employeeOption",
            choices: ["Engineer", "Intern", "done"]

        }
    ]).then(answers => {
        if (answers.employeeOption === "Engineer") {
            //call makeEngineer
            makeEngineer();
        } else if (answers.employeeOption === "Intern") {
            //call addIntern
            makeIntern();
        } else {
            // call function to build team
            // buildTeam();
            createHTML()
            console.log("build team");
        }
    })
}



//employee function??


//Functions to create the 3 roles
//manager array
function makeManager() {
    inquirer.prompt([
        {
            message: "What is the Manager's name?",
            name: "managerName",
            type: "input"
        },
        {
            message: "What is the Manager's ID number?",
            name: "managerID",
            type: "input"
        },
        {
            message: "What is the Manager's email?",
            name: "managerEmail",
            type: "input"
        },
        {
            message: "What is the Manager's office number?",
            name: "managerOfficeNumber",
            type: "input"
        },

    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
        teamArray.push(manager);
        createTeam();
    });
}

//engineer array
function makeEngineer() {
    inquirer.prompt([
        {
            message: "What is the Engineer's name?",
            name: "engineerName",
            type: "input"
        },
        {
            message: "What is the Engineer's ID number?",
            name: "engineerID",
            type: "input"
        },
        {
            message: "What is the Engineer's email?",
            name: "engineerEmail",
            type: "input"
        },
        {
            message: "What is the Engineer's GitHub profile name?",
            name: "engineerGitHub",
            type: "input"
        },
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        createTeam();
    });
}
//intern array
function makeIntern() {
    inquirer.prompt([
        {
            message: "What is the Intern's name?",
            name: "internName",
            type: "input"
        },
        {
            message: "What is the Intern's ID number?",
            name: "internID",
            type: "input"
        },
        {
            message: "What is the Intern's email?",
            name: "internEmail",
            type: "input"
        },
        {
            message: "What is the Intern's School/University?",
            name: "internSchool",
            type: "input"
        },

    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internUniversity);
        teamArray.push(intern);
        createTeam();
    });
}

//function to write to html
function createHTML() {
    if (!fs.existsSync(outputDirectory)) {
        fs.mkdirSync(outputDirectory)
    }
    fs.writeFileSync(outputPath, generate(teamArray), "utf-8")
}



makeManager();
