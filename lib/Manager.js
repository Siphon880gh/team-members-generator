const Employee = require("./Employee");

class Manager extends Employee {
    constructor() {
            super();

            // The role text for the HTML
            this.setRole("Manager");
        } // constructor
}

module.exports = Manager;