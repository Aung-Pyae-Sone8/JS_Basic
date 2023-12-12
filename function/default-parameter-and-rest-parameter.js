// default parameter 
function sum(a, b=2) {
    console.log(a + b);
}
sum(2);

// rest parameter 
function test(a,b, ...c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
test(1,2,3,4,5,6,7);