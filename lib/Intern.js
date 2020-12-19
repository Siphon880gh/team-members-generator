const Employee = require("./Employee");

class Intern extends Employee {
    constructor() {
            super();

            // The role text for the HTML
            this.setRole("Intern");
        } // constructor
}

module.exports = Intern;