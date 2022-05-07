const inquirer = require('inquirer');
const { ConsoleWriter } = require('istanbul-lib-report');
const Manager = require('./lib/Manager');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
            // set up manager object
            const manager = new Manager(name);
            manager.name = name

            inquirer
                // get manager id
                .prompt({
                    type: 'text',
                    name: 'id',
                    message: `What is ${manager.name}'s id?`
                })
                    .then(({ id }) => {
                        manager.id = id;
                        
                        inquirer
                            // get manager email
                            .prompt({
                                type: 'text',
                                name: 'email',
                                message: `What is ${manager.name}'s email?`
                            })
                            .then(({ email }) => {
                                manager.email = email;

                                inquirer
                                    // get manager office number
                                    .prompt({
                                        type: 'text',
                                        name: 'office',
                                        message: `What is ${manager.name}'s office number?`
                                    })
                                    .then(({ office }) => {
                                        manager.type
                                        manager.office = office;
                                        
                                        // manger object is complete and stored in manager, pushed to team object
                                        console.log(manager);
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
        //ask what type of employee info they want to add next
        .prompt({
            type: 'list',
            name: 'nextEmployee',
            message: 'Which type of employee details do you want to add next?',
            choices: ['Engineer', 'Intern', 'None']
        })

        .then(({ nextEmployee }) => {
            if (nextEmployee === 'None') {
                console.log("You are done.")
            } else {
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
            employee.name = name;

            inquirer
                // get employee id
                .prompt({
                    type: 'text',
                    name: 'id',
                    message: `What is ${employee.name}'s id?`
                })
                .then(({ id }) => {
                    employee.id = id;
                        
                    inquirer
                        // get employee email
                        .prompt({
                            type: 'text',
                            name: 'email',
                            message: `What is ${employee.name}'s email?`
                        })
                        .then(({ email }) => {
                            employee.email = email;
                            
                            if (employeeType === "Engineer") {
                                const engineer = new Engineer();
                                engineer.name = employee.name;
                                engineer.id = employee.id;
                                engineer.email = employee.email;
                                inquirer
                                    .prompt({
                                        type: 'text',
                                        name: 'github',
                                        message: `What is ${engineer.name}'s GitHub username?`
                                    })
                                    .then(({ github }) => {
                                        engineer.GitHub(github);
                                        
                                        team.push(engineer);
                                        console.log(team);
                                        nextEmployee();
                                     })
                            } else if (employeeType === "Intern") {
                                const intern = new Intern();
                                intern.name = employee.name;
                                intern.id = employee.id;
                                intern.email = employee.email;
                                inquirer
                                    .prompt({
                                        type: 'text',
                                        name: 'school',
                                        message: `What is the name of ${intern.name}'s school?`
                                    })
                                    .then(({ school }) => {
                                        intern.school = school;
                                        team.push(intern);
                                        console.log(team);
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