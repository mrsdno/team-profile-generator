const { getTopFrame } = require("jest-message-util");
const { writer } = require("repl");
const fs = require('fs');


let htmlTemplate = "";

const generatePage = teamData => {
    if(!teamData) {
        return '';
    }
    htmlTemplate = `

    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
            <link rel="stylesheet" href="https://fonts.sandbox.google.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
            <link rel="stylesheet" href="style.css" />
            <title>Team Dashboard</title>
        </head>
        <body>
            <header>My Team</header>
            <section class="team-display">
            ${teamData
            .filter(({ role }) => role === "Manager")
            .map(({ name, role, id, email, office, icon }) => {
                return `
                <div class="team-member">
                    <h1>${name}</h1>
                    <h2><span class="material-symbols-outlined">${icon}</span><span>${role}</span></h2>
                
                    <p>Employee Id: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>Office: ${office}</p>
                </div>
                `;
            })
        .join('')}
    
            ${teamData
            .filter(({ role }) => role === "Engineer")
            .map(({ name, role, id, email, github, icon }) => {
                return `
                <div class="team-member">
                    <h1>${name}</h1>
                    <h2><span class="material-symbols-outlined">${icon}</span><span>${role}</span></h2>
                
                    <p>Employee Id: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>GitHub: <a href="https://github.com/${github}" target="_blank">${github}</a></p>
                </div>
                `;
            })
            .join('')}
        
            ${teamData
            .filter(({ role }) => role === "Intern")
            .map(({ name, role, id, email, school, icon }) => {
                return `
                <div class="team-member">
                    <h1>${name}</h1>
                    <h2><span class="material-symbols-outlined">${icon}</span><span>${role}</span></h2>
                
                    <p>Employee Id: ${id}</p>
                    <p>Email: <a href="mailto:${email}">${email}</a></p>
                    <p>School: ${school}</p>
                </div>
                `;
            })
        .join('')}

            </section>
        </body>
        </html>
`

    writeFile(htmlTemplate);
};


const writeFile = htmlTemplate => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', htmlTemplate, err =>{ 
            if (err) {
                reject(err);
                return;
            }
            // if everything went well, resolve the promise
            resolve({
                ok: true,
                message: 'file created!'
            });
        });
    });
};


module.exports = generatePage, writeFile;