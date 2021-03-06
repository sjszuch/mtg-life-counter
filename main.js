// Default health counts
let p1Count = 20;
let p2Count = 20;

// Updates the website to check and display current health
function update() {
    if (p1Count < 1) {
        alert("Player 2 Wins!!");
        location.reload();
    } else if (p2Count < 1) {
        alert("Player 1 Wins!!")
        location.reload();
    }

    document.getElementById("player1-HP").innerHTML = p1Count;
    document.getElementById("player2-HP").innerHTML = p2Count;
}

update();

// Adds health to a player on button click
function plusHP(p, amount) {
    if (p == 1) {
        p1Count = p1Count + amount;
    } else {
        p2Count = p2Count + amount;
    }
    update();
}

// Subtracts health to a player on button click
function minusHP(p, amount) {
    if (p == 1) {
        p1Count = p1Count - amount;
    } else {
        p2Count = p2Count - amount;
    }
    update();
}

function rollDice(n) {
    document.getElementById("dice-out").innerHTML = Math.floor(Math.random() * n) + 1;
}