"use strict";
// -------------------------- Exercises: Level 1
/*
```js
const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
```

1. Iterate 0 to 10 using for loop, do the same using while and do while loop

2. Iterate 10 to 0 using for loop, do the same using while and do while loop

3. Iterate 0 to n using for loop

4. Write a loop that makes the following pattern using console.log():

```js
    #
    ##
    ###
    ####
    #####
    ######
    #######
```

5. Use loop to print the following pattern:

```sh
0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100
```

6. Using loop print the following pattern

```sh
i    i^2   i^3
0    0     0
1    1     1
2    4     8
3    9     27
4    16    64
5    25    125
6    36    216
7    49    343
8    64    512
9    81    729
10   100   1000
```

7. Use for loop to iterate from 0 to 100 and print only even numbers

8. Use for loop to iterate from 0 to 100 and print only odd numbers

9. Use for loop to iterate from 0 to 100 and print only prime numbers

10. Use for loop to iterate from 0 to 100 and print the sum of all numbers.

```sh
The sum of all numbers from 0 to 100 is 5050.
```

11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

```sh
The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.
```

12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

```sh
  [2550, 2500]
```

13. Develop a small script which generate array of 5 random numbers

14. Develop a small script which generate array of 5 random numbers and the numbers must be unique

15. Develop a small script which generate a six characters random id:

```sh
5j2khz
```
*/

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Iceland",
  "Japan",
  "Kenya",
];

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "Express",
  "MongoDB",
];

const mernStack = ["MongoDB", "Express", "React", "Node"];
// ------------------------ Exercise 1 Solution
// 1.
// For loop
for (let i = 0; i <= 10; i++) {
  console.log("For loop:", i);
}

// While loop
let i = 0;
while (i <= 10) {
  console.log("While loop:", i);
  i++;
}

// Do While loop
let j = 0;
do {
  console.log("Do While loop:", j);
  j++;
} while (j <= 10);

// 2.
// For loop
for (let a = 10; a >= 0; a--) {
  console.log("For loop reverse:", a);
}

// While loop
let b = 10;
while (b >= 0) {
  console.log("While loop reverse:", b);
  b--;
}

// Do While loop
let c = 10;
do {
  console.log("Do While loop reverse:", c);
  c--;
} while (c >= 0);

// 3.

// 4.
const pattern = "#";
let d = 1;
do {
  console.log(`${pattern.repeat(d)}`);
  d++;
} while (d <= 7);

// 5.
let e = 0;
while (e <= 10) {
  console.log(`${e} x ${e} = ${e * e}`);
  e++;
}

// 6.
for (let f = 0; f <= 10; f++) {
  console.log(`${f} ${f ** 2} ${f ** 3}`);
}

// 7.
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? console.log(i) : "";
}

// 8.
for (let i = 0; i <= 100; i++) {
  i % 2 !== 0 ? console.log(i) : "";
}

// 9.
for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

// 10.
const allNum = [];
let sumOfAll = 0;
for (let i = 0; i <= 100; i++) {
  allNum.push(i);
  sumOfAll += allNum[i];
}
console.log(allNum);
console.log(`The sum of all numbers from 0 to 100 is ${sumOfAll}`);

// 11.
let sumOdd = 0;
let sumEven = 0;
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (sumEven += i) : "";
  i % 2 !== 0 ? (sumOdd += i) : "";
}
console.log(`The sum of all evens from 0 to 100 is ${sumEven}. And the sum of all odds from 0 to 100 is ${sumOdd}.
`);

// 12.
let sumOfEvens = 0;
let sumOfOdds = 0;
let newArr = [];
for (let i = 0; i <= 100; i++) {
  i % 2 === 0 ? (sumOfOdds += i) : "";
  i % 2 !== 0 ? (sumOfEvens += i) : "";
}
newArr.push(sumOfOdds, sumOfEvens);
console.log(newArr);

// 13.
let fiveRandomArr = [];
for (let i = 0; i < 5; i++) {
  fiveRandomArr.push(Math.round(Math.random() * 10) + 1);
}
console.log(fiveRandomArr);

// let num1 = Math.random() * 22;
// num1 += 4;
// console.log(num1);

// let toInt = Math.round(num1);
// console.log(toInt);

// 14.
let arrRando = [];
let me = 0;
while (arrRando.length < 5) {
  let randomNum = Math.round(Math.random() * 22);
  // Check if is in arr
  let isinArr = arrRando.includes(randomNum);
  console.log(isinArr);

  if (!isinArr) {
    arrRando.push(randomNum);
  }

  console.log(randomNum);
  console.log(arrRando);
}
console.log(arrRando);

// 15.
const genChar =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let newRes = "";

let it = 0;
do {
  const calc = Math.round(Math.random() * 61);
  console.log(calc);
  newRes += genChar.charAt(calc);
  it++;
} while (it <= 9);
console.log(newRes);

//////////////////////////////////////////////////////////////////////////////
// -------------------------- Exercises: Level 2
/*
1. Develop a small script which generate any number of characters random id:

```sh
  fe3jo1gl124g
```

```sh
  xkqci4utda1lmbelpkm03rba
```

2. Write a script which generates a random hexadecimal number.

```sh
'#ee33df'
```

3. Write a script which generates a random rgb color number.

```sh
rgb(240,180,80)
```

4. Using the above countries array, create the following new array.

```sh
["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
```

5. Using the above countries array, create an array for countries length'.

```sh
[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
```

6. Use the countries array to create the following array of arrays:

```sh
  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
]
```

7. In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

```sh
['Finland','Ireland', 'Iceland']
```

8. In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

```sh
['Albania', 'Bolivia','Ethiopia']
```

9. Using the above countries array, find the country containing the biggest number of characters.

```sh
Ethiopia
```

10. Using the above countries array, find the country containing only 5 characters.

```sh
['Japan', 'Kenya']
```

11. Find the longest word in the webTechs array

12. Use the webTechs array to create the following array of arrays:

```sh
[["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
```

13. An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack

14. Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.

15. This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.

16. Print all the elements of array as shown below.

```js
const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
```

```sh
HTML
CSS
JS
REACT
NODE
EXPRESS
MONGODB
```
*/

// ------------------------ Exercise 2 Solution
// 1.
const anyNumOfChar =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
let theResult = "";
const n1 = Math.round(Math.random() * 32);

let z = 0;
do {
  const theCalc = Math.round(Math.random() * 62);
  console.log(theCalc);
  theResult += anyNumOfChar.charAt(theCalc);
  z++;
} while (z <= n1);
console.log(theResult);
console.log(theResult.length);

// 2.
const hexNum = "abcdef0123456789";
let hexResult = "";

let h = 0;
while (h < 6) {
  const hexCalc = Math.round(Math.random() * 15);
  console.log(hexCalc);
  hexResult += hexNum.charAt(hexCalc);
  h++;
}
hexResult = `#${hexResult}`;
console.log(hexResult);

// 3.
let rgbCalc = [];
let result = "";

for (let i = 0; i < 3; i++) {
  rgbCalc.push(Math.abs(Math.round(Math.random() * 255)));
}
result += `rgb(${rgbCalc})`
console.log(result);

// 4.
let allCaps = [];
for (const count of countries) {
  allCaps.push(count.toUpperCase());
}
console.log(allCaps);

// 5.
let countLength = [];
for (const lgnt of countries) {
  countLength.push(lgnt.length);
}
console.log(countLength);

// 6.
let countArr = [];

for (const c of countries) {
  countArr.push(Array(c, c.slice(0, 3).toUpperCase(), c.length));
}
console.log(countArr);

// 7.
let isLand = [];
let noLand = [];

for (const land of countries) {
  land.includes("land") ? isLand.push(land) : noLand.push(land);
}
console.log(isLand);
console.log(noLand);

// 8.
let endIa = [];
let noEndIa = [];

countries.forEach((item) =>
  item.endsWith("ia") ? endIa.push(item) : noEndIa.push(item)
);
console.log(endIa);
console.log(noEndIa);

// 9.
let bigChar = "";

for (const country of countries) {
  country.length > bigChar.length ? (bigChar = country) : "";
}

console.log(bigChar);

// 10.
let fiveChar = [];
for (const ctryCount of countries) {
  ctryCount.length === 5 ? fiveChar.push(ctryCount) : "";
}
console.log(fiveChar);

// 11.
let longestWord = "";

for (const tech of webTechs) {
  tech.length > longestWord.length ? (longestWord = tech) : "";
}

console.log(longestWord);

// 12.
let webArr = [];

webTechs.forEach((item) => webArr.push(Array(item, item.length)));
console.log(webArr);

// 13.
const backend = ["MongoDB", "Express", "React", "Node"];
let stack = "";
for (let acronym of backend) {
  stack += acronym[0];
}
console.log(stack);

// 14.
for (let i = 0; i < webTechs.length; i++) {
  console.log(webTechs[i]);
}

// 15.
const fruitArr = ["banana", "orange", "mango", "lemon"];
let fruitReverse = [];
for (let i = fruitArr.length - 1; i >= 0; i--) {
  fruitReverse.push(fruitArr[i]);
}
console.log(fruitReverse);

// 16.
const fullStack = [];
for (let i = webTechs.length; i <= webTechs.length; i++) {
  fullStack.push(webTechs.slice(0, 4), webTechs.slice(5));
}
console.log(fullStack);

for (let i = 0; i <= webTechs.length; i++) {
  console.log(webTechs[i]);
}

//////////////////////////////////////////////////////////////////////////////
// -------------------------- Exercises: Level 3
/*
1. Copy countries array(Avoid mutation)

2. Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries

3. Sort the webTechs array and mernStack array

4. Extract all the countries contain the word 'land' from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array

5. Find the country containing the hightest number of characters in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

6. Extract all the countries contain the word 'land' from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array

7. Extract all the countries containing only four characters from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array

8. Extract all the countries containing two or more words from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and print it as array

9. Reverse the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js) and capitalize each country and stored it as an array
*/

// ------------------------ Exercise 3 Solution
//  1.
// I'm not sure i understand the question
let copiedCountries = [];
for (const copied of countries) {
  copiedCountries.push(copied);
}
console.log(copiedCountries);

//  2.
let sortedCountries = [];
for (let i = copiedCountries.length; i <= copiedCountries.length; i++) {
  sortedCountries.push(copiedCountries.sort());
}
console.log(sortedCountries);

//  3.
let sortedWebTechs = [];
let sortedMernStack = [];

for (let i = webTechs.length; i <= webTechs.length; i++) {
  sortedWebTechs.push(webTechs.sort());
}
console.log(sortedWebTechs);

let aSort = mernStack.length;
do {
  sortedMernStack.push(mernStack.sort());
  aSort++;
} while (aSort <= mernStack.length);
console.log(sortedMernStack);

//  4. and 6.
const countriesLand = [];
for (const lands of countries) {
  lands.includes("land") ? countriesLand.push(lands) : "";
}
console.log(countriesLand);

//  5.
let longestCountry = "";

for (const country of countries) {
  country.length > longestCountry.length ? (longestCountry = country) : "";
}

console.log(longestCountry);

//  7.
const fiveCharCountry = [];
for (const char of countries) {
  char.length === 5 ? fiveCharCountry.push(char) : "";
}
console.log(fiveCharCountry);

//  8.
const countriesTwoWords = countries.filter(
  (country) => country.split(" ").length >= 2
);
console.log(countriesTwoWords);

//  9.
const reverseCountries = countries
  .map((country) => {
    return country
      .split(" ")
      .map((word) => word.toUpperCase())
      .join(" ");
  })
  .reverse();

console.log(reverseCountries);
