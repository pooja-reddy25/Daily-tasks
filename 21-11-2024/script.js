// Reverse a string
function reverseString(str){
    let result = '';
    for(let i=str.length-1;i>=0;i--){
        result += str[i];
    }
    return result;
}
let string = "Hello";
console.log(reverseString(string));


//Prime Number 
function primeNumber(num){
    if(num<=1) return false;
    for(let i=2;i<=Math.sqrt(num);i++){
        if(num%i==0)
            return false;
    }
    return true;
}
function isPrime(arr){
    let prime=[];
    for(let i=0;i<arr.length;i++){
        if(primeNumber(arr[i])){
            prime.push(arr[i]);
        }
    }
    return prime;
}
let numbers = [2,3,4,5,6,7,8,9];
console.log(isPrime(numbers));


//Factorial
function factorial(num){
    if(num<0) return false;
    let fact = 1;
    for(let i=1;i<=num;i++){
        fact *= i;
    }
    return fact;
}
console.log(factorial(7));


//Merge two sorted arrays
function sortedArray(arr1,arr2){
    let mergedArray = [];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergedArray[mergedArray.length]=arr1[i];
            i++;
        } else {
            mergedArray[mergedArray.length]=arr2[j];
            j++;
        }
    }
    while(i<arr1.length){
        mergedArray[mergedArray.length]= arr1[i];
        i++;
    }
    while(j<arr2.length){
        mergedArray[mergedArray.length]=arr2[j];
        j++;
    }
    return mergedArray
}
let array1 = [6,2,3,4];
let array2 = [7,8,9];
array1.sort((a,b)=> a-b);
console.log(sortedArray(array1,array2));


//Count the occurence of each character
function countOccurence(str){
    let count = {};
    for(let i=0;i<str.length;i++){
        let char = str[i];
        if(count[char]==undefined){
            count[char]=1
        } else {
            count[char]=count[char]+1
        }
    }
    return count;
} 
let string1 ="Hello World";
console.log(countOccurence(string1));


//Flatten the array
function flattenedArray(arr){
    let result=[];
    for(let element of arr){
        if(Array.isArray(element)){
            result=result.concat(flattenedArray(element));
        } else {
            result.push(element);
        }
    }
    return result;
}
let array3 = [1,[2,[3]]];
console.log(flattenedArray(array3));


//Find Largest Number
function largestNumber(arr){
    if(arr.length===0) undefined;
    let largest = arr[0];
    for(let i=0;i<arr.length;i++){
        if(arr[i]>largest){
            largest=arr[i];
        }
    }
    return largest;
} 
let array4 = [3,45,6,7,89,100,232];
console.log(largestNumber(array4));


//Anagrams
function anagrams(str1,str2){
    if(str1.length !== str2.length) return false;
    let count={};
    for(let i=0;i<str1.length;i++){
        count[str1[i]] = (count[str1[i]]||0)+1;
        count[str2[i]] = (count[str2[i]]||0)-1;
    }
    for(let key in count){
        if(count[key]!==0 ) return false
    }
    return true;
}
console.log(anagrams("listen", "silent"));  
console.log(anagrams("hello", "world")); 
console.log(anagrams("evil", "vile"));


//Basic Calculator
function Calculator(num1,num2,operator){
    let result1;
     if(operator === '+'){
        return num1+num2;
     }else if(operator === '-'){
        return num1-num2;
     }else if(operator === '*'){
        return num1*num2;
     }else if(operator === '/'){
        if(num2 === 0){
            return 'Division error'
        }
        return num1/num2;
     }else{
        return 'Error! Invalid Operator'
     }
     return result1;
}
console.log(Calculator(2,3,'+'));
console.log(Calculator(5,3,'-'));
console.log(Calculator(5,6,'*'));
console.log(Calculator(10,5,'/')); 
console.log(Calculator(10,0,'/')); 
console.log(Calculator(10,5,'%')); 