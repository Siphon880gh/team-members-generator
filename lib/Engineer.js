const Employee = require("./Employee");

class Engineer extends Employee {
    constructor() {
            super();

            // The role text for the HTML
            this.setRole("Engineer");
        } // constructor
}

module.exports = Engineer;