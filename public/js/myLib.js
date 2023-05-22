var gameul = document.getElementById("gamesul");
var consoleul = document.getElementById("consolesul");

consoleul.addEventListener("click", getGames);

function getGames (e) {
    e.preventDefault();
    gameul.innerHTML = "";
    let consoleid = e.target.getAttribute("data-consoleid");
    let userid = e.target.getAttribute("data-userid");
    console.log(consoleid + " " + userid);
    fetch(`/api/GamesTable/${userid}/${consoleid}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    }).then(function (response) {
        response.json().then(function (data) {
            console.log(data);
            for (var i = 0; i < data.length; i++) {
                addGameToList(data[i].game_name);
            }
        })
    })
}


function addGameToList(game) {
    var li = document.createElement("li");
    li.innerHTML = game;
    gameul.appendChild(li);
}

function addconsoletodb () {
    
}

// addGameToList("Halo");