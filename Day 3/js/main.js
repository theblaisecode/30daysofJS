// -------------------------- Exercises: Level 1
/*
  1. Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
2. Check if type of '10' is equal to 10
3. Check if parseInt('9.8') is equal to 10
4. Boolean value is either true or false.

  1. Write three JavaScript statement which provide truthy value.
  2. Write three JavaScript statement which provide falsy value.

5. Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

  1. 4 > 3
  2. 4 >= 3
  3. 4 < 3
  4. 4 <= 3
  5. 4 == 4
  6. 4 === 4
  7. 4 != 4
  8. 4 !== 4
  9. 4 != '4'
  10. 4 == '4'
  11. 4 === '4'
  12. Find the length of python and jargon and make a falsy comparison statement.

6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

  1. 4 > 3 && 10 < 12
  2. 4 > 3 && 10 > 12
  3. 4 > 3 || 10 < 12
  4. 4 > 3 || 10 > 12
  5. !(4 > 3)
  6. !(4 < 3)
  7. !(false)
  8. !(4 > 3 && 10 < 12)
  9. !(4 > 3 && 10 > 12)
  10. !(4 === '4')
  11. There is no 'on' in both dragon and python

7. Use the Date object to do the following activities
  1. What is the year today?
  2. What is the month today as a number?
  3. What is the date today?
  4. What is the day today as a number?
  5. What is the hours now?
  6. What is the minutes now?
  7. Find out the numbers of seconds elapsed from January 1, 1970 to now.

*/

// ------------------------ Exercise 1 Solution
// 1.
const firstName = "Blaise";
const lastName = "Nwachukwu";
const country = "Nigeria";
const city = "Lagos";
const age = 7;
const isMarried = false;
const year = 2023;

console.log(typeof firstName);
console.log(typeof lastName);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof isMarried);
console.log(typeof year);

// 2.
console.log("10" === 10);

// 3.
console.log(parseInt("9.8") === 10);

// 4.
// --- Truthy
let a = 1;
let b = "hello";
let c = [];

// --- Falsy
let d = 0;
let e = "";
let f;

// 5.
console.log(4 > 3); //true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); //  false
console.log(4 == "4"); //  true
console.log(4 === "4"); //  false
// Find the length of python and jargon and make a falsy comparison statement.
const false1 = "python";
const false2 = "jargon";

const lengthFalse1 = false1.length;
const lengthFalse2 = false2.length;
console.log(lengthFalse1, lengthFalse2);

console.log(lengthFalse1 != lengthFalse2);

// 6.

console.log(4 > 3 && 10 < 12); // true
console.log(4 > 3 && 10 > 12); // false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); // true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 > 3 && 10 > 12)); // true
console.log(!(4 === "4")); //true

// There is no 'on' in both dragon and python
const reptile1 = "dragon";
const reptile2 = "python";
reptile1.includes("on") && reptile2.includes("on")
  ? console.log("True, there's 'on'")
  : console.log("False, there's no 'on'");

// 7.
const today = new Date();

// What is the year today?
console.log(today.getFullYear());
// What is the month today as a number?
console.log(today.getMonth());
// What is the date today?
console.log(today);
// What is the day today as a number?
console.log(today.getDate());
// What is the hours now?
console.log(today.getHours());
// What is the minutes now?
console.log(today.getMinutes());
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(today.getTime());

//////////////////////////////////////////////////////////////////////////////
// -------------------------- Exercises: Level 2
/* 1. 
  Write a script that prompt the user to enter base and height of a triangle and calculate an area of a triangle (area = 0.5 x b x h).
*/
const base = prompt("Enter base of a triangle");
const height = prompt("Enter height of a triangle");
const area = 0.5 * base * height;
alert(`The area of a triangle is ${area}`);

/* 2.
  Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
*/
const sideA = prompt("Enter side a of a triangle");
const sideB = prompt("Enter side b of a triangle");
const sideC = prompt("Enter side c of a triangle");
const perimeter = +sideA + +sideB + +sideC;
alert(`The perimeter of the triangle is ${perimeter}`);

/* 3.
  Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
*/
const length = prompt("Enter length a of a rectangle");
const width = prompt("Enter width a of a rectangle");

const recArea = length * width;
alert(`The area of the rectangle is ${recArea}`);

const recPerimeter = 2 * (+length + +width);
alert(`The perimeter of the rectangle is ${recPerimeter}`);

/* 4.
  Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
*/
const PI = 3.14;
const radius = prompt("Enter the radius if a circle");

const circleArea = PI * radius * radius;
alert(`The area of the circle is ${circleArea}`);

const circleCircumference = 2 * PI * radius;
alert(`The circumference of the circle is ${circleCircumference}`);

// 5. Calculate the slope, x-intercept and y-intercept of y = 2x -2
const slope = 2;
const xIntercept = -(-2) / slope;
const yIntercept = -2;

console.log("Slope:", slope);
console.log("X-intercept:", xIntercept);
console.log("Y-intercept:", yIntercept);

// 6. Slope is m = (y<sub>2</sub>-y<sub>1</sub>)/(x<sub>2</sub>-x<sub>1</sub>). Find the slope between point (2, 2) and point(6,10)
const x1 = 2;
const y1 = 2;
const x2 = 6;
const y2 = 10;

const slope2 = (y2 - y1) / (x2 - x1);
console.log("Slope between (2, 2) and (6, 10):", slope2);

// 7. Compare the slope of above two questions.
slope === slope2
  ? console.log("The slopes are equal.")
  : console.log("The slopes are not equal.");

// 8. Calculate the value of y (y = x<sup>2</sup> + 6x + 9). Try to use different x values and figure out at what x value y is 0.
const calculateY = (x) => x ** 2 + 6 * x + 9;
console.log("Value of y at x = 0:", calculateY(0));
console.log("Value of y at x = -3:", calculateY(-3));
console.log("Value of y at x = -6:", calculateY(-6));

/* 9.
  Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
*/
const hours = prompt("Enter hours");
const rate = prompt("Enter rate per hour");
const earnings = rate * hours;
alert(`Your weekly earning is ${earnings}`);

/* 10. 
  If the length of your name is greater than 7 say, your name is long else say your name is short.
*/
const myName = "Blaise";
myName.length > 7
  ? console.log("My name is long")
  : console.log("My name is short");

/* 11. 
  Compare your first name length and your family name length and you should get this output.
  let firstName = 'Asabeneh'
  let lastName = 'Yetayeh'
  Your first name, Asabeneh is longer than your family name, Yetayeh
*/
const firstName2 = "Blaise";
const lastName2 = "Nwachukwu";
firstName2.length > lastName2.length
  ? console.log(
      `Your first name, ${firstName2} is longer that your family name, ${lastName2}`
    )
  : console.log(
      `Your family name, ${lastName2} is longer that your first name, ${firstName2}`
    );

/* 12.
  Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
  let myAge = 250
  let yourAge = 25
  I am 225 years older than you.
*/
const myAge = 250;
const yourAge = 25;

console.log(`I am ${myAge - 25} years older than you.`);

/*13.
  Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

  Enter birth year: 1995
  You are 25. You are old enough to drive

  Enter birth year: 2005
  You are 15. You will be allowed to drive after 3 years.
*/
const birthYear = prompt("Enter birth year:");
const userAge = today.getFullYear() - birthYear;
const yearsLeft = 18 - userAge;

console.log(birthYear);
console.log(userAge);

userAge >= 18
  ? console.log(`You are ${userAge}. You are old enough to drive`)
  : console.log(
      `You are ${userAge}. You will be allowed to drive after ${yearsLeft} ${
        yearsLeft > 1 ? "years" : "year"
      }.`
    );

/* 14.
  Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
*/
const numYears = prompt("Enter number of years you live:", 100);
const secInAYear = 365 * 24 * 60 * 60;
const secLived = numYears * secInAYear;
console.log(secLived);

/* 15.
  Create a human readable time format using the Date time object
  YYYY-MM-DD HH:mm
  DD-MM-YYYY HH:mm
  DD/MM/YYYY HH:mm
*/
console.log(
  `${today.getFullYear()}-${today.getMonth()}-${today.getDate()} ${today.getHours()}:${today.getMinutes()}`
);
console.log(
  `${today.getDate()}-${today.getMonth()}-${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
);
console.log(
  `${today.getDate()}/${today.getMonth()}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}`
);

//////////////////////////////////////////////////////////////////////////////
// -------------------------- Exercises: Level 3
/* 1.
  Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
    1. YYY-MM-DD HH:mm eg. 20120-01-02 07:05
*/

console.log(
  `${today.getFullYear()}-${
    today.getMonth() < 10 ? `0${today.getMonth()}` : today.getMonth()
  }-${today.getDate() < 10 ? `0${today.getDate()}` : today.getDate()} ${
    today.getHours() < 10 ? `0${today.getHours()}` : today.getHours()
  }:${today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()}`
);
