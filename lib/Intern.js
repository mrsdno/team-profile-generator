const { thisExpression } = require("@babel/types");
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, employee, email) {
        super(name, employee, email);
        this.school = ""
        this.role = "intern";
    }
    GitHub(school) {
        this.school = school;
    }
}

module.exports = Intern; 