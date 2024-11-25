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