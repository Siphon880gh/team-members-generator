const Employee = require("./Employee");

class Manager extends Employee {
    constructor() {
            super();

            // The role text for the HTML
            this.setRole("Manager");

            // Override final question to the Employee role
            const length = this.questions.length;
            this.questions[length - 1] = {
                name: "info",
                message: "Enter the manager's office number:",
                type: "input"
            }
        } // constructor
}

module.exports = Manager;