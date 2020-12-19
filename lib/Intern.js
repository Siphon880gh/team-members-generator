const Employee = require("./Employee");

class Intern extends Employee {
    constructor() {
            super();

            // The role text for the HTML
            this.setRole("Intern");

            // Override final question to the Employee role
            const length = this.questions.length;
            this.questions[length - 1] = {
                name: "info",
                message: "Enter the school or university:",
                type: "input"
            }
        } // constructor
}

module.exports = Intern;