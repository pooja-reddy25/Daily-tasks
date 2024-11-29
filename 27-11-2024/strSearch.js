//indexOf() - check for the first occurence index of a specified value in a string
// Syntax = string.indexOf(searchValue,fromIndex(optional)) 
let str = "Hello, World!";
console.log(str.indexOf("o"));
console.log(str.indexOf("o",5));
console.log(str.indexOf("z"));


let str1 = "Hello, World";
console.log(str1.lastIndexOf("o"));

//search() this will search for a match b/w a regexp and a string. Returns the first occurence from the string
//Syntax = string.search(regExp)
let text = "Please locate where 'locate' occurs!";
console.log(text.search("locate"));
console.log(text.search(/locate/));

//match() this is used to match a string against regExp
let text1 = "The rain in SPAIN stays mainly in the plain";
console.log(text1.match("ain"));
console.log(text1.match(/ain/g));
console.log(text1.match(/ain/gi));


//matchAll() return an iterator of all results matching a regex
//Iterators(special type of object) they don't directly display their contents when logged to the console
let sentence = "I love cats. Cats are very easy to love. Cats are very popular.";
let matches = sentence.matchAll(/Cats/g);
console.log([...matches]);
//or
let str2 = "Hello, hello!";
let matches1 = str2.matchAll(/hello/gi);
for(const match of matches1){
    console.log(match);
}


//includes method returns true if a string contains a specified value
let text2 = "Hello world, welcome to the universe";
console.log(text2.includes("world"));

//startsWith returns true if string begins with a specified value
let text3="Hello world, welcome to the universe.";
console.log(text3.startsWith("Hello"));
console.log(text3.startsWith("world"));
console.log(text3.startsWith("world",6));
