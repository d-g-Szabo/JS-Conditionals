console.log("Hello World!");

//basic conditionals
// if (conditional uses operators) {
//   action
// }

let apples = 6;
let pears = 3;

//if the condition is false, the action will not run
if (apples === pears) {
  console.log("We have the same number of apples and pears.");
}

//if the conductor is true, the action will run
if (apples > pears) {
  console.log("We have more apples than pears.");
}

//this operator checks if the two values are not equal
if (apples !== pears) {
  console.log("We have a different number of apples and pears.");
}

//multiple if statements
if (apples < pears) {
  console.log("We have more pears than apples.");
} else if (apples > pears) {
  console.log("We have more apples than pears.");
} else {
  console.log("We have the same number of apples and pears.");
}

//change the background color of the page based on user input
let colorQuestiion = prompt("What is your favorite color?");

if (colorQuestiion === "blue") {
  document.body.style.backgroundColor = "blue";
} else if (colorQuestiion === "red") {
  document.body.style.backgroundColor = "red";
} else {
  document.body.style.backgroundColor = colorQuestiion;
}

// assume you're not old enough to drive
let isRoadLegal = false; // boolean does change after checks

// set age and legal driving age
const age = 2; // const: age doesn't change during the running program
const legalDrivingAge = 17;

if (age > legalDrivingAge) {
  isRoadLegal = true;
  console.log("You're old enough to drive!");
} else if (age === legalDrivingAge) {
  console.log("You're just old enough to drive!");
} else {
  isRoadLegal = false;
  console.log("You can't drive yet!");
}

console.log("Am I road legal?", isRoadLegal);

let movieRating = "PG";

if (age > 17) {
  console.log("You can watch any movie!");
} else {
  if (movieRating === "15" || age > 14) {
    console.log("You can watch the movie!");
  } else if (movieRating === "12" || age > 11) {
    console.log("You can watch the movie!");
  } else if (movieRating === "PG" || age > 3) {
    console.log("You can watch the movie! ");
  } else {
    console.log("You can watch the movie with a parent!");
  }
}
