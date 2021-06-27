function login() {
    player_1= document.getElementById("p1").value;
    player_2= document.getElementById("p2").value;

    localStorage.setItem("P1", player_1);
    localStorage.setItem("P2", player_2);

    window.location="game.html"
}