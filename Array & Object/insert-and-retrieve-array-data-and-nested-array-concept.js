let mix = ["dog", 20, 1.3, true];

let boo = mix[3];

mix[4] = "Aung Pyae Sone";
mix[3] = false;

console.log(mix);

let fruits = ['apple', 'orange'];

fruits[2] = "mango";

console.log(fruits);

// Nested Array

let arr = [
    ['a', 'b', 'c'],
    [1,2,3]
];

arr[0][3] = "d";

console.log(arr);
console.log(arr[0][2]);