const Employee = require("./Employee")

class Manager extends Employee {
    constructor(office) {
        super();
        this.office = office;
        this.role = "manager";
    }
}

module.exports = Manager; 