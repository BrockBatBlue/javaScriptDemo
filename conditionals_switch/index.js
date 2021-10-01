// Let's start with a problem to solve.
// Find a day of the week by it's number: 1=Sunday

// First let's start with variables!
let weekday = 1;

// switch case is used when if statements are just not enough. You have a lot of cases to get through.
// Let's get logging to that console!
switch (weekday) {
    case 1:
        console.log("Sunday");
        break;
    case 2:
        console.log("Monday");
        break;
    case 3:
        console.log("Tuesday");
        break;
    case 4:
        console.log("Wednesday");
        break;
    case 5:
        console.log("Thursday");
        break;
    case 6:
        console.log("Friday");
        break;
    case 7:
        console.log("Saturday");
        break;
    default:
        console.log("What planet are you on?");
}
