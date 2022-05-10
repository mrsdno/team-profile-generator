const inquirer = require('inquirer');
const { ConsoleWriter } = require('istanbul-lib-report');
const generatePage = require('./utils/page-tempate')
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const { writeFile } = require('fs');

const team = []

const startApplication = () => {
    console.log('Welcome to the team profile generator!');

    // start application by getting team manager information
    inquirer
        // get team manager name
        .prompt({
            type: 'text',
            name: 'name',
            message: "What is the team manager's name?"
        })
        .then(({ name }) => {
            // set up manager object to store data
            let manager = new Manager(name);
            manager.getName(name);

            inquirer
                // get manager id
                .prompt({
                    type: 'text',
                    name: 'id',
                    message: `What is ${manager.name}'s id?`
                })
                    .then(({ id }) => {
                        manager.getId(id);
                        
                        inquirer
                            // get manager email
                            .prompt({
                                type: 'text',
                                name: 'email',
                                message: `What is ${manager.name}'s email?`
                            })
                            .then(({ email }) => {
                                manager.getEmail(email);

                                inquirer
                                    // get manager office number
                                    .prompt({
                                        type: 'text',
                                        name: 'office',
                                        message: `What is ${manager.name}'s office number?`
                                    })
                                    .then(({ office }) => {
                                        manager.type
                                        manager.getOffice(office);
                                        
                                        // manager is complete pushed to team array
                                        console.log('Team Manager data is complete!')
                                        team.push(manager);
                                        nextEmployee();
                                    })
                            })
                })
        })
        .catch(err => {
            console.log(err);
        })
}

const nextEmployee = () => {
    inquirer
        // ask what type of employee info they want to add next
        .prompt({
            type: 'list',
            name: 'nextEmployee',
            message: 'Which type of employee details do you want to add next?',
            choices: ['Engineer', 'Intern', 'None']
        })
        // if none, end the application and generate html page
        .then(({ nextEmployee }) => {
            if (nextEmployee === 'None') {
                console.log("The team is complete! HTML file has been generated where you can view the team dashboard.")
                generatePage(team);

            } else {
                // begin next employee prompts again and pass in the type of employee chosen
                getEmployeeInfo(nextEmployee);
            }
        })
}
const getEmployeeInfo = (employeeType) => {
    console.log(`Getting name, id, and email for ${employeeType}`);

    inquirer
        // get employee name
        .prompt({
            type: 'text',
            name: 'name',
            message: "What is the employee's name?"
        })
        .then(({ name }) => {
            // set up employee object
            const employee = new Employee();
            employee.getName(name);

            inquirer
                // get employee id
                .prompt({
                    type: 'text',
                    name: 'id',
                    message: `What is ${employee.name}'s id?`
                })
                .then(({ id }) => {
                    employee.getId(id);
                        
                    inquirer
                        // get employee email
                        .prompt({
                            type: 'text',
                            name: 'email',
                            message: `What is ${employee.name}'s email?`
                        })
                        .then(({ email }) => {
                            employee.getEmail(email)
                            
                            if (employeeType === "Engineer") {
                                let engineer = new Engineer(employee.name, employee.id, employee.email);
                                inquirer
                                    .prompt({
                                        type: 'text',
                                        name: 'github',
                                        message: `What is ${engineer.name}'s GitHub username?`
                                    })
                                    .then(({ github }) => {
                                        engineer.getGitHub(github);
                                        
                                        team.push(engineer);
                                        nextEmployee();
                                     })
                            } else if (employeeType === "Intern") {
                                const intern = new Intern(employee.name, employee.id, employee.email);
                                inquirer
                                    .prompt({
                                        type: 'text',
                                        name: 'school',
                                        message: `What is the name of ${intern.name}'s school?`
                                    })
                                    .then(({ school }) => {
                                        intern.getSchool(school);
                                        team.push(intern);
                                        nextEmployee();
                                    })
                            } else {
                                console.log("You shouldn't get here.")
                            }
                        })
                })
        })
}

startApplication()