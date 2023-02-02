const generateHTML = (team) => {
    const html = [];
    const generateManager = (manager) => {
        console.log(manager);
        let managerCard = `
        <div class="shadow p-0 mb-5 bg-light rounded">
        <div class="card employee-card" style="width: 18rem;">
            <div class="card-header bg-primary">
            ${manager.name} <br>
            <i class="fa-sharp fa-solid fa-mug-hot"></i> Manager
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">Office number: ${manager.officeNumber}</li>
            </ul> </div>
            </div>`;	
        html.push(managerCard);
    };
    const generateEngineer = (engineer) => {
        console.log(engineer);
        let engineerCard = `
        <div class="shadow p-0 mb-5 bg-light rounded">
        <div class="card employee-card" style="width: 18rem;">
            <div class="card-header bg-primary">
            ${engineer.name} <br>
            <i class="fa-solid fa-glasses"></i> Engineer
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
            </ul> </div>
            </div>`;
        html.push(engineerCard);
    };
    const generateIntern = (intern) => {
        console.log(intern);
        let internCard = `
        <div class="shadow p-0 mb-5 bg-light rounded">
        <div class="card employee-card" style="width: 18rem;">
            <div class="card-header bg-primary">
            ${intern.name} <br>
            <i class="fa-sharp fa-solid fa-user-graduate"></i> Intern
            </div>
            <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: ${intern.school}</li>
            </ul> </div>
            </div>`;
        html.push(internCard);
    };
    const generateTeam = () => {
        for (let i = 0; i < team.length; i++) {
            if (team[i].getRole() === 'Manager') {
                generateManager(team[i]);
            } else if (team[i].getRole() === 'Engineer') {
                generateEngineer(team[i]);
            } else {
                generateIntern(team[i]);
            }
        }
        const teamHTML = html.join('');
        const generateTeamPage = generatePage(teamHTML);
        return generateTeamPage;
    };
    return generateTeam();
};
module.exports = generateHTML;

const generatePage = (teamHTML) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>My Team</title>
    </head>
    <body>
        <header>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-3 p-4 team-heading">
                        <h1 class="text-center">My Team</h1>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                        ${teamHTML}
                    </div>
                </div>
            </div>
        </main>
        <script src="https://kit.fontawesome.com/9921bdc0d6.js" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};
