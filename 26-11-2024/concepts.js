function multiply(a){
    return a*5;
}
console.log(multiply(1));
console.log(multiply(5));
console.log(multiply(10));


//Function declaration
function greet(){
    console.log("Hello");
}
greet();

//Function Expression
const greet1 = function(){
    console.log("World!");
}
greet1();


//Callbacks
function fetchdata(callback){
    console.log("Fetching the Data");
    setTimeout(()=>{
        console.log("Data fetched");
        callback();
    },2000);
}
function display(){
    console.log("processing the data");
}
fetchdata(display);

//Arrow function
const add = (a,b)=> a+b;
console.log(add(3,4));

//Difference from regular function
const obj = {
    name:"Pooja",
    regular:function(){
        console.log(this.name);
    },
    arrow:()=>{   //arrow function doesn't suppport this keyword
        console.log(this.name);
    }
};
obj.regular();
obj.arrow();


//More Arrow Functions Examples
const multiply1 = x=>x*2;
console.log(multiply1(5));

const greeting = ()=>"Hello, World!";
console.log(greeting()); 

//Arrow functions with arrays
const number = [1,2,3,4];
const squares = number.map(num=>num**2);
console.log(squares);

const scores = [10,20,30];
const result = scores.reduce((sum,scores)=>sum+scores,0);
console.log(result);



//Default Parameters
const greets = (name="Guest")=>`Hello, ${name}!`;
console.log(greets());
console.log(greets("Pooja"));


//Returning Objects
const createPerson = (name,age)=>({name,age});
const person = createPerson("Pooja",25);
console.log(person);

//How to Copy an Object using spread operator
const original={a:1,b:2};
const copy = {...original};
copy.a = 99;
console.log(original);
console.log(copy);

//Using Object.assign
const original1={a:1,b:2};
const copy1=Object.assign({},original1);
copy1.b=44;
console.log(original1);
console.log(copy1);

//Difference between ShallowCopy and DeepCopy
let original2 = {a:2,b:{c:2}};
let shallowCopy = {...original2};
shallowCopy.b.c=44;
console.log(original2);
console.log(shallowCopy);

let original3= {a:1,b:{c:2}};
let DeepCopy = JSON.parse(JSON.stringify(original3));
DeepCopy.b.c=44;
console.log(original3);
console.log(DeepCopy);


//How to iterate over object properties
//using for..in loop
const obj1 = {a:1,b:2,c:3};
for(let key in obj1){
    console.log(key,obj1[key]);
}
//using Object.keys()
const obj2 = {a:1,b:2,c:3};
Object.keys(obj2).forEach(key=>console.log(key,obj2[key]));

//using Object.entries()
const obj3 = { a: 1, b: 2, c: 3 };
for (let [key, value] of Object.entries(obj3)) {
    console.log(key, value);
}


const number1=[1,2,3];
number1.forEach(num => console.log(num*2));


//Promises
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Success');
    }, 1000);
  });
  
  promise
    .then((result) => console.log(result)) // Success
    .catch((error) => console.error(error));


//Async and Await
function fetchDataWithError() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject("Failed to fetch data.");
        }, 2000);
    });
}

async function displayData() {
    try {
        console.log("Fetching data...");
        let data = await fetchDataWithError(); // Will throw an error
        console.log(data);
    } catch (error) {
        console.log("Error:", error); // Logs: "Error: Failed to fetch data."
    }
}


//Prototype and Inheritance
function Person1(name){
    this.name=name;
}
Person1.prototype.greet = function(){
    console.log(`Hello, ${this.name}`);
};
const person2 = new Person1("Venkat");
person2.greet();