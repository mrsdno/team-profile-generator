const Employee = require("./Employee")

class Engineer extends Employee {
    constructor(name, id, email) {
        super(name, id, email);
        this.github = "";
        this.role = "Engineer";
        this.icon = "computer"
    }
    GitHub(github) {
        this.github = github;
    }
}

module.exports = Engineer; 