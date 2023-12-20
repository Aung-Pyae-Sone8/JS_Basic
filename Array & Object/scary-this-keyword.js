// setTimeout() function

setTimeout(() => {
    console.log("I'm callback")
}, 3000);

// this
// 'this' keyword not working in arrow function

let person2 = {
    name : 'john',
    eat() {
        console.log(this.name + ' is eating');
    }
}

person2.eat();