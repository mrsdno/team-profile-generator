class Employee {
    constructor(name = "", id = "", email = "") {
        this.name = name;
        this.id = 123;
        this.email = email;
        this.role = "Employee";
    }

    Name(name) {
        this.name = name;
    }

    Id(id) {
        this.id = id;
    }

    Email(email) {
        this.email = email;
    }
}

module.exports = Employee; 