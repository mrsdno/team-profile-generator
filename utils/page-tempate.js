const { getTopFrame } = require("jest-message-util");
const { writer } = require("repl");
const fs = require('fs');


let htmlTemplate = "";

const generatePage = teamData => {
    if(!teamData) {
        return '';
    }
    console.log("You made it to the generate page function here is the data I have");
    console.log("The managers name is:"  + teamData[0].name)
    htmlTemplate = `

    <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="stylesheet" href="style.css" />
            <title>Team Dashboard</title>
        </head>
        <body>
            <header>My Team</header>
            <section class="team-display">
            ${teamData.map(({ name, role, id, email }) => {
        return `
                <div class="team-member">
                    <h1>${name}</h1>
                    <h2>${role}</h2>
                
                    <p>${id}</p>
                    <p>${email}</p>
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