//Closures within its lexical environment
function outerFunction(){
    const name = "I am Outside!";
    function innerFunction(){
        console.log(name);
    }
    innerFunction();
}
outerFunction();

//outerFunction returns innerFunction, which is a closure.
// Even though outerFunction has finished executing, 
// innerFunction still has access to outerVar because it "remembers" the environment in which it was created.
function outer(){
    let outerVar = "I am Good!";
    return function inner(){
        console.log(outerVar);
    };
}
const closureExample = outer();
closureExample();

//Practical uses of closures
//A) Data Encapsulation/Privacy
function counter(){
    let count = 0 ;
    return {
        increment:function(){
            count++;
            console.log(count);
        },
        decrement:function(){
            count--;
            console.log(count);
        }
    };
}
const myCounter = counter();
myCounter.increment();
myCounter.increment();
myCounter.increment();
myCounter.decrement();
myCounter.decrement();

//b) Function factories
function multiply(factor){
    return function(number){
        return number*factor;
    };
}
const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5));

function asyncExample(){
    let message = "Hello";
    setTimeout(function(){
        console.log(message);
    },2000);
}
asyncExample();