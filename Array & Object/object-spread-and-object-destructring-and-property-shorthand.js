// array spread 

let obj1 = {
    myName : 'aung pyae sone' ,
    myAge : 22
}

let obj2 = {
    myHairColor : 'black'
}

let obj3 = {...obj1, ...obj2}

console.log(obj3);

// object destructuring 

let {name1, age1} = {
    name1 : 'aung pyae sone',
    age1 : 22
}

console.log(name1);
console.log(age1);

// property shorthand 

let name2 = "su sandi soe";
let age2 = 22;

let person4 = {
    name2,
    age2 
}


console.log(name2);
console.log(age2);
