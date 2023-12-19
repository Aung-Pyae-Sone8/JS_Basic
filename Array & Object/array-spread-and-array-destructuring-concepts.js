// spread operator 
// ...

let data1 = [1,2,3];
let data2 = [4,5,6];

// let result = [1,2,3,4,5,6]

let result = [...data1, ...data2];

console.log(result);

function add(a,b) {
    console.log(a+b);
}

let nums = [1,2];

add(...nums);

// destructuring

let datas = ['Mg Mg', 20, 'TTU'];

let [name, age, school] = datas;

console.log(name, age, school);

function addition([a,b]) {
    console.log(a + b);
}

addition([1,2])