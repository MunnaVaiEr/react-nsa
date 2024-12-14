// const myArray = [1,2,3,4,5]
// const myString = ['hi','munna','bye']

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



const convertTo12HourFormat = (hours24, minutes24) => {
    const period = hours24 >= 12 ? 'PM' : 'AM';
    const hours12 = hours24 % 12 || 12;
    
    const formattedHours = hours12 < 10 ? '0' + hours12 : hours12;
    const formattedMinutes = minutes24 < 10 ? '0' + minutes24 : minutes24;
    
    return `${formattedHours}:${formattedMinutes} ${period}`;
};

console.log(convertTo12HourFormat(13, 5));   

