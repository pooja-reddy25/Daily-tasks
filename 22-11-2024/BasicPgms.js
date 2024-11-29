// Fibonacci Series
function fibonacci(n){
    let sequence = [];
    if(n<=0) return sequence;
    let a=0;b=1;
    while(a<=n){
        sequence.push(a);
        let next=a+b;
        a=b;
        b=next;
    }
    return sequence;
}
console.log(fibonacci(10));


//Rotate an array to the left by a given number of steps
function rotatedArrayLeft(arr,steps){
    if(arr.length===0 || steps<=0) return arr;
    steps = steps%arr.length;
    let rotateArray = arr.slice(steps).concat(arr.slice(0,steps));
    return rotateArray;
}
let array = [1, 2, 3, 4, 5];
console.log(rotatedArrayLeft(array, 2));
console.log(rotatedArrayLeft(array, 11));


//Palindrome
function palindrome(str){
    if(str.length===0) return false;
    let start=0;
    let end = str.length-1;
    while(start<end){
        if(str[start]!==str[end]){
            return false;
        }
        start++;
        end--;
    }
    return true;
}
console.log(palindrome("racecar")); 
console.log(palindrome("hello"));  
console.log(palindrome("madam"));


//Sum of all numbers in an array
function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); 
console.log(sumArray([10, -5, 3, 2]));  
console.log(sumArray([0, 0, 0])); 


//Title case
function toTitleCase(str){
    return str
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');
}
console.log(toTitleCase("hello world"));


//finding common elements
function commonElements(arr1,arr2){
    let common = [];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j] && !common.includes(arr1[i]))
                common.push(arr1[i]);
            }
        }
        return common;
    }
let array1 = [1,2,3,4,5];
let array2 = [3,4,5,6,7];
console.log(commonElements(array1,array2));

//Most frequent item
function mostFrequent(arr){
    let frequency={};
    let maxfreq = 0;
    let mostFrequent;
    arr.forEach(item => {
        frequency[item]=(frequency[item]||0)+1;
        if(frequency[item]>maxfreq){
            maxfreq=frequency[item];
            mostFrequent=item;
        } 
    });
    return mostFrequent;
    
}
const arr3 = [1,2,3,4,2,2,4,6,7,4,2,21];
console.log(mostFrequent(arr3));