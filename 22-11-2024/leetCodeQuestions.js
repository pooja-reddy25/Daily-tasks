// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.

function transformArray(arr,fn){
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i));
    }
    return result;
}
const arr = [1,2,3,4,5,6];
const fn = (element,index) => element*index;
console.log(transformArray(arr,fn));

//or

var map = function(arr,fn){
    let result = [];
    for(let i=0;i<arr.length;i++){
        result.push(fn(arr[i],i));
    }
    return result;
}
const arr1 = [1,2,3,4,5,6];
const fn1 = (element,index) => element*index;
console.log(map(arr1,fn1));


// Given an integer array arr and a filtering function fn, return a filtered array filteredArr.
// The fn function takes one or two arguments:
// arr[i] - number from the arr
// i - index of arr[i]
// filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.
// Please solve it without the built-in Array.filter method.
function filteredArray(arr,fn){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    return result;
}
const array = [1,2,3,4,5,6,7];
const fn2 = (num,index) => num%2==0;
console.log(filteredArray(array,fn2));
//or
var filter = function(arr,fn){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(fn(arr[i],i)){
            result.push(arr[i]);
        }
    }
    return result;
}
const array1 = [1,2,3,4,5,6,7];
const fn3 = (num,index) => num%2==0;
console.log(filteredArray(array1,fn3));


//Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element
function reduceArray(nums,fn,init){
    let res = init;
    for(let i=0;i<nums.length;i++){
        res = fn(res,nums[i]);
    }
    return res;
}
const number = [1,2,3,4,5,6];
const fn4 = (acc,num)=> acc+num;
const init=0;
console.log(reduceArray(number,fn4,init));
//or
const reduce = function(nums,fn,init){
    let res = init;
    for(let i=0;i<nums.length;i++){
        res = fn(res,nums[i]);
    }
    return res;
}
const number1 = [1,2,3,4,5,6];
const fn5 = (acc,num)=> acc+num;
const init1=0;
console.log(reduceArray(number1,fn5,init1));
