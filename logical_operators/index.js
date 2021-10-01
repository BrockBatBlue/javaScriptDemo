// Before anything, we need variables
let number1 = 5;
let number2 = 10;
let number3 = 15;
// Let's introduce some logical operators, such as arithmatic!
console.log(number3 + number1);
console.log(number2 - number1);
console.log(number3 / number1);
console.log(number1 * number2);
// Decide! What will you get with this arithmatic log?
console.log(number2 + number1 ** 2);

// the first is the "and" operator which looks like this: &&
// now new variables
let shape = "circle";
let color = "orange";
let isFruit = true;
let isNutritious = false;
let isTasty = true;

if (isFruit) {
    console.log("eat it.");
} else {
    console.log("look it over first.");
}

if (shape === "circle" && color === "orange" && isFruit) {
    console.log("This is an orange!");
}

if (isFruit === false && color === "orange") {
    console.log("It's a pumpkin!");
}

// Let's see what the console says when we add "or" statements! --- ||

if (isNutritious || isTasty) {
    console.log("Take a bite!");
} else {
    console.log("Step back from whatever that is.");
}

// What if you want something to show up as immediately false?

console.log(!isTasty);
// How about making something false to true?
console.log(!isNutritious);
