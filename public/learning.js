// const myArray = [1,2,3,4,5]
// const myString = ['hi','munna','bye']



// const { stringify } = require("ajv");

// const { resolveUrl } = require("ajv/dist/compile/resolve");

// // for(let i=0;i<myArray;i++){

// // }

// //for...of loop
// for (const i of myString){
// console.log(i);

// }

// //for... in loop
// for (const character in myString){
//     console.log(character);

// }

// //-----------------------------------------------

// const myObject = {
//     first: 'Munna',
//     last:'Pajiyar',
//     rollno: 52

// }
// for(const value in myObject){
//     console.log(value,myObject[value]);
// }

// //---------------function--------------
// //function declaration
// function myFunction(){
//     console.log('Myfunction')
// }

// //function expression
// const myFunction2 = function(){
//     console.log('my second function')
// }
// myFunction();
// myFunction2();

// const arrowFunction = (param1, mmm)=>
//     console.log(`my arrow function with param ${mmm} ${param1}`)

// arrowFunction(10,20);

///write a arrow function which count the number of character
// const countCharacterRepeat =(name)=>{
//     const result ={}
//     for(const char of name){
//         if(result[char]){
//             result[char]++;

//         }else{
//             result[char]= 1;
//             //s:1
//         }

//     }
//     return result
// }

// const result = countCharacterRepeat('MUNNA PAJIYAR');
// console.log('character reapeated:', result)

// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1)
//   }

//   // Example usage
//   const example1 = 'javascript and many more';
//   console.log(capitalizeFirstLetter(example1))

//   function capitalizeFirstLetter(string) {
//     return string.replace(/^./, string[0].toUpperCase())
//   }

//   // Example usage
//   const example2 = 'javascript and manymore'
//   console.log(capitalizeFirstLetter(example2))
// const func => {}

//   const capitalizeFirstLetter=(name)=>{
//     const str= name.split("")

//     for(const i of str){
//         const result=i[0].toUpperCase()+i.slice(1);
//         console.log(result);
//     }
//     return func;
//   }

//   const func = capitalizeFirstLetter('my name')
//   console.log()

// const firstCapitalize = (str) => {
//   let words = str.split(" ");
// //   console.log(words);
//   // for(let w=0;w<words,length;w++){
//   //     console.log(words[w]);
//   // }

//   // let result=[];
//   let result = "";
//   for (let w of words) {
//     // console.log(w);
//     let firstUpper = w.charAt(0).toUpperCase();
//     let remainingChar = w.slice(1).toLowerCase();
//     // console.log(firstUpper);
//     // console.log(remainingChar);
//     let word = `${firstUpper}${remainingChar}`;
//     // console.log(word);
//     // result.push(word)
//     result = result + word + " ";
//   }
// //   console.log(result);
//   // const output = result.join(' ');
//   // console.log(output)

//   return result.trim();
// };
// console.log(firstCapitalize("my name is munna pajiyar"));

//Convert  the time to 12hr format
// const convertTo12HourFormat = (hours24, minutes24) => {
//     const period = hours24 >= 12 ? 'PM' : 'AM';
//     const hours12 = hours24 % 12 || 12;

//     const formattedHours = hours12 < 10 ? '0' + hours12 : hours12;
//     const formattedMinutes = minutes24 < 10 ? '0' + minutes24 : minutes24;

//     return `${formattedHours}:${formattedMinutes} ${period}`;
// };

// console.log(convertTo12HourFormat(23, 25));

//higher order function
// -function as argumenet/ parameter
// -return as function

//-> reuseable
//-> map
//->Filter
//->ForEach
// every, some, Reduce, FindIndex, Find. selfstudy

// 1. Function as argument
// function hofAsArgument(firstName, callback) {
// console.log('This is first function');
// console.log(firstName);
// callback();

// }

// function callBackFunction() {
//   console.log("This is second function");
// }

// const functionacall = hofAsArgument("Munna",callBackFunction)

// // 2. Function as return
// function hofAsReturn(value){
//     return function(multiplier){
//         return multiplier * value;
//     }

// }
//  const hofReturnData = hofAsReturn(2)
//  const result =hofReturnData(5);
//  console.log(result)

//Built-in HOFs Function
// 1. forEach

//  const positiveNumber = [1,2,3,4,5,6];
//  positiveNumber.forEach((item, index)=>{
//     console.log("Index: " + index, "value: ",item)
//  })

//  console.log(positiveNumber)

// 2. Filter
//  const positivNumber = [1,2,3,4,5,6];
//  const filterResult = positivNumber.filter((item)=>{
//     // console.log("Index: " + index, "value: ",item)
//     return item > 4;
//  })

//  console.log("ORIGIAL ARRAY: ",positivNumber);
//  console.log("Filtered Array: ",filterResult);

// 3. Map
// const positivNumber = [1, 2, 3, 4, 5, 6];
// const filterResult = positivNumber.map((item, index) => {
//   // console.log("Index: " + index, "value: ",item)
//   return String(item*2);
// });

// console.log("ORIGIAL ARRAY: ", positivNumber);
// console.log("Filtered Array: ", filterResult);



// const students = [
//     {name: 'Munna', grade: 3.99, address: 'ktm'},
//     {name: 'RN', grade: 3.24, address: 'Brt'},
//     {name: 'Aakelo', grade: 2.4, address: 'bkt'},
//     {name: 'ARM', grade: 9.99, address: 'pkh'},

// ]


// const filterR = students.filter((grade)=>{
//     return grade.grade>3.5;
// })

// const mapr = filterR.map((item)=>{
//     return item.name;
// })
// console.log(mapr)







// 17/12/2024

// Task 12: - vlidatets email using  regex

// const emailList = ['test@gmail.com', 'hello world', 'rupak@GMAIL.com'];
// const validEmails = emailList.filter((email) =>
//      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)).map((email) => 
//         email.toLowerCase()); 

// console.log(validEmails);


// Try-Catch in js
// try {
//     console.log('This is Try block')
//     kandskjcx
// } catch (error) {
//     console.log('This is catch block')
// } finally {
//     console.log('This is finally block')
// }


// // Promises, async/await
// const promise = new Promise((resolve, reject) => {
//     console.log('This Promise');
//     const success = false;
//     if (success) {
//         resolve('Done')
//     } else {
//         reject('Failed')
//     }
// })
// promise.then((result) => {
//     console.log(result)
// }).catch(error => {
//     console.log(error)
// })

// //fetch () api
// //axios


// //asysn/await
// async function networkApiCall() {
//     try{
//     const request = await fetch('https://jsonplaceholder.typicode.com/users')
//     const result = await request.json();
//     console.log(result)
//     result.forEach(result => {
//         console.log(result.name)
//     })
//     // for(const nam of result){
//     //     console.log(nam.name)
//     // }
//     } catch(error){
//         console.log('Error: '+ error);
//     }
    
// }
// networkApiCall();


// Task 3: Count Vowels and Consonants in a String
// const countVowelsAndConsonants = (str) => {
//     const vowels = 'aeiouAEIOU';
//     return [...str].reduce(
//         (count, char) => {
//             if (vowels.includes(char)) count.vowels++;
//             else if (/[a-zA-Z]/.test(char)) count.consonants++;
//             return count;
//         },
//         { vowels: 0, consonants: 0 }
//     );
// };

// Task 5: Remove Duplicates from an Array of Objects
// const removeDuplicates = (arr, key) => [...new Map(arr.map(item => [item[key], item])).values()];

// Task 7: Find Missing Number in a Range
// const findMissingNumber = (arr, rangeStart, rangeEnd) =>
//     Array.from({ length: rangeEnd - rangeStart + 1 }, (_, i) => rangeStart + i).find(num => !arr.includes(num));

// Task 10: Count the Occurrences of a Specific Element
// const countOccurrences = (arr, element) => arr.reduce((count, item) => 
//     (item === element ? count + 1 : count), 0);

//------------------Destructing ------->unpack

//1. ObjectDestructing
// const myObject = {'name': 'Munna Pajiyar', age: 23}
// const {name,age, addr} = myObject
// console.log(name,age,addr);


// //2. array destructing
// const myArray = [1,2,3,4,5,6]
// const [first,second] = myArray;
// console.log(first,second)

//HomeWork

// Task 1: Check if a Word is a Subsequence of Another
const isSubsequence = (word, target) => {
    let index = 0;
    return [...target].every(char => (char === word[index] ? index++ : index) || index === word.length);
};
console.log(isSubsequence('abc','abcyhuhuyi'))


// // Task 4: Find All Palindromes in an Array
// const findPalindromes = (arr) => arr.filter(word => word === [...word].reverse().join(''));



// // Task 6: Find the Intersection of Two Arrays
// const findIntersection = (arr1, arr2) => arr1.filter(item => arr2.includes(item));


// // Task 9: Filter Out Negative Numbers
// const filterNegativeNumbers = arr => arr.filter(num => num >= 0);



// // Task 11: Find the Longest Word in a String
// const findLongestWord = str =>
//     str.split(/\s+/).reduce((longest, word) => (word.length > longest.length ? word : longest), '');


//spread & Rest operater in JS
//Spread==>unpack
// Rest==> pack

// 1. Rest Operater
// function sum(a,b,...other){
//     console.log(a+b);
//     for(const i of other){
//         (a+b) += i;
//     }
//     console.log(other)
//     console.log(a+b)
// }
// sum(1,2,3,4,5,6,7,8,9)

// const sampleObject = {
//     id: 1,
//     city: 'Kathmandu',
//     customerName: 'Munna'
// }
// const {id,...otherObj} = sampleObject
// console.log(id);
// console.log(otherObj)


// //spread operater
// const old = [1,2,3,4,5,6]
// const old2 = [7,8]
// const newArray = [...old,...old2]
// console.log(newArray);
// console.log(Math.max(...old));

// const oldObject ={
//     id: 2,
//     name : "munna",
//     address: 'ktm'
// }
// const newObj = {
//     ...oldObject,
//     grade : 'A'
// }
// console.log(newObj)


// // Task: Calculate averege from number input 
// // Eg. input: 10,"hello",34,-1,34

//  const averegeNum = (...inputs)=>{
//     const numberOnly= inputs.filter(num => typeof num ==='number')
//     let sum =0;
//     let count =0;
//     for (const n of numberOnly){
//         sum += n;
//         count++;
//     }
//     const result = sum/count;
//     console.log(result);
//  }
//  averegeNum(10,"hello",34,-1,34, true,30,'world')