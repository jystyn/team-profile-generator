
//Starting HTML
const generatePage = (employeeCards) => {
    return `
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
        <title>Team Page</title>
    </head>
    <body>
        <header class="jumbotron jumbotron-fluid bg-info text-white">
            <section class="container text-center">
            <h1 class="display-4 font-weight-bold">Team Page</h1>
            <p class="lead">Here are the members of the team.</p>
            </section>
        </header>
        
        <div class="d-flex flex-wrap justify-content-around">
            ${employeeCards}    
        </div>
    </body>
    <script src="https://code.jquery.com/ui/1.13.2/jquery-ui.min.js" integrity="sha256-lSjKY0/srUM9BE3dPm+c4fBo1dky2v27Gdjm2uoZaL0=" crossorigin="anonymous"></script>
    <script src="https://kit.fontawesome.com/283ba5099d.js" crossorigin="anonymous"></script>
    </html>
    `;
};

const addManager = (manager) => {
    return `
    <div class="card shadow-lg mt-4" style="width: 18rem;">
        <div class="card-header bg-secondary text-white">
            <h2>${manager.name}</h2>
            <h4><i class="fa-solid fa-sitemap"></i> Manager</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${manager.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
            <li class="list-group-item">${manager.officeNumber}</li>
        </ul>
    </div>
    `;
};

const addEngineer = (engineer) => {
    return `
    <div class="card shadow-lg mt-4" style="width: 18rem;">
        <div class="card-header bg-secondary text-white">
            <h2>${engineer.name}</h2>
            <h4><i class="fa-solid fa-code-branch"></i> Engineer</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${engineer.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
            <li class="list-group-item">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</a></li>
        </ul>
    </div>`;
};

const addIntern = (intern) => {
    return `
    <div class="card shadow-lg mt-4" style="width: 18rem;">
        <div class="card-header bg-secondary text-white">
            <h2>${intern.name}</h2>
            <h4><i class="fa-solid fa-graduation-cap"></i> Intern</h4>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${intern.id}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
            <li class="list-group-item">School: </li>
        </ul>
    </div>`;
};

const pageArray = [];

generateHTML = (data) => {
    
    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = addManager(employee);

            pageArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = addEngineer(employee);

            pageArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = addIntern(employee);

            pageArray.push(internCard);
        }
    };

    const employeeCards = pageArray.join('');

    const generateTeamPage = generatePage(employeeCards);
    console.log(generateTeamPage);
    return generateTeamPage;


}

module.exports = generateHTML;