//Return the second half of the input string. For odd lengths, don't include the middle character (ex: the last 2 characters of a 5 character string)
const grabSecondHalf = (str) => {
    const halfLength = Math.ceil(str.length/2);
    return str.substr(halfLength);
  };
  console.log(grabSecondHalf("String"));


  //Set the value of A_code to the number that is the character code of A codeAt(0)
    const A_code = 'A'.charCodeAt(0);
    console.log(A_code);

  //Return a string of dots "...." with a length equal to length

  const dots = (length) => '.'.repeat(length);
  console.log(dots(3));


  //Create a string str from the character codes 87, 111, 119 using the fromCharCode method 87,111,119)
const str = String.fromCharCode(87,111,119);
console.log("Wow")

//Padspaces
const padSpaces = (str) => str.padEnd(10, ' ');
console.log(padSpaces("Count:"));
console.log(padSpaces("4,200,000 "))


//Pad the input string with leading 0s so it has at least 5 characters
const padZeros = (str) => str.padStart(5,'0');
console.log(padZeros("54"));
console.log(padZeros("12345"));


//Return a string like "helllo" with ellCount number of L characters

const hello = (ellCount) => {
  return 'he' + 'l'.repeat(ellCount) + 'o';
}
console.log(hello(7));


//Concatenate the input arrays using the ... spread operator
const concat = (a1, a2) => [...a1,...a2];
console.log(concat([1, 2], [3, 4]));


//Remove the 3rd item of the array
const removeThird = (arr) => arr.splice(2,1);
const array = [0, 1, 2, 3, 4, 5, 6, 7, 8]; 
console.log(removeThird(array));


//Return true if any element of the array is greater than 10

const isAnyLarge = (arr) => arr.some((number)=> number>10);
console.log(isAnyLarge([3, 7, 11]));


//Return true if every item in the array is equal to "a"

const isEverya = (arr) => arr.every((number) => number=="a");
console.log(isEverya(["a", "a", "a", "a"]));
console.log(isEverya(["a", "b", "c", "d"]));


//Find the first element in the array which is even (divisible by 2)

const findFirstEven = (arr) => arr.find((number)=>number%2==0);
console.log(findFirstEven([1, 2, 3]));
console.log(findFirstEven([1,1,1,1]));

//Destructure the array arr into 3 variables x1, x2, and x3

const arr = [2, 5, 6];
const[x1,x2,x3]=arr;
console.log(x1,x2,x3);


//Find the index of the first element which starts with "a"

const findAWordIndex = (arr) => arr.findIndex((element) => element.startsWith("a"));
console.log(findAWordIndex(["carrot", "apple"]));
console.log(findAWordIndex(["candy", "banana"]));


//Double the value of each element

const doubleEach = (arr) => arr.map((element) => element+element);
console.log(doubleEach([0, 1, -1]));
console.log(doubleEach([5,5,4,4]));

//Destructure the object obj into two variables a and b

const obj = { a: 1, b: 2 };
const{a,b}=obj;
console.log(a === 1);
console.log(a === 4);

//Use the reduce function to return the sum of all the values in the array

const sumAll = (arr) => arr.reduce((previousValue,currentValue)=>previousValue+currentValue);
console.log(sumAll([1,2,3]));


//Use flatMap to insert a 0 element after every other element

const insertZeros = (arr) => {
    return arr.flatMap((element, index) => index % 2 === 0 ? [element, 0] : [element]);
  };
console.log(insertZeros([1]));
console.log(insertZeros([1, 2, 3]));

// const insertZeros = (arr) => {
//     return arr.flatMap((element) => [element, 0]);
//   };
  

//Create a new array named arr of length 100 where each element has the value 0

let arr1 = new Array(100).fill(0);
console.log(arr1);


//Create a new array named arr of length 100 where each element has a number counting up from 1.

let arr2 = [];
for(let i=1;i<=100;i++){
  arr2.push(i);
  //arr[i]=i+1;
}
console.log(arr2);
console.log(arr2[6]);

//Create a new array named arr of length 100 where each element is a string of format 00001, 00002, etc

let arr3 = new Array(100);
for(let i=0;i<100;i++){
  arr3[i] = (i + 1).toString().padStart(5,'0');
}
console.log(arr3);

//Create a shallow copy of object using the spread operator

const shallowCopy = (object) => {
  return {...object};
};
const original = {a: 1,b:2,c:3};
const copy=shallowCopy(original);
console.log(copy);
console.log(copy === original);


//If a is greater than b return "ok" otherwise return "try again". a and b are numbers. Use the ternary operator cond ? case : else

function checkValues(a, b) {
    return a>b?"ok":"try again";
  }
  console.log(checkValues(4, 2));