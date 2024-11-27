//Synchronous Callbacks
function greet(name,callback){
    console.log("Hello, "+ name + "!");
    callback();
}
function sayGoodBye(){
    console.log("GoodBye!");
}
greet("Pooja",sayGoodBye);

function calculate(a,b,operation){
    return operation(a,b);
}
function add(a,b){
    return a+b;
}
function multiply(a,b){
    return a*b;
}
console.log("Addition:",calculate(5,3,add));
console.log("Multiplication:",calculate(5,3,multiply));


//Asynchronous CallBack
function fetchData(callback){
    console.log("Fetching Data");
    setTimeout(()=>{
        console.log("Data Fetched");
        callback();
    },2000);
}
function processData(){
    console.log("Processing Data...")
}
fetchData(processData);

function delayedMessage(message,callback){
    setTimeout(()=>{
        console.log(message);
        callback();
    },2000);
}
function finished(){
    console.log("Message display complete!");
}
delayedMessage("Hello Venkat",finished);


//Callback Hell - When callbacks are nested it becomes a hell because the code becomes difficult to read and maintain
setTimeout(()=>{
    console.log("Step 1");
    setTimeout(()=>{
        console.log("Step 2");
        setTimeout(()=>{
            console.log("Step 3");
        },1000);
    },1000);
},1000);

//Reading and Processing Array
function processArray(arr,callback){
    for(let i=0;i<arr.length;i++){
        callback(arr[i],i);
    }
}
function printElement(element,index){
console.log(`Index ${index} : Element ${element}`);
}
processArray([10,20,30,40],printElement);

//Callback for simulating an API Request
function fetchUserData(callback){
    console.log("Fetching user data...");
    setTimeout(()=>{
        const userData = {name : "Sunanda",age:38};
        callback(userData);
    },3000);
}
function displayData(user){
    console.log(`Name : ${user.name} , Age : ${user.age}`);
}
fetchUserData(displayData);


//Chained Callbacks
function firstTask(callback){
    console.log("Executing first task...");
    setTimeout(callback,4000);
}
function secondTask(callback){
    console.log("Executing second task...");
    setTimeout(callback,4000);
}
function thirdTask(){
    console.log("Executing third task...");
}
firstTask(()=>{
    secondTask(()=>{
        thirdTask();
    });
});

//File Reading Simulation
function readFile(filename,callback){
    console.log(`Reading File:${filename}`);
    setTimeout(()=>{
        const fileContent = "This is the file content.";
        callback(fileContent);
    },5000);
}
function processFile(content){
    console.log("File Content:",content);
}
readFile("23-10-2024.txt",processFile);

//Custom callback for error handling
function divide(a,b,callback,errorCallback){
    if(b===0){
        errorCallback("division by zero is not allowed.");
    }else{
        callback(a/b);
    }
}
function handleResult(result){
    console.log("Result:",result);
}
function handleError(error){
    console.log("Error:",error);
}
divide(10, 2, handleResult, handleError); 
divide(10, 0, handleResult, handleError);


//Square with callback
function calculateSquare(num,callback){
    callback(num*num);
}
calculateSquare(5,result=>console.log("Square:",result));

setTimeout(()=>console.log("Timer Done"),2000);

function processArray(arr,callback){
    arr.forEach(callback);
}
processArray([1,2,3],num=>console.log(num*2));

setTimeout(()=>{
    console.log("First Execution");
    setTimeout(()=>{
        console.log("Second Execution");
        setTimeout(()=>{
            console.log("Third Execution");
        },1000);
    },1000);
},1000);


function fetchData(callback){
    setTimeout(()=> callback({name:"Pooja"}),2000);
}
fetchData(data=>console.log("Fetched Data:",data));