const Employee = require("./Employee")

class Engineer extends Employee {
    constructor() {
        super();
        this.github = "";
        this.role = "engineer";
    }
    GitHub(github) {
        this.github = github;
    }
}

module.exports = Engineer; 