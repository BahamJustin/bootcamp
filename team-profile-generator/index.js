const inquirer = require("inquirer");
const generatePage = require("./src/page-template");
const { writeFile, copyFile } = require("./utils/generate-site");

// User Questions
const promptUser = () => {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "What is your name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is your employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter your name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is your email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter your email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "officeNumber",
        message: "What is you office number?",
        validate: (officeInput) => {
          if (officeInput) {
            return true;
          } else {
            console.log("Please enter your office number!");
            return false;
          }
        },
      },
    ])
    .then((userData) => {
      if (!userData.manager) {
        userData.manager = [];
      }
    })
    .then(confirmAdd);
};

const confirmAdd = () => {
  return inquirer
    .prompt({
      type: "confirm",
      name: "employee",
      message: "Would you like to add an employee?",
      default: false,
    })
    .then((addEmployee) => {
      if (!addEmployee.employee) {
        console.log("Goodbye!");
      } else {
        return promptEmployee();
      }
    });
};

// Employee Position
const promptEmployee = () => {
  console.log("Adding a new employee");

  return inquirer
    .prompt([
      {
        type: "list",
        name: "position",
        message: "What position do you want to add?",
        choices: ["Intern", "Engineer"],
      },
    ])
    .then((positionData) => {
      if (positionData.position) {
        return promptPosition(positionData);
      }
    });
};

// Position Specific Questions
const promptPosition = (positionData) => {
  if (positionData.position === "Intern") {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is their name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter their name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter their name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter their email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "school",
        message: "What is their school?",
        validate: (schoolInput) => {
          if (schoolInput) {
            return true;
          } else {
            console.log("Please enter their school!");
            return false;
          }
        },
      },
    ]);
  } else if (positionData.position === "Engineer") {
    return inquirer.prompt([
      {
        type: "input",
        name: "name",
        message: "What is their name?",
        validate: (nameInput) => {
          if (nameInput) {
            return true;
          } else {
            console.log("Please enter their name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "id",
        message: "What is their employee ID?",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter their name!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "email",
        message: "What is their email address?",
        validate: (emailInput) => {
          if (emailInput) {
            return true;
          } else {
            console.log("Please enter their email address!");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "GitHub",
        message: "What is their GitHub username?",
        validate: (gitHubInput) => {
          if (gitHubInput) {
            return true;
          } else {
            console.log("Please enter their GitHub username!");
            return false;
          }
        },
      },
    ]);
  }
};

promptUser();
