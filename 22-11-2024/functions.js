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

function length(string){
    return string.length;
    }
console.log(length('sun'));

function toCase(string){
    return string.toLowerCase()+'-'+string.toUpperCase();
    }
console.log(toCase('Mthatha'));

function shortcut(str1,str2){
    return str1.charAt(0) + str2.charAt(0);
    }
let result = shortcut('Amnesty','International');
console.log(result);
    