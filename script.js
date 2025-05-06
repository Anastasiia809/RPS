//param: none
//return:none
function main() {
    let u = "";
    let c = "";
    while (u == c) {
        u = userTurn();
        c = cpuTurn();
        if (u == c) alert("We both chose " + c);
    }
    let winner = findWinner(u,c);
    alert("You chose " + u + " , and I chose " + c + " . " + winner + " won");
}
// userturn
// user can choose r, p, or s.
// if bad Input, give new choice
// @param:none
// @return:choice
function userTurn() {
    let choice = prompt("enter r, p, or s");
    const turn = ["r","p","s"];
    if (!turn.includes(choice)) {
        alert("Invalid Input");
        return userTurn();
    }
    return choice;
}
// cpuTurn
// computer choose between r, p, or s
// @param:none
// @return: choice
function cpuTurn() {
    let choice = Math.floor(Math.random()*3);
    let moves = ["r","p","s"];
    return moves[choice];
}
// findWinner
//  takes user and computer turn
// decides who the winner is
// returns winner
// @param:u,c
// @return: winner
function findWinner(u,c) {
    let combo = u + c;
    switch (combo) {
      case "rp":
        winner = "p"
        break;
      case "rs":
        winner = "c"
        break;
      case "rr":
            winner = "none"
        break;
      case "ps":
        winner = "p"
        break;
      case "pr":
        winner = "c"
        break;
      case "pp":
        winner = "none"
        break;
      case ""        
    }
        alert("You chose " + u + " , and I chose " + c + winner + " won");
        return winner;
}