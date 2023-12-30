// OOP 

class Car{
    wheels = 4
    color = "black"
    drive(){
        console.log('car is driving');
    }
}

let car = new Car;
console.log(car);

let carTwo = new Car;
carTwo.color='red';
console.log(carTwo);