//create a funciton to generate the html
const generateTeam = (team) => {
    const generateManager = (manager) => {
        return `
        <section id="managerCard">
        <div>Name: ${manager.getName()}</div>
        <div>Id: ${manager.getId()}</div>
        <div>Email: ${manager.getEmail()}</div>
        <div>Office#: ${manager.getRole()}</div>
        </section>
        `;
    };

    const generateEngineer = (engineer) => {
        return `
        <section id="engineerCard">
        <div>Name: ${engineer.getName()}</div>
        <div>Id: ${engineer.getId()}</div>
        <div>Email: ${engineer.getEmail()}</div>
        <div>Office#: ${engineer.getRole()}</div>
        </section>
        `;
    };

    const generateIntern = (intern) => {
        return `
        <section id="internCard">
        <div>Name: ${intern.getName()}</div>
        <div>Id: ${intern.getId()}</div>
        <div>Email: ${intern.getEmail()}</div>
        <div>Office#: ${intern.getRole()}</div>
        </section>
        `;
    };

    const htmlTeamMembersArray = [];

    htmlTeamMembersArray.push(
        team
            .filter((employee) => employee.getRole() === "Manager")
            .map((manager) => generateManager(manager))
    );

    htmlTeamMembersArray.push(
        team
            .filter((employee) => employee.getRole() === "Intern")
            .map((intern) => generateIntern(intern))
    );

    htmlTeamMembersArray.push(
        team
            .filter((employee) => employee.getRole() === "Engineer")
            .map((engineer) => generateEngineer(engineer))
    );

    return htmlTeamMembersArray.join("");
};

module.exports = (team) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <div class="container">
                ${generateTeam(team)}
        </div>
    </body>
    </html>
    `;
};
