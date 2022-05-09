const Employee = require("./Employee")

class Manager extends Employee {
    constructor(office) {
        super();
        this.office = office;
        this.role = "Manager";
        this.icon = "coffee"
    }

    Office(office) {
        this.office = office;
    }
}

module.exports = Manager; 