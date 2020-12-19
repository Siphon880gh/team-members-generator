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
        .then(function(answers) {

            /**
             * 
             * @callback
             * After user finishes the questions for an employee role, push the team member into global object for rendering HTML
             * Then show the main menu again
             * 
             */
            let cb_afterAskingQuestions = function() {
                container.teamMembers.push(this.getTeamMemberObject());
                askMainMenu();
            }

            switch (answers.role) {

                case "Manager":

                    // Ask questions, then add to team members, and show main menu again
                    let managerInfo = new Manager();
                    managerInfo.askQuestions(cb_afterAskingQuestions.bind(managerInfo));

                    break;
                case "Engineer":

                    // Ask questions, then add to team members, and show main menu again
                    let engineerInfo = new Engineer();
                    engineerInfo.askQuestions(cb_afterAskingQuestions.bind(engineerInfo));

                    break;
                case "Intern":

                    // Ask questions, then add to team members, and show main menu again
                    let internInfo = new Intern();
                    internInfo.askQuestions(cb_afterAskingQuestions.bind(internInfo));

                    break;
                default:
                    buildTeamPage();
                    return;
            }
        })
        .catch(error => {
            console.error("Error: " + error);
        });
} // askMainMenu

function buildTeamPage() {
    console.log("Outputted to load/data.json\nOpen load/ in web browser to see your team members.");
    console.log(container);

    const filepath = "load/data.json";
    const text = JSON.stringify(container);
    fs.writeFileSync(filepath, text);
}