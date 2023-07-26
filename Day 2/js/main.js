"use strict";

/*
### Exercise: Level 1

1. Declare a variable named challenge and assign it to an initial value **'30 Days Of JavaScript'**.

2. Print the string on the browser console using __console.log()__

3. Print the __length__ of the string on the browser console using _console.log()_

4. Change all the string characters to capital letters using __toUpperCase()__ method

5. Change all the string characters to lowercase letters using __toLowerCase()__ method

6. Cut (slice) out the first word of the string using __substr()__ or __substring()__ method

7. Slice out the phrase *Days Of JavaScript* from *30 Days Of JavaScript*.

8. Check if the string contains a word __Script__ using __includes()__ method

9. Split the __string__ into an __array__ using __split()__ method

10. Split the string 30 Days Of JavaScript at the space using __split()__ method

11. 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' __split__ the string at the comma and change it to an array.

12. Change 30 Days Of JavaScript to 30 Days Of Python using __replace()__ method.

13. What is character at index 15 in '30 Days Of JavaScript' string? Use __charAt()__ method.

14. What is the character code of J in '30 Days Of JavaScript' string using __charCodeAt()__

15. Use __indexOf__ to determine the position of the first occurrence of __a__ in 30 Days Of JavaScript

16. Use __lastIndexOf__ to determine the position of the last occurrence of __a__ in 30 Days Of JavaScript.

17. Use __indexOf__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

18. Use __lastIndexOf__ to find the position of the last occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

19. Use __search__ to find the position of the first occurrence of the word __because__ in the following sentence:__'You cannot end a sentence with because because because is a conjunction'__

20. Use __trim()__ to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.

21. Use __startsWith()__ method with the string *30 Days Of JavaScript* and make the result true

22. Use __endsWith()__ method with the string *30 Days Of JavaScript* and make the result true

23. Use __match()__ method to find all the __a__’s in 30 Days Of JavaScript

24. Use __concat()__ and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'

25. Use __repeat()__ method to print 30 Days Of JavaScript 2 times


### Exercise: Level 2

1. Using console.log() print out the following statement:

   ```sh
   The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
   ```

2. Using console.log() print out the following quote by Mother Teresa:

   ```sh
   "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
   ```

3. Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
4. Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
5. Check if 'on' is found in both python and jargon
6. _I hope this course is not full of jargon_. Check if _jargon_ is in the sentence.
7. Generate a random number between 0 and 100 inclusively.
8. Generate a random number between 50 and 100 inclusively.
9. Generate a random number between 0 and 255 inclusively.
10.   Access the 'JavaScript' string characters using a random number.
11.   Use console.log() and escape characters to print the following pattern.

      ```js
      1 1 1 1 1
      2 1 2 4 8
      3 1 3 9 27
      4 1 4 16 64
      5 1 5 25 125
      ```

12.   Use **substr** to slice out the phrase **because because because** from the following sentence:**'You cannot end a sentence with because because because is a conjunction'**



### Exercises: Level 3

1. 'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word **love** in this sentence.
2. Use **match()** to count the number of all **because** in the following sentence:**'You cannot end a sentence with because because because is a conjunction'**
3. Clean the following text and find the most frequent word (hint, use replace and regular expressions).

   ```js
   const sentence =
      "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
   ```

4. Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'

*/

// ------------------------ Exercise 1 Solution
// 1.
const challenge = "'30 Days of JavaScript'";

// 2.
console.log(challenge);

// 3.
console.log(challenge.length);

// 4.
console.log(challenge.toUpperCase());

// 5.
console.log(challenge.toLowerCase());

// 6.
console.log(challenge.substr(1, 2));
console.log(challenge.substring(1, 3));

// 7.
console.log(challenge.substr(4, 18));
console.log(challenge.substring(4, 22));

// 8.
console.log(challenge.includes("Script"));

// 9.
console.log(challenge.split(""));

// 10.
console.log(challenge.split(" "));

// 11.
const countries = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(countries.split(","));

// 12.
console.log(challenge.replace("JavaScript", "Python"));

// 13.
console.log(challenge.charAt(15));

// 14.
console.log(challenge.charCodeAt(12));

// 15.
console.log(challenge.indexOf("a"));

// 16.
console.log(challenge.lastIndexOf("a", 19));

// 17.
const firstSentence =
   "You cannot end a sentence with because because because is a conjunction";
console.log(firstSentence.indexOf("because"));

// 18.
console.log(firstSentence.lastIndexOf("because", 50));

// 19.
console.log(firstSentence.search("because"));
console.log(firstSentence.search(/because/g));

// 20.
const forTrim = " 30 Days Of JavaScript ";
console.log(forTrim);
console.log(forTrim.trim());

// 21.
console.log(challenge.startsWith("'"));

// 22.
console.log(challenge.endsWith("'"));

// 23.
console.log(challenge.match(/a/gi));

// 24.
console.log("30 Days of ".concat("JavaScript"));

// 25.
console.log(challenge.repeat(2));

// ------------------------ Exercise 2 Solution
// 1.
console.log(
   'The quote "There is no exercise better for the heart than reaching down and lifting people up." by John Holmes teaches us to help one another.'
);

// 2.
console.log(
   "\"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\""
);

// 3.
const num = "10";
console.log(typeof num === typeof 10);
console.log(Number(num));

// 4.
const float = "9.8";
console.log(float === 10);
console.log(parseFloat(float) + 0.2);

// 5.
const checkIf = (python, jagon) => {
   console.log(python.includes("on") && jagon.includes("on"));
};
checkIf("python", "jagon");

// 6.
const myHope = "I hope this course is not full of jargon";
console.log(myHope.includes("jargon"));

// 7.
const randomNumber = Math.floor(Math.random() * 101);
console.log(randomNumber);

// 8.
// You need to know the range of the random. Between 50 and 80, the range is 30 (80 - 50 = 30), then you add 1.
// Therefore, the random would look like this: Math.floor(Math.random() * 31) + 50
const anodaNum = Math.floor(Math.random() * 51) + 50;
console.log(anodaNum);

// Math.floor(Math.random() * (max - min) + min);
const anodaNum2 = Math.floor(Math.random() * (100 - 50) + 50);
console.log(anodaNum2);

// 9.
const randoNum = Math.floor(Math.random() * 256);
console.log(randoNum);

// 10.
const word = "JavaScript";
const diffNumber = Math.floor(Math.random() * word.length);
console.log(word[diffNumber]);

// \n: new line
// \t: Tab, means 8 spaces
// \\: Back slash
// \': Single quote (')
// \": Double quote (")

// 11.
console.log(
   "1\t1\t1\t1\t1 \n2\t1\t2\t4\t8 \n3\t1\t3\t9\t27 \n4\t1\t4\t16\t64 \n5\t1\t5\t25\t125"
);

// 12.
console.log(firstSentence.substr(31, 23));

// ------------------------ Exercise 3 Solution
// 1.
let loveStory =
   "Love is the best thing in this world. Some found their love and some are still looking for their love.";
console.log(loveStory.match(/love/gi));

// 2.
console.log(firstSentence.match(/because/gi));

// 3.
const sentence =
   "%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";
console.log(sentence.replace(/[\%$@#&;]/g, ""));

// 4.
const extract =
   "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let calc = extract.match(/\d+/g);
let totalAnnualIncome = 0;

for (let i = 0; i < calc.length; i++) {
   totalAnnualIncome += parseInt(calc[i]);
}
console.log(totalAnnualIncome);
