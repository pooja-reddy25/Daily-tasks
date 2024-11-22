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