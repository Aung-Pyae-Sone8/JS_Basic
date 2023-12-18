console.log("------------------------------------------");
console.log("--------Arrow Function-----------");

// if only one line, no need bracket, no need retrun keyword
// and if only one parameter, no need bracket

let sayHello = word => word;
console.log(sayHello("hello"));

let twicee = (num) => {
    return num * 2;
}
console.log(twicee(5));