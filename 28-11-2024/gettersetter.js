//getters
const person = {
    firstName : "Venkat",
    lastName : "Reddy",
    get fullName(){
        return this.firstName+" "+this.lastName;
    }
};
console.log(person.fullName);

//setters
const person1 = {
    firstName:"Sunanda",
    lastName:"Reddy",
    set fullName(name){
        const nameParts = name.split(" ");
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
};
person1.fullName = "Rohit Reddy";
console.log(person1.firstName);
console.log(person1.lastName);

//getter and setter together
const person2 = {
    _firstName : "Rohit",
    _lastName : "Reddy",
    get fullName(){
        return this._firstName+" "+this._lastName;
    },
    set fullName(name){
        const nameParts1 = name.split(" ");
        this._firstName = nameParts1[0];
        this._lastName = nameParts1[1];
    }
};
person2.fullName = "Sunanda Reddy";
console.log(person2.fullName);

//usecases
const person3 = {
    _age:0,
    get age(){
        return this._age;
        },
        set age(value){
            if(value<0){
                console.log("Age cannot be negative");
            } else{
                this._age = value;
            }
        }
};
person3.age = -5;
person3.age = 30;
console.log(person3.age);