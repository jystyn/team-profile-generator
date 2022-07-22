//node modules
const inquirer = require('inquirer');
const fs = require('fs');
//Team members
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML');
const { clear } = require('console');

const teamArray = [];

const addManager = () => {
    return inquirer.prompt([
        {
            name: 'name',
            message: "Enter the manager's name",
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log("\nPlease enter the manager's name\n");
                    return false;
                }
            }
        },
        {
            name: 'id',
            message: "Enter the manager's id number",
            validate: (id) => {
                if (isNaN(id)) {
                    console.log("\nPlease enter the manager's ID number\n");
                    return false;
                } else {

                    return true;
                }
            }
        },
        {
            name: 'email',
            message: "Enter the manager's email address",
            validate: (email) => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    return true;
                } else {
                    console.log("\nPlease enter the manager's email address\n");
                    return false;
                }
            }
        },
        {
            name: 'officeNumber',
            message: "Enter the manager's office number",
            validate: (officeNumber) => {
                if (isNaN(officeNumber)) {
                    console.log("\nPlease enter the manager's office number\n");
                    return false;
                } else {

                    return true;
                }
            }
        }
    ]).then(managerData => {
        const { name, id, email, officeNumber } = managerData;
        const manager = new Manager(name, id, email, officeNumber);

        teamArray.push(manager);
    })
}

const addEmployee = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            name: 'name',
            message: "Enter the employee's name",
            validate: (name) => {
                if (name) {
                    return true;
                } else {
                    console.log("\nPlease enter the employee's name\n");
                    return false;
                }
            }
        },
        {
            name: 'id',
            message: "Enter the employee's id number",
            validate: (id) => {
                if (isNaN(id)) {
                    console.log("\nPlease enter the employee's ID number\n");
                    return false;
                } else {

                    return true;
                }
            }
        },
        {
            name: 'email',
            message: "Enter the employee's email address",
            validate: (email) => {
                if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                    return true;
                } else {
                    console.log("\nPlease enter the employee's email address\n");
                    return false;
                }
            }
        },
        {
            name: 'github',
            message: "Enter the employee's GitHub username",
            when: (input) => input.role === "Engineer",
            validate: (github) => {
                if (github) {
                    return true;
                } else {
                    console.log("\nPlease enter the employee's Github username\n");
                    return false;
                }
            }
        },
        {
            name: 'school',
            message: "Enter the employee's school name",
            when: (input) => input.role === "Intern",
            validate: (school) => {
                if (school) {
                    return true;
                } else {
                    console.log("\nPlease enter the employee's school name\n");
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add more members to the team?",
            default: false
        }
    ]).then(employeeData => {
        let { name, id, email, role, github, school, confirmAddEmployee } = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer(name, id, email, github);
        } else if (role === "Intern") {
            employee = new Intern(name, id, email, school);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            return addEmployee(teamArray);
        } else {
            console.log(teamArray)
            return teamArray
        }
    })
}

const writePage = (html) => {
    fs.writeFile('./dist/index.html', html, err => {

        if (err) {
            console.log(err);
            return;
        } else {
            console.log('You have successfully created team page! Check out the html.index file in /dist');
        }
    })
}

addManager()
    .then(addEmployee)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(html => {
        return writePage(html);
    })
    .catch(err => {
        console.log(err);
    })