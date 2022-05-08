const { thisExpression } = require("@babel/types");
const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, employee, email) {
        super(name, employee, email);
        this.school = ""
        this.role = "Intern";
        this.icon = "menu_book"
    }
    GitHub(school) {
        this.school = school;
    }
}

module.exports = Intern; 