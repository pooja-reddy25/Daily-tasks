//Two sum
function twoSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target){
                return[i,j];
            }
        }
    }
    return[];
}
let nums=[2, 7, 11, 15] 
let  target = 13
console.log(twoSum(nums, target));

//Remove duplicates from sorted array
function removeDuplicates(arr1,arr2){
    let duplicates = [];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j] && !duplicates.includes(arr1[i])){
                duplicates.push(arr1[i]);
            }
        }
    }
    return duplicates;
}
let array3 = [1, 2, 3, 4, 5];
let array4 = [3, 4, 5, 6, 7];
let result1 = removeDuplicates(array3, array4);
console.log(result1.sort()); 



//Remove Element
function removeElement(nums,val){
    let k=0;
    for(let i=0;i<nums.length;i++){
        if(nums[i]!==val){
            nums[k]=nums[i];
            k++;
        }
    }
    return k;
}
let number=[3,2,2,1];
let val=3;
let k=removeElement(number,val);
console.log("The number of elements not equal to val is:", k);
console.log("The modified array is:", number.slice(0, k));


//Search Insert Position
function searchInsertPosition(arr,target){
    let left=0;
    let right = arr.length-1;
    while(left<right){
        let mid=Math.floor(left+right/2);
        if(arr[mid]===target){
            return mid;
        } else if(arr[mid]<target){
            left=mid+1;
        }else{
            right=mid-1;
        }
    }
    return left;
}
let array = [1,4,2,3,5,6,7];
let target1 = 3;
console.log(searchInsertPosition(array,target1));

//plus one
function plusOne(digits){
    for(let i=digits.length-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            return digits;
        }
        digits[i]=0
    }
    digits.unshift(1);
    return digits;
}
let digits=[1,2,3];
console.log(plusOne(digits));

//Merged Sorted array
function mergedSortedArray(arr1,arr2){
    let mergedArray=[];
    let i=0,j=0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            mergedArray[mergedArray.length]=arr1[i];
            i++;
        }else{
            mergedArray[mergedArray.length]=arr2[j];
            j++;
        }
    }
    while(i<arr1.length){
        mergedArray[mergedArray.length]=arr1[i];
        i++;
    }
    while(j<arr2.length){
        mergedArray[mergedArray.length]=arr2[j];
        j++;
    }
    return mergedArray;
}
let array1=[1,2,3,4,5];
let array2=[6,7,8];
console.log(mergedSortedArray(array1,array2));