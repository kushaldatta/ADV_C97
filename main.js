function tele_scr() {
    player1_name = document.getElementById("player1_name").value;
    localStorage.setItem("player1_name", player1_name);
    localStorage.setItem("score"+"_"+player1_name, "0");
    if (player1_name == "") {
        document.getElementById("err").innerHTML = "WARNING! Enter your name."
    }
    else {
        window.location = "game.html";
    }
}

function htp() {
    window.location = "htp.html";
}