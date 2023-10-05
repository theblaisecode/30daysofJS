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
```

1. Declare an _empty_ array;

2. Declare an array with more than 5 number of elements

3. Find the length of your array

4. Get the first item, the middle item and the last item of the array

5. Declare an array called _mixedDataTypes_, put different data types in the array and find the length of the array. The array size should be greater than 5

6. Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon

7. Print the array using _console.log()_

8. Print the number of companies in the array

9. Print the first company, middle and last company

10. Print out each company

11. Change each company name to uppercase one by one and print them out

12. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.

13. Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is _not found_

14. Filter out companies which have more than one 'o' without the filter method

15. Sort the array using _sort()_ method

16. Reverse the array using _reverse()_ method

17. Slice out the first 3 companies from the array

18. Slice out the last 3 companies from the array

19. Slice out the middle IT company or companies from the array

20. Remove the first IT company from the array

21. Remove the middle IT company or companies from the array

22. Remove the last IT company from the array

23. Remove all IT companies
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
// ------------------------ Exercise 1 Solution
// 1.
const emptyArr = Array();
// OR
const emptyArr2 = [];
console.log(emptyArr, emptyArr2);

// 2.
const fiveEmptyElements = Array(5);
console.log(fiveEmptyElements);

// 3.
const myArrLength = fiveEmptyElements.length;
console.log(myArrLength);

// 4.
console.log("First item:", countries[0]);
console.log("Middle item:", countries[countries.length / 2 - 0.5]);
/* OR */
console.log("Middle item:", countries[5]);
console.log("Last item:", countries[countries.length - 1]);

// 5.
const mixedDataTypes = [
  1,
  true,
  "Blaise",
  null,
  undefined,
  { Anime: "One Punch Man" },
  [1, 2, 4],
];
console.log("Length of mixedDataTypes:", mixedDataTypes.length);

// 6.
const itCompanies = [
  "Facebook",
  "Google",
  "Microsoft",
  "Apple",
  "IBM",
  "Oracle",
  "Amazon",
];

// 7.
console.log(itCompanies);

// 8.
console.log(itCompanies.length);

// 9.
console.log(itCompanies[0]);
console.log(itCompanies[3]);
/* OR */
console.log(itCompanies[itCompanies.length / 2 - 0.5]);
console.log(itCompanies[itCompanies.length - 1]);

// 10.
for (let i = 0; i < itCompanies.length; i++) {
  console.log(`${itCompanies[i]} company`);
}

// 11.
for (let i = 0; i < itCompanies.length; i++) {
  const companyToUppercase = `${itCompanies[i]} group of it Companies`;
  console.log(companyToUppercase.toUpperCase());
}

// 12.
const aSentence = `${itCompanies.join(", ")} are big IT itCompanies.`;
console.log(aSentence);

// 13.
const ifExists = itCompanies.indexOf("Twitter");
ifExists === 0 ? console.log("Twitter") : console.log("Company not found");
// OR
itCompanies.includes("Google") === true
  ? console.log("Google")
  : console.log("Company not found");

// 14.
const ooCompanies = [];
for (let i = 0; i < itCompanies.length; i++) {
  if (itCompanies[i].includes("oo")) {
    ooCompanies.push(itCompanies[i]);
    console.log(ooCompanies);
  }
}
// OR
itCompanies.filter((item) => {
  if (item.includes("oo") === true) {
    console.log(`${item} includes more than one 'o'`);
  }
});

// 15.
console.log(itCompanies.sort());

// 16.
console.log(itCompanies.reverse());

// 17.
const sliceOutFirst3 = itCompanies.slice(0, 3);
console.log(sliceOutFirst3);

// 18.
const sliceOutLast3 = itCompanies.slice(itCompanies.length - 3);
console.log(sliceOutLast3);

// 19.
const sliceOutMiddle = itCompanies.slice(2, 5);
console.log(sliceOutMiddle);
// OR
const sliceOutMiddle2 = itCompanies.slice(3, 4);
console.log(sliceOutMiddle2);

// 20.
const removeFirst = itCompanies.shift();
console.log("Removed:", removeFirst, "from", itCompanies);

// 21.
const removeMiddle = itCompanies.splice(2, 2);
console.log("Removed:", removeMiddle, "from", itCompanies);

// 22.
const removeLast = itCompanies.pop();
console.log("Removed:", removeLast, "from", itCompanies);

// 23.
const removeAll = itCompanies.splice(0);
console.log("Removed:", removeAll, "from IT companies", itCompanies);

//////////////////////////////////////////////////////////////////////////////
// -------------------------- Exercises: Level 2
/*
1. Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

2. First remove all the punctuations and change the string to array and count the number of words in the array

```js
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
console.log(words);
console.log(words.length);
```

```sh
["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

13
```

3. In the following shopping cart add, remove, edit items

```js
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
```

- add 'Meat' in the beginning of your shopping cart if it has not been already added
- add Sugar at the end of you shopping cart if it has not been already added
- remove 'Honey' if you are allergic to honey
- modify Tea to 'Green Tea'

4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

6. Concatenate the following two variables and store it in a fullStack variable.

```js
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];

console.log(fullStack);
```

```sh
["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]
```
*/

// ------------------------ Exercise 2 Solution
// 1.
import { countries3 } from "./countries.js";
console.log(countries3);

import { webTechs3 } from "./web_techs.js";
console.log(webTechs3);

// 2.
let text =
  "I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.";
const words = text.replace(/[\.,]/g, "").split(" ");
console.log(words);
console.log(words.length);

// 3.
const shoppingCart = ["Milk", "Coffee", "Tea", "Honey"];
console.log(shoppingCart.unshift("Meat"));
console.log(shoppingCart.push("Sugar"));
console.log(shoppingCart.slice(4, 5));
console.log((shoppingCart[3] = "Green Tea"));
console.log(shoppingCart);

// 4.
const countryIncludes = countries3.includes("Ethiopia");
countryIncludes === -1 ? countries.push("ETHIOPIA") : console.log("ETHIOPIA");
console.log(countries3);

// 5.
const sassExists = webTechs3.includes("Sass");
sassExists === 0
  ? console.log("Sass is a CSS preprocess")
  : webTechs3.unshift("Sass");
console.log(webTechs3);

// 6.
const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = frontEnd.concat(backEnd);

console.log(fullStack);

//////////////////////////////////////////////////////////////////////////////
// -------------------------- Exercises: Level 3
/*
1.  The following is an array of 10 students ages:

```js
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
```

- Sort the array and find the min and max age
- Find the median age(one middle item or two middle items divided by two)
- Find the average age(all items divided by number of items)
- Find the range of the ages(max minus min)
- Compare the value of (min - average) and (max - average), use _abs()_ method

2. Slice the first ten countries from the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

3. Find the middle country(ies) in the [countries array](https://github.com/Asabeneh/30DaysOfJavaScript/tree/master/data/countries.js)

4. Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
*/

// ------------------------ Exercise 3 Solution
//  1.
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
// Sort the array and find the min and max age
const ageSort = ages.sort((a, b) => a - b);
console.log(ageSort);
console.log(`Min = ${Math.min(...ageSort)}`);
console.log(`Max = ${Math.max(...ageSort)}`);

// median age
let middle = Math.floor(ageSort.length / 2);
const medianAge =
  ages.length % 2 === 0 ? (ages[middle - 1] + ages[middle]) / 2 : ages[middle];
console.log(middle, medianAge);

// average age
const average = ages.reduce((acc, c) => acc + c, 0) / ages.length;
console.log(average);

// range of the ages
const range = Math.max(...ages) - Math.min(...ages);
console.log(range);

// Compare the value of (min - average) and (max - average), use _abs()_ method
let valuesMin = Math.abs(Math.min(...ages) - average);
let valuesMax = Math.abs(Math.max(...ages) - average);
console.log(valuesMax, valuesMin);

//  2.
console.log(countries3.slice(0, 10));

//  3.
console.log(countries3.at(Math.floor(countries3.length / 2)));

//  4.
countries3.length % 2 !== 0 ? countries3.push('Nigeria') : countries3.length / 2
console.log(countries3)