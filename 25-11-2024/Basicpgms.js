//Bubble sort
function bubbleSort(arr){
    for(let i=0;i<arr.length-1;i++){
        for(let j=0;j<arr.length-1-i;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    return arr;
    }
console.log(bubbleSort([1,5,3,4,7]));

//Binary Search
function binarySearch(arr,target){
    let left = 0;
    let right = arr.length-1;
    while(left<=right){
        let mid = Math.floor((left+right)/2);
        if(arr[mid]===target){
            return mid;
        }else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return -1;
}
let array2 = [2, 4, 6, 9, 3, 6, 8];
array2.sort((a, b) => a - b);
console.log(binarySearch(array2, 6)); 


//Matrix Operations
function addMatrices(matrix1,matrix2){
    let result=[];
    for(let i=0;i<matrix1.length;i++){
        result[i]=[];
        for(let j=0;j<matrix2.length;j++){
            result[i][j]=matrix1[i][j]+matrix2[i][j];
        }
    }
    return result;
}
const matrix1 = [
    [1, 2, 3],
    [4, 5, 6]
];
const matrix2 = [
    [3, 5, 6],
    [7, 8, 9]
];
console.log(addMatrices(matrix1, matrix2));

function matrixMultiplication(matrix3, matrix4) {
    let result1 = [];
    for (let i = 0; i < matrix3.length; i++) {
        result1[i] = [];
        for (let j = 0; j < matrix4[0].length; j++) {
            result1[i][j] = 0;
            for (let k = 0; k < matrix3[0].length; k++) {
                result1[i][j] += matrix3[i][k] * matrix4[k][j];
            }
        }
    }
    return result1;
}

const matrix3 = [
    [1, 2, 3],
    [4, 5, 6]
];

const matrix4 = [
    [3, 5, 6],
    [7, 8, 9],
    [3, 4, 5]
];

console.log(matrixMultiplication(matrix3, matrix4));


//Sum of diagonal and their differences
function diagonalSumDifference(matrix){
    let primarySum=0;
    let secondarySum=0;
    let n=matrix.length;
    for(let i=0;i<n;i++){
        primarySum+=matrix[i][i];
        secondarySum+=matrix[i][n-i-1];
    }
    let difference = primarySum-secondarySum;
    if(difference<0){
        difference= -difference;
    }
    return{primarySum : primarySum,secondarySum:secondarySum,difference:difference}
}
const matrix5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(diagonalSumDifference(matrix5));


//Unique character
function uniqueCharacter(input){
    let uniquechar="";
    for(let i=0;i<input.length;i++){
        if(uniquechar.indexOf(input[i])===-1){
            uniquechar+=input[i];
        }
    }
    return uniquechar;
}
const input = "aabbccd";
console.log(uniqueCharacter(input));


//Word Occurences
function wordOccurences(str){
    let words = str.split(' ');
    let count={};
    for(let word of words){
        count[word]=(count[word]||0)+1;
    }
    for(let word in count){
        console.log(`${word}:${count[word]}`);
    }
}
const str = "I am Java developer I am proud of it";
wordOccurences(str); 

function charCount(str){
    let count={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(count[char]===undefined){
            count[char]=1;
        }else{
            count[char]+=1;
        }
    }
    return count;
}
let string1 ="Hello World";
console.log(charCount(string1));


//String Compression
function compressString(str){
    let compressed='';
    let count=1;
    for(let i=0;i<str.length;i++){
        if(str[i]===str[i+1]){
            count++;
        }else{
            compressed += str[i]+count;
            count=1;
        }
    }
    return compressed;
}
const Input = "aabbcdaav";
console.log(compressString(Input));


// //var compose = function(functions) {
//     return function(x) {
//         let result = x;
//         for (let i = functions.length - 1; i >= 0; i--) {
//             result = functionsi; // Apply the function to result
//         }
//         return result;
//     };
// };

