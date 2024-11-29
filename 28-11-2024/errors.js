// Syntax Error
// console.log("Hello world"); //occurs when there is a missing closing quote

// Reference Error
// console.log(myVariable); //Variable is not declared

// Type Error
// const num = 5;
// num.toUpperCase();

// Range Error
// let num1=1;
// num1.toFixed(101);

// Eval Error
// eval("alert('Hello)");

//Handling these Errors
try{
    let result = JSON.parse('{"name" : "invalidJson"}');
    console.log(result);
} catch(error){
    console.log("Error occured:",error.message)
}

try {
    let result = JSON.parse("{invalidJson}");
} catch (error) {
    console.log("Error occurred:", error.message);
}

//using throw
function divide(a,b){
    if(b===0){
        throw new Error("cannot divide by zero");
    }
    return a/b;
}
try{
    console.log(divide(10,0));
}catch(error){
    console.log(error.message);
}

//using finally
try {
    let result = JSON.parse("{invalidJson}");
} catch (error) {
    console.log("Error:", error.message);
} finally {
    console.log("Parsing attempt completed.");
}
