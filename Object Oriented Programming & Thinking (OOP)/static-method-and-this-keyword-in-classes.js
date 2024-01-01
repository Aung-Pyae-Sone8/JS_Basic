// static method 

class Calculator1{
    static PI = 3.14;
    static area(r){
        return 3.14*r**2; 
    }
}

console.log(Calculator1.area(2));

// this keyword 

class Calculator2{
    PI = 3.14;
    area(r){
        return this.PI*r**2;
    }
    volume(r,h){
        return this.area(r)*h;
    }
}

let calculator2 = new Calculator2;
console.log(calculator2.area(2));
console.log(calculator2.volume(2,3));

// Cannot use "this" keyword in static method 