// 1) Array Sum
// Example: Given [1, 2, 3, 4, 5], the function should return 15.

// ====>>
// For Loop
// function sum(numArr) {
//     let sum=0;
//     for(let i=0; i< numArr.length; i++){
//         sum += numArr[i];
//     }
//     return sum;
// }
// console.log(sum([1,2,3,4,5]));

// Reduce()

// function sum(numArr) {

//     let sumOfArray = numArr.reduce((acc,curElm)=>{
//         return acc += curElm;
//     })

//     return sumOfArray;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// Map() and forEach()
                        
// function sum(arr) {
//     let Add= 0;
//     let sumOfArray = arr.map((curElm)=>{
//         return Add += curElm;
//     })

//     return Add;
// }

// let arr = [1,2,3,4,5];
// console.log(sum(arr));

// function sum(arr) {
//     let Add= 0;
//     let sumOfArray = arr.forEach((curElm)=>{
//         return Add += curElm;
//     })

//     return Add;
// }

// let arr = [1,2,3,4,5];
// console.log(sum(arr));

// 2) String Reverse
// Example: Given 'hello', the function should return 'olleh'.

// for Loop

// function reverseString(str) {
//     let revStr='';
//     for(let i= str.length -1; i>=0 ; i--){
//         revStr += str[i];
//     }

//     return revStr;

// }
// let str = 'hello';
// console.log(reverseString(str));

// array convert

// function reverseString(str) {

// //
//        let revStr = str.split("").reverse().join("")
//     return revStr;

// }
// let str = 'hello';
// console.log(reverseString(str));

// 3) Odd or Even
// Example: Given 7, the function should return 'odd'.
// function myFunc(num) {
//     if(num % 2 === 0){
//         return "Even";
//     }
//     else{
//         return "Odd";
//     }

// }

// function myFunc(num) {
//     return num % 2 === 0 ? "Even" : "Odd";

// }
// let num= 7;
// console.log(myFunc(num));

// 4) Find Maximum
// Example: Given [3, 6, 2, 8, 4], the function should return 8.

// function findMaximum(arr) {
//     return arr.reduce((max, current) => (current > max ? current : max), arr[0]);
// }

// function findMaximum(arr) {
//     return Math.max(...arr); //spread opertater(...)
// }
// const numbers = [3, 6, 2, 8, 4];
// console.log(findMaximum(numbers));

// 5) Vowel Count
// Example: Given 'apple', the function should return 2.

// function countVowels(str) {
//     const vowels = 'aeiouAEIOU';
//     return str.split('').reduce((count, curElm) => vowels.includes(curElm) ? count + 1 : count,0);
// }

// let str = 'appleee';
// console.log(countVowels(str));

// function countVowels(word) {
//     let count = 0;
//     const vowels = ['a','e','i','o','u','A','E','I','O','U'];
//     for (let i = 0; i < word.length; i++) {
//         if (vowels.includes(word[i])) {
//            count++;
//         }

//     }
//     return count;
// }

// const word = 'appleePA';
// console.log(countVowels(word));

// 6) Check for Substring
// Example: Given the string 'hello world' and the substring 'world', the function should return True.

// function checkSub(str,subStr) {
//     return str.includes(subStr)? "true":"false";
// }
// let str = 'hello world';
// let subStr = 'world';
// console.log(checkSub(str,subStr));

// indexOf
// function checkSub(str,subStr) {
//     return str.search(subStr) !== -1 ? "true":"false";
// }
// let str = 'hello world';
// let subStr = 'world' ;
// console.log(checkSub(str,subStr));

// 7)Array Length Check
// Example: Given [1, 2, 3, 4, 5], the function should return True.

// function checkLength(arr) {
//     return arr.length ? "true":"False";
// }
// let arr= [1, 2, 3, 4, 5];
// console.log(checkLength(arr));

// 8) Capitalize First Letter
// Example: Given 'hello world', the function should return 'Hello World'.

// function CapString(str) {
//     return str.split(" ").map((curElm)=>{
//         return (curElm[0].toUpperCase() + curElm.slice(1))
//         return (curElm[0],curElm[0].toUpperCase())
//     }).join(" ");
// }
// let str = "hello word";
// console.log(CapString(str));

// function CapString(str) {
//     return str.replace('hello word','Hello Word');
// }
// console.log(CapString('hello word'));

// 9)Filter Even Numbers
// Example: Given [1, 2, 3, 4, 5], the function should return [2, 4].

// function even(arr) {
//     let newArry = [];
//    let evenArray =  arr.map((curElm)=>{
//         curElm % 2 === 0 ? newArry.push(curElm) : newArry;
//     })
//     return newArry;
// }

// // console.log(even([1,2,3,4,5]));

// function  evenArray(arr) {
//     let newArray = [];
//     for( let i=0; i<arr.length;i++){
//         if (arr[i] % 2 === 0) {
//             newArray.push(arr[i]);
//         }
//     }
//     return newArray;
// }

// console.log(evenArray([1,2,3,4,5]));

// 10)Palindrome Check
// Example: Given 'madam', the function should return True.

// function checkPalindrom(str) {
//     let revStr= str.split("").reverse().join("");
//     return str === revStr?"true":"false";
// }
// console.log(checkPalindrom("Madam"));

// function reverseString(str) {
//     let revStr='';
//     for(let i= str.length -1; i>=0 ; i--){
//         revStr = revStr += str[i] ;
//     }

//     return revStr === str ? "true":"false";

// }
// let str = 'madam';
// console.log(reverseString(str));

// 11)Remove Duplicates from Array
// Example: Given [1, 2, 2, 3, 4, 4], the function should return [1, 2, 3, 4].

//  function removeDuplicate(arr) {
//     let newArray=[];
//     arr.map((elem)=>{
//         newArray.includes(elem) ? newArray : newArray.push(elem);
//     })
//     return newArray;
//  }
//  console.log(removeDuplicate([1, 2, 2, 3, 4, 4]));

// 12)Find Prime Numbers
// Example: The function should return all prime numbers between 1 and 100.

// function prime() {
//   let count = 0;
//   let primeNums = [];

//   for (let i = 2; i <= 100; i++) {
//     for (let j = 1; j <= i; j++) {
//       if (i % j == 0)
//          count++;
//     }
//       if (count == 2) {
//         primeNums.push(i);
//       }

//     count = 0;
//   }
//   return primeNums;
// }

// console.log(prime());

// 13)Find Longest Word
// Example: Given 'The quick brown fox', the function should return 'quick'.

// function findLongestWord(str) {
//   let words = str.split(' ');
//   let longestWord = '';

//   for (let i = 0; i < words.length; i++) {
//     if (words[i].length > longestWord.length) {
//       longestWord = words[i];
//     }
//   }

//   return longestWord;
// }

// console.log(findLongestWord("The quick brown fox"));

// function findLongestWord(str) {
//   let longestWord = str.split(' ').reduce(function(longest, currentWord) {
//     return currentWord.length > longest.length ? currentWord : longest;
//   }, "");
//   return longestWord;
// }
// console.log(findLongestWord("The quick brown fox"));

// 14)Count Occurrences
// Example: Given [1, 2, 2, 3], the function should return 2 for the element '2'.

// function countOccurrences(arr, element) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === element) {
//           count++;
//       }
//   }
//   return count;
// }

// const arr = [1, 2, 2, 3];
// const element = 2;
// const result = countOccurrences(arr, element);
// console.log(result);

// 15)String to Array
// Example: Given 'a,b,c', the function should return ['a', 'b', 'c'].

// function strToArray(str) {
//   let Array=  str.split("");
//   return Array;
// }

// console.log(strToArray("abc"));

// 16)Check if Array is Sorted
// Example: Given [1, 2, 3, 4], the function should return True.

// function checkArray(arr) {
//     for(let i=0;i<arr.length-1;i++){
//       if (arr[i] > arr[i+1]  ) {
//         return false;

//       }
//     }
//     return true;
// }

// console.log(checkArray([1,3,4,8]));

// 17)Flatten Array
// Example: Given [[1, 2], [3, 4]], the function should return [1, 2, 3, 4].

// function flatArray(arr) {
//     return arr.flat(Infinity);
// }
// console.log(flatArray([[1, [3, 4]], [3, 4]]));

// function flatArray(arr) {
//     return arr.flat();
// }
// console.log(flatArray([[1, [3, 4]], [3, 4]]));

// function flatArray(arr) {
//   return arr.reduce((acc,curElm)=>{
//     return acc.concat(curElm);
//     });
// }
// console.log(flatArray([[1, 2], [3, 4]]));

// 18)String Character Frequency
// Example: Given 'hello', the function should return {'h': 1, 'e': 1, 'l': 2, 'o': 1}.
// function countOccurrences(arr, element) {
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === element) {
//             count++;
//         }
//     }
//     return count;
//   }

// function charFrequency(str) {
//     let frequencyObj = {};
//     str.split("").map((elem) => frequencyObj[elem] = countOccurrences(str.split(""), elem));
//     return frequencyObj;
// }

// console.log(charFrequency('hello'));

// 19)Merge Two Arrays
// Example: Given [1, 2] and [3, 4], the function should return [1, 2, 3, 4].

// function Con(arr,arr2) {
//   return arr.concat(arr2);
// }

// console.log(Con([1,2],[3,4]));

// function flatArray(arr) {
//   return arr.reduce((acc,curElm)=>{
//     return acc.concat(curElm);
//     });
// }
// console.log(flatArray([[1, 2], [3, 4]]));

//// 20)FizzBuzz
// Example: The function should print 'Fizz' for multiples of 3, 'Buzz' for multiples of 5, and 'FizzBuzz' for multiples of both.

// let fizzBuzz = function (n) {

// 	const arr = []
// 	for (i = 1; i <= n; i++) {
// 		if (i % 15 === 0) arr.push("FizzBuzz")
// 		else if (i % 3 === 0) arr.push("Fizz")
// 		else if (i % 5 === 0) arr.push("Buzz")
// 		else arr.push(i)
// 	}
// 	return arr

// };
// console.log(fizzBuzz(15))

// 21)Array of Squares
// Example: Given [1, 2, 3], the function should return [1, 4, 9].

// function Squar(arr){
//     return arr.map((curElm)=> curElm**2);
// }
// console.log(Squar([1,2,3]));

// function Squar(arr){
//     return arr.map((curElm)=> Math.pow(curElm,2));
// }
// console.log(Squar([1,2,3]));

// 22)Remove Falsy Values
// Example: Given [0, 1, false, 2, '', 3], the function should return [1, 2, 3].

// function RemoveFalsy(arr) {

//     return arr.filter((curElm)=>{
//     if (curElm) {
//       return curElm;
//     }
//    })

// }

// console.log(RemoveFalsy([0,1,false,2,"",3]));

// 23)Find Missing Number
// Example: Given [1, 2, 4, 5], the function should return 3.
// function missing(numArr) {
//     numArr.sort((a, b) => a-b);

//     let start = numArr[0];
//     let end = numArr[numArr.length - 1];
//     let newComplitArr = [];
//     let result = [];

//     for(let i=start; i<end; i++){
//         newComplitArr.push(i);
//     }

//     newComplitArr.filter((elem) => {
//         numArr.includes(elem) ? result : result.push(elem);
//     });

//     return result;
// }


// console.log(missing([1,2,5,10]));



// 24)Anagram Check
// Example: Given 'listen' and 'silent', the function should return True.

// function Anagram(str1,str2){

//     let anagram1 = str1.split("").reduce((acc,curElm)=>{
//         return ((str2.includes(curElm)?true:false) && acc)
//     },true);
//     let anagram2 = str2.split("").reduce((acc,curElm)=>{
//         return ((str1.includes(curElm)?true:false) && acc)
//     },true);
//     return anagram1 && anagram2;
// }
// console.log(Anagram("listen","silent"));

// 25)Array Chunking
// Example: Given [1, 2, 3, 4, 5] with size 2, the function should return [[1, 2], [3, 4], [5]].

// function chunkArray(array, size) {

//     let result = [];
//     for (let i = 0; i < array.length; i += size) {

//         let chunk = [];
//         for (let j = i; j < i + size && j < array.length; j++) {
//             chunk.push(array[j]);
//         }
//         result.push(chunk);
//     }
//     return result;
// }

// console.log(chunkArray([1, 2, 3, 4, 5], 2));

// 26)Remove Specific Element
// Example: Given [1, 2, 2, 3] and 2, the function should return [1, 3].

// function SpecificRemove(arr){
//     let value = 2;
//     return arr.filter(item => item !== value);
// }
// console.log(SpecificRemove([1,2,2,3]));


// 27)Longest Substring Without Repeating Characters
// Example: Given 'abcabcbb', the function should return 3.

// function longSubStr(str){
//     debugger;
//     let longestStr = 0;
//     let left= 0;
//     let right= 0;
//     let set = new Set();

//     while(right< str.length){
//         let letter = str[right];
//         if (!set.has(letter)) {
//             set.add(letter);
//             longestStr = Math.max(longestStr,set.size);
//             right++;
//         }
//         else{
//             set.delete(str[left]);
//             left++;
//         }
//     }
//     return longestStr;
// }
// console.log(longSubStr("abcabcbb"));

// 28)Count Words in String
// Example: Given 'hello world', the function should return 2.

// function countWord(str){
//     return str.split(" ").length;
// }
// console.log(countWord("hello word"));

// 29)Array Intersection
// Example: Given [1, 2, 3] and [2, 3, 4], the function should return [2, 3].

// function intersection(arr1,arr2){
//     return arr1.filter((curElm)=> arr2.includes(curElm));
// }
// console.log(intersection([1, 2, 3],[2, 3, 4]));

// 30)Convert Array of Objects to Object
// Example: Given [{'key': 'value'}], the function should return {'key': 'value'}.

// function arrIntoToObject(arr){
//     arr.map((curElm)=> console.log(curElm));
// }
// arrIntoObject([{'key': 'value'}]);

// 31)Map Method
// Example: Given [1, 2, 3], the function should return [2, 4, 6].

// function Map(arr){
//     return arr.map((curElm)=> curElm *2)
// }
// console.log(Map([1, 2, 3]));

// 32)Filter Method
// Example: Given [5, 12, 8, 130], the function should return [12, 130].

// function Filter(arr){
//     return arr.filter((curElm)=> curElm > 10)
// }
// console.log(Filter([5, 12, 8, 130]));

// 33)Reduce Method
// Example: Given [1, 2, 3, 4], the function should return 10.

// function Sum(numbers){

//       return numbers.reduce((acc, curElm) => {
//       return acc + curElm;
//     }, 0);
// }

// console.log(Sum([1, 2, 3, 4]));

// console.log(SpecificRemove([1,2,2,3]))

// 34)Sort Method
// Example: Given ['banana', 'apple', 'cherry'], the function should return ['apple', 'banana', 'cherry'].

// function sortMethod(arr){
//     return arr.sort();
// }
// console.log(sortMethod(['banana', 'apple', 'cherry']));

// 35)Find Method
// Example: Given [10, 20, 150], the function should return 150.

// function findMethod(arr){
//     return arr.find((curElm)=> curElm>20);
// }
// console.log(findMethod([10, 20, 150]));

// 36)ForEach Method
// Example: Given [1, 2, 3], the function should log 1, 2, and 3.

// function logForNum(myArray) {
//     let result = [];
//     myArray.forEach((curElm) => {
//       let logValue = Math.log(curElm);
//       result.push(logValue);
//     });
//     return result;
//   }

//   console.log(logForNum([1, 2, 3]));
// 37)Every Method
// Example: Given [1, 2, 3], the function should return True.

// let num = [1,2,3]
// function everyMethod(num){
//    return num.every((curElm)=>curElm < 4) ;
// }
// console.log(everyMethod(num));

// 38)Some Method
// Example: Given [10, 20, 51], the function should return True.

// function someMethod(arr){
//     return arr.some((curElm)=>curElm < 50);
// }
// console.log(someMethod([10, 20, 51]));

// 39)Concat Method
// Example: Given [1, 2] and [3, 4], the function should return [1, 2, 3, 4].

// function Con(arr,arr2) {
//   return arr.concat(arr2);
// }

// console.log(Con([1,2],[3,4]));

// 40)Includes Method
// Example: Given [1, 2, 3] and 2, the function should return True.

// function Incl(arr) {
//   return arr.includes(2);
// }
// console.log(Incl([1,2,3]));

// 41)String Split
// Example: Given 'hello world', the function should return ['hello', 'world'].

// function Split(str) {
//   return str.split(" ");
// }
// console.log(Split("hello world"));

// 42)String Replace
// Example: Given 'apple', the function should return 'bpple'.

// function Rep(str) {
//   return str.replace('apple','bpple');
// }

// console.log(Rep("this is apple"));

// 43)String Trim
// Example: Given ' hello ', the function should return 'hello'.

// function Trim(str) {
//   return str.trim();
// }
// console.log(Trim("            hello  "));

// 44)String UpperCase
// Example: Given 'hello', the function should return 'HELLO'.

// function upper(str) {
//   return str.toUpperCase();
// }
// console.log(upper("hello"));

// 45)String LowerCase
// Example: Given 'HELLO', the function should return 'hello'.

// function lower(str) {
//   return str.toLowerCase();
// }
// console.log(lower("HELLO"));

// 46)String Repeat
// Example: Given 'hi' and 3, the function should return 'hihihi'.

// function Repeat(str) {
//   return str.repeat(3);
// }
// console.log(Repeat("hi"));

// 47)String Slice
// Example: Given 'hello world', the function should return 'hello'

// function Slice(str) {
//   return str.slice(0,5);
// }
// console.log(Slice("hello word"));

// 48)String StartsWith
// Example: Given 'hello' and 'he', the function should return True

// function start(str) {

//   return str.startsWith('he')?"true":"false";
// }
// console.log(start("hello"));

// 49)String EndsWith
// Example: Given 'hello' and 'lo', the function should return True.

// function end(str) {

//   return str.endsWith('lo')?"true":"false";
// }
// console.log(end("hello"));

// 50)String Substring
// Example: Given 'hello world', the function should return 'ello' for indices 1 and 5.

// function subStr(str) {
//   return str.substring(1,5);
// }
// console.log(subStr("hello world"));
