const inquirer = require('inquirer');
const Employee = require('./lib/Employee');

const application = function() {
    console.log('Welcome to the team profile generator!');

    inquirer
        .prompt({
            type: 'text',
            name: 'name',
            message: "What is the team manager's name?"
        })
        .then(({ name }) => {
            const employee = new Employee(name);
            console.log(employee);

            inquirer
                .prompt({
                    type: 'text',
                    name: 'id',
                    message: `What is ${employee.name}'s id?`
                })
                    .then(({ id }) => {
                        employee.id = id;
                        console.log(employee);

                        inquirer
                            .prompt({
                                type: 'text',
                                name: 'email',
                                message: `What is ${employee.name}'s email?`
                            })
                            .then(({ email }) => {
                                employee.email = email;
                                console.log(employee);
                            })
                })
        })
        .catch(err => {
            console.log(err);
        })
}



application();