const inquirer = require("inquirer");

module.exports = class {
    constructor() {

        // Generic questions for all employee roles. Last question gets overriden by Employee role
        this.questions = [{
                name: "name",
                message: "What's the name?",
                type: "input",
                validate: input => Boolean(input.length)
            },
            {
                name: "employeeId",
                message: "Enter the employee ID",
                type: "input",
                validate: input => typeof input === "number" && input >= 0
            },
            {
                name: "email",
                message: "Enter employee's email address",
                type: "input",
                validate: input => Boolean(input.length)
            },
            {
                name: "info",
                message: "Error: Overriding failed",
                type: "input"
            },
        ];
    }
    setPersonName(personName) {
        this.personName = personName;
    }
    getRole() { return this.role; }
    setRole(role) {
        this.role = role;
    }
    setEmployeeId(employeeId) {
        this.employeeId = employeeId;
    }
    setEmail(email) {
        this.email = email;
    }

    // Get team member object to render the employee card in HTML
    getTeamMemberObject() {
        return {
            personName: this.personName,
            role: this.role,
            employeeId: this.employeeId,
            email: this.email,
            info: this.info,
        }
    }
}