const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const generateHTML = require('./src/generate.js');
const team = [];

const validateID = (id) => {
    if (id > 0) {
        return true;
    } else if (id === '') {
        return 'Please enter a valid ID';
    } else {
        return 'Please enter a valid ID';
    }
};
const validateEmail = (email) => {
    if (email.includes('@')) {
        return true;
    } else {
        return 'Please enter a valid email';
    }
};
const managerQuestions = [
    { type: 'input', name: 'name', message: 'What is the name of the manager?' },
    { type: 'input', name: 'id', message: 'What is the id of the manager?', validate: validateID },
    { type: 'input', name: 'email', message: 'What is the email of the manager?', validate: validateEmail },
    { type: 'input', name: 'officeNumber', message: 'What is the office number of the manager?' },
];
const engineerQuestions = [
    { type: 'input', name: 'name', message: 'What is the name of the engineer?' },
    { type: 'input', name: 'id', message: 'What is the id of the engineer?', validate: validateID },
    { type: 'input', name: 'email', message: 'What is the email of the engineer?', validate: validateEmail },
    { type: 'input', name: 'github', message: 'What is the github of the engineer?' },
];
const internQuestions = [
    { type: 'input', name: 'name', message: 'What is the name of the intern?' },
    { type: 'input', name: 'id', message: 'What is the id of the intern?', validate: validateID },
    { type: 'input', name: 'email', message: 'What is the email of the intern?', validate: validateEmail },
    { type: 'input', name: 'school', message: 'What is the school of the intern?' },
];
const addEmployee = [
    { type: 'list', name: 'addEmployee', message: 'Would you like to add an employee?', choices: ['Engineer', 'Intern', 'I don\'t want to add any more team members'] },
];

const promptManager = () => {
    inquirer.prompt(managerQuestions).then((answers) => {
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber);
        team.push(manager);
        promptAddEmployee();
    });
}
const promptEngineer = () => {
    inquirer.prompt(engineerQuestions).then((answers) => {
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        team.push(engineer);
        promptAddEmployee();
    });
}
const promptIntern = () => {
    inquirer.prompt(internQuestions).then((answers) => {
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        team.push(intern);
        promptAddEmployee();
    });
}
const promptAddEmployee = () => {
    inquirer.prompt(addEmployee).then((answers) => {
        if (answers.addEmployee === 'Engineer') {
            promptEngineer();
        } else if (answers.addEmployee === 'Intern') {
            promptIntern();
        } else {
            buildTeam();
        }
    });
}

const buildTeam = () => {
    fs.writeFileSync('./dist/index.html', generateHTML(team), 'utf-8');
};

promptManager();


