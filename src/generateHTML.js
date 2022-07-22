//Starting HTML
`<html lang="en">
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
</html>`


//Manager
`<div class="card shadow-lg mt-4" style="width: 18rem;">
    <div class="card-header bg-secondary text-white">
        <h2>Name</h2>
        <h4><i class="fa-solid fa-sitemap"></i> Manager</h4>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: </li>
        <li class="list-group-item">Email: <a href="mailto:someone@example.com">someone@example.com</a></li>
        <li class="list-group-item">office number</li>
    </ul>
</div>`

//Engineer
`<div class="card shadow-lg mt-4" style="width: 18rem;">
    <div class="card-header bg-secondary text-white">
        <h2>Name</h2>
        <h4><i class="fa-solid fa-code-branch"></i> Engineer</h4>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: </li>
        <li class="list-group-item">Email: <a href="mailto:someone@example.com">someone@example.com</a></li>
        <li class="list-group-item">GitHub: <a href="url">username</a></li>
    </ul>
</div>`

//Intern
`<div class="card shadow-lg mt-4" style="width: 18rem;">
    <div class="card-header bg-secondary text-white">
        <h2>Name</h2>
    <h4><i class="fa-solid fa-graduation-cap"></i> Intern</h4>
    </div>
    <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: </li>
        <li class="list-group-item">Email: <a href="mailto:someone@example.com">someone@example.com</a></li>
        <li class="list-group-item">School: </li>
    </ul>
</div>`