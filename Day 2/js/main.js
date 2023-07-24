"use strict";

/*
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

*/

// ------------------------ Solution
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
