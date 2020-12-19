const Employee = require("./Employee");

class Manager extends Employee {
    constructor() {
        super();
        this.setRole("Manager");
    }
}

module.exports = Manager;