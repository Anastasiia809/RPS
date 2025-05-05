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
function userTurn() {
    let choice = prompt("enter r, p, or s");
    if (choice != "r" && choice != "p" && choice != "s") {
        alert("Invalid Input");
        return userTurn();
    }
    return choice;
}
function cpuTurn() {
    let choice = Math.floor(Math.random()*3);
    let moves = ["r","p","s"];
    return moves[choice];
}
function