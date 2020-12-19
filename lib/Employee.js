const inquirer = require("inquirer");

module.exports = class {
    constructor() {

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