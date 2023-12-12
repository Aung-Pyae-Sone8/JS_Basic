function shopping() {
    console.log("go to shop");
    console.log("buy a product");
    console.log("go back home");
}
shopping("pen");

function buy(product) {
    console.log("buy a " + product);
}
buy("pen");

function add(num1,num2) {
    // console.log(num1 + num2); 
    return num1 + num2;
}
// console.log(add(1,2)); 
let result = add(1,2);
console.log(result);