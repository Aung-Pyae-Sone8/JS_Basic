// Map Method

let numbers = [1,2,3,4,5];

numbers = numbers.map((num)=> {
    return num + 100;
})

console.log(numbers);

let names = ['John', "Chris", "Mg Mg"];

names = names.map((name)=> {
    return "Mrs" + name;
})

console.log(names);