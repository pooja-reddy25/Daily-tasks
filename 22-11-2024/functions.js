// Functions

function echo(input){
    return input;
    }
    let input1 = echo('Greta');
    let input2 = echo('CO2');
    console.log(input1,input2);

function greet(parameter){
    return 'Hello '+ parameter+'!';
    }
    let name = greet('Ada');
    let name1 = greet('Grace');
    console.log(name,name1);

function log(){
    console.log('Hello Console');
}
log();


// Functions along with string methods
// LENGTH
function length(string){
    return string.length;
    }
console.log(length('sun'));

//toLowerCase and toUpperCase
function toCase(string){
    return string.toLowerCase()+'-'+string.toUpperCase();
    }
console.log(toCase('Mthatha'));

//charAt
function shortcut(str1,str2){
    return str1.charAt(0) + str2.charAt(0);
    }
let result = shortcut('Amnesty','International');
console.log(result);

//TRIM
function firstChar(string){
    string=string.trim();
    return string.charAt(0);
    }
    let string = firstChar(' Rosa Parks ');
    console.log(string);

//INDEXOF
function indexOfIgnoreCase(string1,string2){
    return string1.toLowerCase().indexOf(string2.toLowerCase());
    }
console.log(indexOfIgnoreCase('bit','it'));
console.log(indexOfIgnoreCase('bit','IT'));


function secondIndexOf(s1,s2){
    let firstIndex = s1.indexOf(s2);
    return s1.indexOf(s2,firstIndex+1);
    }
    let result1 = secondIndexOf('White Rabbit', 'it');
    console.log(result1); 

//SUBSTR
function firstWord(s){
    let firstBlank = s.indexOf(' ');
    return s.substr(0,firstBlank);
}
console.log(firstWord('see and stop'));
console.log(firstWord('speak again'));

//REPLACE AND REPLACEALL
function normalize(string){
    let result2 = string.replaceAll('-','/');
    return result2;
    }
console.log(normalize('25-4-2002'));
//or
function normalize1(date){
    let newDate = date.replace('-','/');
    newDate = newDate.replace('-','/')
    return newDate;
}
console.log(normalize1('15-1-1997'));
