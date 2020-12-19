const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
        super();
        this.setRole("Engineer");
    }
}

module.exports = Engineer;