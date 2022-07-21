//node modules
const inquirer = require('inquirer');
const fs = require('fs');
//Team member
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const generateHTML = require('./src/generateHTML')

const teamArray = [];

const addManager = () => {
    return inquirer.prompt ([
        {
            name: 'name',
            message: "Enter the manager's name"
        },
        {
            name: 'id',
            message: "Enter the manager's id number"
        },
        {
            name: 'email',
            message: "Enter the manager's email address"
        },
        {
            name: 'officeNumber',
            message: "Enter the manager's office number"
        }
    ]).then(managerData => {
        const {name, id, email, officeNumber} = managerData;
        const manager = new Manager (name, id, email, officeNumber);

        teamArray.push(manager);
        console.log(manager);
        console.log(teamArray);

    })
}

const addEmployee = () => {
    return inquirer.prompt ([
        {
            type: 'list',
            name: 'role',
            choices: ['Engineer', 'Intern']
        },
        {
            name: 'name',
            message: "Enter the employee's name"
        },
        {
            name: 'id',
            message: "Enter the employee's id number"
        },
        {
            name: 'email',
            message: "Enter the employee's email address"
        },
        {
            name: 'github',
            message: "Enter the employee's GitHub username",
            when: (input) => input.role === "Engineer"
        },
        {
            name: 'school',
            message: "Enter the employee's school name",
            when: (input) => input.role === "Intern"
        },
        {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: "Would you like to add more members to the team?",
            default: false
            
        }
    ]).then(employeeData => {
        let {name, id, email, role, github, school, confirmAddEmployee} = employeeData;
        let employee;

        if (role === "Engineer") {
            employee = new Engineer (name, id, email, github);
            console.log(employee);
        } else if (role === "Intern") {
            employee = new Intern (name, id, email, school);
            console.log(employee);
        }

        teamArray.push(employee);

        if (confirmAddEmployee) {
            console.log(teamArray)
            return addEmployee(teamArray);
        } else {
            console.log(teamArray)
            return teamArray
        }
    })
}

addManager()
  .then(addEmployee)