// -------------------------- Exercises: Level 1
/*
  1. Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

  ```sh
  Enter your age: 30
  You are old enough to drive.

  Enter your age:15
  You are left with 3 years to drive.
  ```

  2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

  ```sh
  Enter your age: 30
  You are 5 years older than me.
  ```

  3. If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways

  - using if else
  - ternary operator.

  ```js
  let a = 4;
  let b = 3;
  ```

  ```sh
  4 is greater than 3
  ```

  4. Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

  ```sh
  Enter a number: 2
  2 is an even number

  Enter a number: 9
  9 is is an odd number.
  ```
*/

// ------------------------ Exercise 1 Solution
// 1.
const oldEnough = prompt("Enter your age:");
const yearsLeft = 18 - oldEnough;
oldEnough >= 18
  ? alert("You are old enough to drive.")
  : alert(
      `You are left with ${oldEnough === "" ? "0" : yearsLeft} ${
        yearsLeft > 1 ? "years" : "year"
      } to drive.`
    );

// 2.
const yourAge = prompt("Enter your age:");
const myAge = 230;

if (yourAge > myAge) {
  console.log(`You are ${Math.abs(yourAge - myAge)} years older than me.`);
} else {
  console.log(`I am ${Math.abs(myAge - yourAge)} years older than you.`);
}

// 3.
let a = 4;
let b = 3;

// --- If/Else Statement
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} is less than ${b}`);
}

// --- Ternary operator
a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${a} is less than ${b}`);

// 4.
const isEvenOrOdd = prompt("Enter a number: ");
isEvenOrOdd % 2 === 0
  ? alert(`${isEvenOrOdd} is an even number`)
  : alert(`${isEvenOrOdd} is an odd number`);

//////////////////////////////////////////////////////////////////////////////
// -------------------------- Exercises: Level 2
/* 1. 
  Write a code which can give grades to students according to theirs scores:

  - 80-100, A
  - 70-89, B
  - 60-69, C
  - 50-59, D
  - 0-49, F
*/

const score = prompt("What is your score?");
switch (true) {
  case score >= 80 && score <= 100:
    alert("Your grade is A");
    break;
  case score >= 70 && score <= 79:
    alert("Your grade is B");
    break;
  case score >= 60 && score <= 69:
    alert("Your grade is C");
    break;
  case score >= 50 && score <= 59:
    alert("Your grade is D");
    break;
  case score <= 49:
    alert("Your grade is F");
}

/* 2.
Check if the season is Autumn, Winter, Spring or Summer.
If the user input is :

  - September, October or November, the season is Autumn.
  - December, January or February, the season is Winter.
  - March, April or May, the season is Spring
  - June, July or August, the season is Summer
*/

const whatSeason = prompt("What month is it?");
const letters = whatSeason.toLowerCase();
switch (letters) {
  case "september":
  case "october":
  case "november":
    alert("It's Autumn season");
    break;
  case "december":
  case "january":
  case "february":
    alert("It's Winter season");
    break;
  case "march":
  case "april":
  case "may":
    alert("It's Spring season");
    break;
  case "june":
  case "july":
  case "august":
    alert("It's Summer season");
    break;
  default:
    alert("Enter a month");
    break;
}

/* 3.
  Check if a day is weekend day or a working day. Your script will take day as an input.

```sh
  What is the day  today? Saturday
  Saturday is a weekend.

  What is the day today? saturDaY
  Saturday is a weekend.

  What is the day today? Friday
  Friday is a working day.

  What is the day today? FrIDAy
  Friday is a working day.
```
*/

const whatDay = prompt("What day is it today?");
const daysWeek = whatDay.toLowerCase();
switch (daysWeek) {
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert(`${daysWeek} is a working day.`);
    break;
  case "saturday":
  case "sunday":
    alert(`${daysWeek} is a weekend.`);
    break;
}

//////////////////////////////////////////////////////////////////////////////
// -------------------------- Exercises: Level 3
/* 1.
  Write a program which tells the number of days in a month.

```sh
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
```
*/

/* 2.
  Write a program which tells the number of days in a month, now consider leap year.
*/

const monthName = prompt("Enter a month:");
const month = monthName.toLowerCase();

let days;

switch (month) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "october":
  case "december":
    days = 31;
    break;
  case "april":
  case "june":
  case "september":
  case "november":
    days = 30;
    break;
  case "february":
    const year = parseInt(prompt("Enter a year:"));
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      days = 29; // Leap year
    } else {
      days = 28; // Non-leap year
    }
    break;
  default:
    days = "unknown";
    break;
}

console.log(`${month} has ${days} days.`);
