//function declaration
function myFunction(a,b){
    return a*b;
}
console.log(myFunction(3,4));

//function expression
const x = function(a,b) {
    return a*b
};
let z = x(3,4);
console.log(z);

//Function() Constructor
const myFunction1 = new Function("a","b","return a*b");
let y = myFunction1(5,6);
console.log(y);

//function hoisting
console.log(myfunction(5));
function myfunction(y){
    return y*y;
}

//Self Invoking functions
(function(){
    let x1 = "Hello";
    console.log(x1);
})();

function multiply(a,b){
    return a*b;
}
console.log(multiply(5,6)*4)
console.log(typeof(multiply));

//argument.length property
function add(a,b,c){
    return arguments.length;
}
console.log(add(2,3,4));
//toString = will return the function as string
function mul(a,b){
    return a*b;
}
console.log(mul.toString());
 //The above function can be written using arrow function as well
 const x3 = (a,b) =>a*b;
 console.log(x3(6,6));

 //Function Parameters
function myFunction2(x,y){
    return x+y;
}
console.log(myFunction2(2,1));

//Default Parameter value
function sub(x,y=10){
    return x-y;
}
console.log(sub(20));

//Rest Parameter
function sum(...args){
    let sum=0;
    for(let arg of args)sum+=arg;
    return sum;
}
let num = sum(4,9,16,25,29,100,66,77);
console.log(num);

//Argument Object
let x4 = findMax(1,123,500,115,44,88);
console.log(x4);
function findMax(){
    let max = -Infinity;
    for(let i=0;i<arguments.length;i++){
        if(arguments[i]>max){
            max = arguments[i];
        }
    }
    return max;
}

let x5 = sumAll(1,123,500,115,44,88);
console.log(x5);
function sumAll(){
    let sum=0;
    for(let i=0;i < arguments.length;i++){
        sum += arguments[i];
    }
    return sum;
}

//Arguments passed by Value
let number = 5;
function modifyValue(num){
    num = 10;
}
modifyValue(number);
console.log(number);

//Arguments passed by reference
let person = {name : "Pooja"};
function modifyObject(obj){
    obj.name="Shashi";
}
modifyObject(person);
console.log(person.name);

//Invoking a function as a method
const myObject = {
    firstName : "John",
    lastName : "Doe",
    fullname : function(){
        return this.firstName+ " "+this.lastName;
    }
}
console.log(myObject.fullname());

//invoking a function with a function constructor
function myFunction(arg1,arg2){
    this.firstName = arg1;
    this.lastName = arg2;
}
const myObj = new myFunction("John","Doe");
console.log(myObj.firstName+" "+myObj.lastName);


//function call() method
function greet(greeting , punctuation){
    console.log(`${greeting}, ${this.name}${punctuation}`);
}
const person1 = { name : "Venkat"};
greet.call(person1,"Hello","..!");

//function apply() method
greet.apply(person1,["Hey","."]);
const boundGreet = greet.bind(person1,"Hey");
boundGreet("!!!");