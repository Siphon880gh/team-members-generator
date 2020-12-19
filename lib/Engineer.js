const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
            super();

            // The role text for the HTML
            this.setRole("Engineer");

            // Override final question to the Employee role
            const length = this.questions.length;
            this.questions[length - 1] = {
                name: "info",
                message: "Enter the Github username:",
                type: "input"
            }
        } // constructor
}

module.exports = Engineer;