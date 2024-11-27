let fullname = "Pooja Reddy";
let cleanedFullname = fullname.replace(/\s+/g, '');
let userName = "@".concat(cleanedFullname.toLowerCase(),cleanedFullname.length);
console.log(userName);
//\s+/g => \s matches any whitespace character, + is a quantifier which means "one or more" white spaces, /g global match => find all matches not just one
// In VS code readline module is used to prompt the user input and then processes it similarly to you original code.

let str = "Hello World"
let strWithoutSpaces = str.replace(/\s+/g, '');
console.log(strWithoutSpaces);
console.log(strWithoutSpaces.length);
console.log(strWithoutSpaces[5]);

let obj = {item:"Pen",price:20};
console.log("The cost of " + obj.item + " is " + obj.price);
let result = `The cost of ${obj.item} is ${obj.price}`;
console.log(result);

let string = `'This is "String" concept practice'`;
console.log(string);

let string2 = "This is \"Strings\" concepts";
console.log(string2);
let text= 'It\'s alright.';
console.log(text);

let string3 ="Hello\nWorld";
console.log(string3);