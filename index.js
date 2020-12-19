const fs = require("fs");
const inquirer = require("inquirer");

const teamMembers = [];

console.log(`
Team Members Generator
==========================
By Weng Fei Fung. Generate a web-page of your development team's members.
`);

askForRole();

// Ask for role at the beginning and each time a role is chosen and its questions answered, until user chooses Finished.
function askForRole() {
    inquirer
        .prompt([{
            name: "role",
            message: "Add a team member:",
            type: "list",
            choices: [
                "Manager",
                "Engineer",
                "Intern",
                "Finished ->"
            ]
        }])
        .then(answers => {
            switch (answers.role) {
                case "Manager":
                    break;
                case "Engineer":
                    break;
                case "Intern":
                    break;
                case "Finished ->":
                    writeToHTMLFile();
                    return; // Ends Recursive
            }

            askForRole(); // Recursive
        })
        .catch(error => {
            console.error("Error: " + error);
        });
} // askForRole

function writeToHTMLFile() {
    console.log("Outputted to load/data.json\nOpen load/ in web browser to see your team members.");
}