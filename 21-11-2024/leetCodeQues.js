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


// Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.
// toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
// notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".

function expect(val) {
    return {
        toBe: function(expected) {
            if (val === expected) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(expected) {
            if (val !== expected) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
    };
}

try {
    console.log(expect(5).toBe(5));
    console.log(expect(6).notToBe(7));
} catch (error) {
    console.error(error.message);
}


// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

function createCounter1(init){
    let currentvalue = init;
    return{
        increment : function(){
            currentvalue+=1;
            return currentvalue;
        },
        decrement : function(){
            currentvalue-=1;
            return currentvalue;
        },
        reset : function(){
            currentvalue = init;
            return currentvalue;
        }
    };
}
const integer = createCounter1(5);
console.log(integer.increment());
console.log(integer.decrement());
console.log(integer.reset());