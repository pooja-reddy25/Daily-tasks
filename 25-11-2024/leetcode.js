//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
var twoSum = function(nums, target) {
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return[i,j]
            }
        }
    }
    return[];
};
let nums=[2, 7, 11, 15] 
let  target = 13
console.log(twoSum(nums, target));

//Given a string s, find the length of the longest substring without repeating characters.
function lengthofLongestSubstring(s){
    let maxLength = 0;
    for(let i=0;i<s.length;i++){
        let currentSubstring = '';
        for (let j = i; j < s.length; j++) {
            let currentChar = s[j];
            if(currentSubstring.indexOf(currentChar)!== -1){
                break;
            }
            currentSubstring += currentChar;
        maxLength = Math.max(maxLength, currentSubstring.length);
    }
}

return maxLength;
}
const s = "abcabcbb";
console.log(lengthofLongestSubstring(s)); 


//number is even or odd
function evenOdd(num){
    if(num%2==0){
        return "Number is even"
    }else{
        return "Number is not even"
    }
}
console.log(evenOdd(8));

function EvenOdd(arr){
    let result = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i]%2==0){
            result.push(arr[i]);
        }
    }
    return result;
}
let array4 = [2,3,4,5,6,7,8];
console.log(EvenOdd(array4));

//fibonacci series
function fiboSeries(num){
    let sequence = [];
    let a=0,b=1;
    for(let i=0;i<num;i++){
        sequence.push(a);
        let next=a+b;
        a=b;
        b=next;
    }
    return sequence;
}
console.log(fiboSeries(5));

//factorial
function factorial(n){
    let fact = 1;
    for(let i=1;i<=n;i++){
        fact=fact*i;
    }
    return fact;
}
console.log(factorial(4));

//palindrome
function palindrome(str){
    let start=0;
    let end=str.length-1;
    while(start<end){
        if(str[start]!=str[end]){
            return false
        }
        start++;
        end--;
    }
    return true;
}
console.log(palindrome("hello"));
console.log(palindrome("madam"));


//reverse an array
function reversedArray(arr){
   let left=0;
   let right=arr.length-1;
   while(left<right){
    let temp=arr[left];
    arr[left]=arr[right];
    arr[right]=temp;
    left++;
    right--;
   }
   return arr;
}
let array = [1, 2, 3, 4, 5];
console.log(reversedArray(array)); 

let array1=[1,2,3,4,5];
console.log(array1.reverse());

//Print all keys and values
function printObj(obj){
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            console.log(key + ": "+obj[key]);
        }
    }
}
let exampleObject = {
    name: "Alice",
    age: 30,
    city: "Bengaluru"
};

printObj(exampleObject);

//FizzBuzz
function fizzBuzz(){
    for(let i=1;i<=100;i++){
        if(i%3===0 && i%5===0){
            console.log("FizzBuzz");
        } else if(i%3===0){
            console.log("Fizz");
        } else if(i%5===0){
            console.log("Buzz");
        }else{
            console.log(i);
        }
    }
}
fizzBuzz();