"use strict"

// //-- Happy Numbers--//

// let done = false;
// let counter = 1;
// let numArr = [];
// let sum = 0;
// let word = "Happy";

// //-- Receive number --//
// let numToCheck = prompt("Enter number to check: ");
// for(let i=0;i<numToCheck.length;i++) {
//     let num = parseInt(numToCheck[i]);
//     numArr.push(num);
// }

// while(!done) {
// if(counter>1) {
//     numToCheck = (""+sum).split("");
//     sum = 0;
//     numArr = [];
//     for(let i=0;i<numToCheck.length;i++) {
//         let num = parseInt(numToCheck[i]);
//         numArr.push(num);
//     }
// }
// //-- Square each digit of the number --//

// //-- Find the sum of each square --//
// for(let i=0;i<numArr.length;i++) {
//     numArr[i] *= numArr[i];
//     sum += numArr[i];
// }
// if(sum===1) {
    
//     console.log("This number is a " + "%cHappy" + " number","color:green");
//     done = true;
// } else if(counter>1000) {
    
//     console.log("This is not a " + "%cHappy" + " number","color:red");
//     done = true;
// }
// counter++;
// //-- Repeat until number reaches 0 or terminate near 'infinity' --//
// }

//-- Prime Numbers --//
// let prime = true;
// let numbers = 100; //parseInt(prompt("What number would you like to go to?"));
//  for(let i=2;i<=numbers;i++) {
//      prime = true;
//     for(let j=2;j<=i;j++) {
//         if(i%j===0 && i!==j) {
//             prime = false;
//         } 
//     }
//     if(prime) {
//         console.log(i);
//     }
//  }

//-- Fibonacci --//
// let numList = [];
// let num = prompt("What sequence would you like to begin with?") || 1;

// for(let i=1;i<12;i++) {
//     if(i===1) {
//         numList.push(i-1);
//         numList.push(i);
//     } else {
//         let num = numList[i-1] + numList[i-2];
//         numList.push(num);
//     }
    
// }
// numList.splice(0,num-1);
// console.log(numList);

//-- 'Whiteboard' Challenges --//
//-- 1 --//
// let gArr = [5,17,77,50];
// let num = 94;
// let numS = [];

// let indices = locationIndex(gArr,num);

// function locationIndex(gArr,num) {
//     for(let i=0;i<gArr.length;i++) {
//         for(let j=0;j<gArr.length;j++) {
//             if(gArr[i]+gArr[j]===num) {
//                 numS.push(gArr.indexOf(gArr[i]),gArr.indexOf(gArr[j]));
//                 return numS;
//             }
//         }
//     }
// }

// console.log("The indices of the two requested numbers is " + indices[0] + " and " + indices[1] + ". ");
//-- 2 (Palidrome) --//
//-- Already completed --//

//-- 3 --//
// let nums = [2,6,1,7,5,4];

// let result = certifyIncreNums(nums);
// console.log("The array of numbers entered are incrementing: " + result);

// function certifyIncreNums(nums) {
//     let temp;
//     let done = false;
//     let counter = 0;
//     while(!done) {
//         counter = 0;
//         for(let i=0;i<nums.length;i++) {
//             if(nums[i]>nums[i+1]) {
//             temp = nums[i];
//             nums[i] = nums[i+1];
//             nums[i+1] = temp;
//             counter++;
//             }
//         }
//         if(counter===0) {
//         done = true;
//         }
//     }
//     let startNum = nums[0];
//     let duplArr = [];
//     for(let i=0;i<nums.length;i++) {
//         duplArr.push(startNum+i);
//     }
//     for(let i=0;i<nums.length;i++) {
//         if(nums[i]!==duplArr[i]) {
//         return false;
//         }
//     }
//     console.log(nums);
//     console.log(duplArr);
//     return true;
// }

// let combArr = [7,9,-3,-32,107,-1,36,95,-14,-99,21];
// let resultArr = posNeg(combArr);
// console.log(resultArr);

// function posNeg(combArr) {
//     let posSum=0;
//     let negSum=0;
//     let resArr = [];
//     for(let i=0;i<combArr.length;i++) {
//         if(combArr[i]<0) {
//             negSum += combArr[i];
//         } else {
//             posSum += combArr[i];
//         }
//     }
//     resArr.push(posSum);
//     resArr.push(negSum);
//     return resArr;
// }

// let strNums = "3 9 5 1 4 8 10 2";
// let arryNums = strNums.split(" ");
// console.log(highLow(arryNums));

// function highLow(arryNums) {
//     let result = [];
//     let highest = 0;
//     let lowest = Number.MAX_VALUE;
//     for(let i=0;i<arryNums.length;i++) {
//         if(parseInt(arryNums[i])>highest) {
//             highest = parseInt(arryNums[i]);
//         } else if(parseInt(arryNums[i])<lowest) {
//             lowest = parseInt(arryNums[i]);
//         }
//     }
//     result.push(lowest);
//     result.push(highest);
//     return result;
// }

// let email = "chris@gmail.com";
// let certify = "@gmail.com";

// console.log(emailConfirm(email,certify));

// function emailConfirm(email,certify) {
//     let isTrue = email.includes(certify); 
//     return isTrue;
// }

//-- 7 --//

// let word = prompt("Enter word to be converted: ").toLowerCase();
// console.log(convertAlph(word));

// function convertAlph(word) {
//     let position = [];
//     for(let i=0;i<27;i++) {
//         position.push(i);
//     }
//     let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//     let newWord = "";
//     for(let i=0;i<word.length;i++) {
//         for(let j=0;j<alphabet.length;j++) {
//             if(word[i]===alphabet[j] && newWord==="") {
//                 newWord += position[j];
//             } else if(word[i]===alphabet[j]) {
//                 newWord += " " + position[j];
//             }
//         }
//     }
//     return newWord;
// }



