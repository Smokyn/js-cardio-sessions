// CHALLENGE 1: REVERSE A STRING
// Return a string in reverse
// ex. reverseString('hello') === 'olleh'

function reverseString(str) {
  ////////////// SOLUTION ONE
  //   return str.split('').reverse().join('');
  ////////////// SOLUTION TWO
  //   let reversed = '';
  //   for (let i = 0; i <= str.length - 1; i++) {
  //     reversed = str[i] + reversed;
  //   }
  //   return reversed;
  ///////////// SOLUTION THREE
  //   let reversed = '';
  //   for (let i = str.length - 1; i >= 0; i--) {
  //     reversed += str[i];
  //   }
  //   return reversed;
  ///////////// SOLUTION FOUR
  //   let reversed = '';
  //   for (let char of str) {
  //     reversed = char + reversed;
  //     console.log(char);
  //   }
  //   return reversed;
  ///////////// SOLUTION FIVE
  //   let revString = '';
  //   str.split('').forEach((char) => {
  //     revString = char + revString;
  //   });
  //   return revString;
  ///////////// SOLUTION SIX
  //   return str.split('').reduce((revString, char) => {
  //     return char + revString;
  //   }, '');
}

// CHALLENGE 2: VALIDATE A PALINDROME
// Return true if palindrome and false if not
// ex. isPalindrome('racecar') === 'true', isPalindrome('hello') == false

function isPalindrome(str) {
  ///////////// SOLUTION ONE
  // let reversed = '';
  // for (let i = 0; i <= str.length - 1; i++) {
  //   reversed = str[i] + reversed;
  // }
  // return reversed === str;
  ///////////// SOLUTION TWO
  //   let reversedStr = str.split('').reverse().join('');
  //   return reversedStr === str;
}

// CHALLENGE 3: REVERSE AN INTEGER
// Return an integer in reverse
// ex. reverseInt(521) === 125

function reverseInt(int) {
  ////////////// SOLUTION ONE
  //   const reversedInt = int.toString().split('').reverse().join('');
  //   return parseInt(reversedInt) * Math.sign(int);
  ///////////// SOLUTION TWO
  //   const intToStr = int.toString();
  //   let reversed = '';
  //   for (let i = 0; i <= intToStr.length - 1; i++) {
  //     reversed = intToStr[i] + reversed;
  //   }
  //   return parseInt(reversed);
  ///////////// SOLUTION THREE
  // const intToStr = int.toString();
  // let reversed = '';
  // for (let i = intToStr.length - 1; i >= 0; i--) {
  //   reversed = reversed + intToStr[i];
  // }
  // return parseInt(reversed);
}

// CHALLENGE 4: CAPITALIZE LETTERS
// Return a string with the first letter of every word capitalized
// ex. capitalizeLetters('i love javascript') === 'I Love Javascript'
function capitalizeLetters(str) {
  ///////////// SOLUTION ONE
  //   const strArr = str.toLowerCase().split(' ');
  //   for (let i = 0; i < strArr.length; i++) {
  //     strArr[i] =
  //       strArr[i].substring(0, 1).toUpperCase() + strArr[i].substring(1);
  //   }
  //   return strArr.join(' ');
  ///////////// SOLUTION TWO
  // return str
  //   .toLowerCase()
  //   .split(' ')
  //   .map((word) => word[0].toUpperCase() + word.substr(1))
  //   .join(' ');
  ///////////// SOLUTION THREE regex
  //   return str.replace(/\b[a-z]/gi, (char) => char.toUpperCase());
}

// CHALLENGE 5: MAX CHARACTER
// Return the character that is most common in a string
// ex. maxCharacter('javascript') == 'a'
function maxCharacter(str) {
  // const charMap = {};
  // let maxNum = 0;
  // let maxChar = '';
  // str.split('').forEach((char) => {
  //   if (charMap[char]) {
  //     charMap[char]++;
  //   } else {
  //     charMap[char] = 1;
  //   }
  // });
  // for (let char in charMap) {
  //   if (charMap[char] > maxNum) {
  //     maxNum = charMap[char];
  //     maxChar = char;
  //   }
  // }
  // return maxChar;
}

// CHALLENGE 6: FIZZBUZZ
// Write a program that prints all the numbers from 1 to 100. For multiples of 3, instead of the number, print "Fizz", for multiples of 5 print "Buzz". For numbers which are multiples of both 3 and 5, print "FizzBuzz".
function fizzBuzz() {
  // for (let i = 1; i <= 100; i++) {
  //   if (i % 15 === 0) {
  //     console.log('Fizz Buzz');
  //   } else if (i % 3 === 0) {
  //     console.log('Fizz');
  //   } else if (i % 5 === 0) {
  //     console.log('Buzz');
  //   } else {
  //     console.log(i);
  //   }
  // }
}

// Call Function
const output = fizzBuzz();

console.log(output);
