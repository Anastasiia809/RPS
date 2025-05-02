function main() {
    let winner = "";
    let playerTurn = prompt("(r)ock, (p)aper, or (s)cissors");
    let computer = Math.floor(Math.random()*3);
    const moves = ["r","p","s"];
    let computerTurn = moves[computer];
    if (playerTurn == "r" && computerTurn =="p") winner = "Computer";
    alert("You picked " + playerTurn + " and computer picked " + computerTurn + " and " + winner + " won");
}
main()