// Concept: RPG characters GoodGuy and Nemesis
// Here are our variables
let goodGuy = 100;
let winner = true;
let nemesis = 150;

// Let's do some if statements
// let's add to the console logs to check if our variables are true
if (goodGuy >= 100) {
    console.log("The Good Guy is still alive!");
}

// now let's check who is the winner
// using an if and else statement
// an else statement means if the parameter results in anything else, then you do this...

if (winner === true) {
    console.log("We have a winner!");
} else {
    console.log("We do not have a winner yet.");
}

// Let's have a quick peek at ! (a logical operator), which says something is false
// Let's make an if statement to check if winner is false
if (!winner) {
    console.log("No winners");
} else {
    console.log("We do have a winner...finally.");
}
// if else if else
if (!winner) {
    console.log("We do not have a winner yet.");
} else if (nemesis > goodGuy) {
    console.log("Nemesis won 😒");
} else if (nemesis === goodGuy) {
    console.log("It's a stalemate!");
} else {
    console.log("The good guy wins!!!!!");
}
