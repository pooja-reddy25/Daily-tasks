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