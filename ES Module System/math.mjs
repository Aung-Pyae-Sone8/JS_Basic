const PI = 3.14;

function add(a, b){
    return a + b;
}

function sub(a, b){
    return a - b;
}

//export default add; // default keyword is needed when export a single object
export {add, sub, PI};