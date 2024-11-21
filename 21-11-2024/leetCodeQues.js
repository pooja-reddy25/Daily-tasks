// Write a function createHelloWorld. It should return a new function that always returns "Hello World".
function createHelloWorld(){
    return function(){
        return "Hello World";
    };
}
const hello = createHelloWorld();
console.log(hello());


// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
function createCounter(n){
    let counter = n;
    return function(){
        return counter++;
    };
}
const count = createCounter(5);
console.log(count());
console.log(count());
console.log(count());