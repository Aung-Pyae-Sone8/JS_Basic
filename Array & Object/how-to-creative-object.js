// Object

let person = {
    name : 'john',
    age : 20
}

// dot notation
console.log(person.name);

// bracket notation 
let propName = 'age';
console.log(person[propName]); // dynamically

person.name = "john doe"; // overwrite
person.hairColor = "yellow"; // create property

console.log()

let person1 = {
    name : 'Aung Pyae Sone',
    age : 22 ,
    eat : function() {
        console.log('aung lay is eating');
    } ,
    do() {
        console.log('doing');
    }
}

person1.drink = function() {
    console.log('drinking milk');
}

console.log(person1);
person1.eat();
person1.do();
person1.drink();