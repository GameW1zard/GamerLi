const handlebars = require("handlebars");
// Helper to display and update consoles and games
handlebars.registerHelper("content", (consoles, games) => {
    let content = "<ul>";
    for (let i = 0; i < Math.max(consoles.length, games.length); i++) {
        const consoleItem = consoles[i] || {}; // if there is no console at this index, create an empty object
        console.log(consoleItem)
        const gameItem = games[i] || {}; // if there is no game at this index, create an empty object
        content += `<li>Console: ${consoleItem.name}`;
    }
    content += "</ul>";

    return new handlebars.SafeString(content);
});

module.exports = handlebars;
