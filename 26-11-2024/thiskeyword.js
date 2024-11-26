//Global object
console.log(this);

//inside a function
function showThis(){
    console.log(this);
}
showThis();

//strict mode
'use strict';
function showThis1() {
  console.log(this); // `undefined` because strict mode doesn't bind `this` to the global object.
}
showThis1();

//Inside an Object
const person = {
    name:"Pooja",age:22,
    greet:function(){
        console.log(this.name);
        console.log(this.age);
    }
};
person.greet();

//Arrow Function
const person1 = {
    name:"Venkat",age:48,
    greet:function(){
        const arrowFunction = ()=>{
            console.log(this.name);
            console.log(this.age);
        };
        arrowFunction();
    }
};
person1.greet();

//In Constructor Functions
function Person(name){
    this.name = name;
}
const person2=new Person("Sunanda");
console.log(person2.name);

//In Classes
class Person1{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(`Hello, ${this.name}`);
    }
}
const person3 = new Person1("Rohit");
person3.greet();

//Call(),apply(),bind()
function greet(greeting){
    console.log(`${greeting}, ${this.name}`);
}
const person4 = {name:'Shashi'};
greet.call(person4,'Hello');
greet.apply(person4,['Hi']);
const boundGreet = greet.bind(person4,'Hey');
boundGreet();


