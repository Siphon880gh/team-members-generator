const fs = require("fs");
const inquirer = require("inquirer");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

// Globally contain all the team members so later can render to HTML
const container = {
    teamMembers: []
};

// Display menu
console.log(`
Team Members Generator
==========================
By Weng Fei Fung. Generate a web-page of your development team's members.
`);
askMainMenu();

// Ask for role at the beginning and each time a role is chosen and its questions answered, until user chooses Finished.
function askMainMenu() {

    inquirer
        .prompt([{
            name: "role",
            message: "Add a team member:\n",
            type: "list",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                new inquirer.Separator(),
                "Build Team Webpage ->"
            ]
        }])
        .then(answers => {
            switch (answers.role) {
                case "Manager":

                    // Ask questions
                    const managerInfo = new Manager();
                    managerInfo.askQuestions();

                    // Add team member
                    var newTeamMember = managerInfo.getTeamMemberObject();
                    container.teamMembers.push(newTeamMember);

                    // askMainMenu(); // Recursive

                    break;
                case "Engineer":

                    // Ask questions
                    const engineerInfo = new Engineer();
                    engineerInfo.askQuestions();

                    // Add team member
                    var newTeamMember = engineerInfo.getTeamMemberObject();
                    container.teamMembers.push(newTeamMember);

                    // askMainMenu(); // Recursive

                    break;
                case "Intern":

                    // Ask questions
                    const internInfo = new Intern();
                    internInfo.askQuestions();

                    // Add team member
                    var newTeamMember = internInfo.getTeamMemberObject();
                    container.teamMembers.push(newTeamMember);

                    // askMainMenu(); // Recursive

                    break;
                default:
                    buildTeamPage();
                    return; // Ends Recursive
            }
        })
        .catch(error => {
            console.error("Error: " + error);
        });
} // askMainMenu

function buildTeamPage() {
    console.log("Outputted to load/data.json\nOpen load/ in web browser to see your team members.");
    console.log(container);
}