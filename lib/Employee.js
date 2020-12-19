const inquirer = require("inquirer");

module.exports = class {
    constructor() {
        this.personName = "";
        this.employeeId = -1;
        this.email = "";
        this.info = "";

        // Generic questions for all employee roles. Last question gets overriden by Employee role
        this.questions = [{
                name: "personName",
                message: "What's the name? ",
                type: "input",
                validate: input => Boolean(input.length)
            },
            {
                name: "employeeId",
                message: "Enter the employee ID: ",
                type: "number",
                validate: input => typeof input === "number" && input >= 0
            },
            {
                name: "email",
                message: "Enter employee's email address: ",
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
        // This info can be office number, school name, or Github username
    setInfo(info) {
        this.info = info;
    }

    // Ask questions and set the properties of the derived Employee
    async askQuestions(mainMenuCallback) {
            const that = this;
            inquirer.prompt(this.questions)
                .then(function(answers) {
                    if (typeof answers.personName !== "undefined") that.setPersonName(answers.personName)
                    if (typeof answers.employeeId !== "undefined") that.setEmployeeId(answers.employeeId)
                    if (typeof answers.email !== "undefined") that.setEmail(answers.email)
                    if (typeof answers.info !== "undefined") that.setInfo(answers.info)

                    // After asking an Employee role's questions, return to asking main menu questions
                    mainMenuCallback();
                })
                .catch(function(error) {
                    console.error("Error: " + error);
                });
        } // ask Questions

    // Get an object representing the derived Employee to render the HTML employee card
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