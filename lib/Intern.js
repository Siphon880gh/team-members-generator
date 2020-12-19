const Employee = require("./Employee");

class Intern extends Employee {
    constructor() {
        super();
        this.setRole("Intern");
    }
}

module.exports = Intern;