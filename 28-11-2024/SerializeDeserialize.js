//Serialization
const person = {
    name:"Pooja",
    age:22,
    profession:"Engineer"
};
const serializedData = JSON.stringify(person);
console.log(serializedData);

//Deserialization
const jsonString = '{"name":"Pooja","age":22,"profession":"Engineer"}';
const deserializedData = JSON.parse(jsonString); 
console.log(deserializedData);

