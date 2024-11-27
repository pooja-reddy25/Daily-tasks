// length
let str = "Hello, World";
console.log(str.length);

let str1="Hello, World";
let length = 0;
for(let char of str1){
    length++;
}
console.log(length);

//charAt
let str2 = "Hello, World";
console.log(str.charAt(7));

let str3 = "Hello, World";
let index = 7;
console.log(str[index]);

//charCodeAt = will return the ascii value
let str4 = "Hello, World";
console.log(str.charCodeAt(7));

//slice (start,end) with non inclusive end => extract a part of the string
let str5 = "Hello, World";
let modifiedStr5 = str5.replace(/\s+/g,'');
console.log(modifiedStr5.slice(4,));

let str6 = "Hello, World";
let start = 7,end=12,result="";
for(let i=start;i<end;i++){
    result += str[i];
}
console.log(result);

//substring = same as slice but here the start and end values less than zero is considered as zero itself
let str7 = "Hello, World";
console.log(str7.substring(3,7));

let str8 = "Hello, World";
let start1 = 7,end1=12;
if(start>end) [start,end]=[end,start];
let result1="";
for(let i=start;i<end;i++){
    result1+=str8[i];
}
console.log(result1);

//substr => similar to slice but the difference is the second parameter specifies the length
let str9 = "Pooja, Reddy";
console.log(str9.substr(7,5));

let str10 = "Rohit, Reddy";
let start2=7,length1=5,result2="";
for(let i=start2;i<start2+length1;i++){
    result2+=str10[i];
}
console.log(result2);

//toUpperCase()
let string = "pooja reddy";
let string1="ROHIT REDDY";
console.log(string.toUpperCase());
console.log(string1.toLowerCase());

//concat
let fname = "Pooja";
let lname = " Reddy";
console.log(fname.concat(lname));

let first = "Sunanda";
let last = " Venkat";
let final = first;
for(let char of last){
    final += char;
}
console.log(final);

//trim = remove white spaces
let string4="  Pooja  ";
console.log(string4.trim());

//padStart and padEnd which will pad the current string with another string so that the resulting string reaches a given length
//padStart(4,"0")
//repeat,replace,replaceAll

let string5 = "abcdef";
console.log(string5.substring(-3));