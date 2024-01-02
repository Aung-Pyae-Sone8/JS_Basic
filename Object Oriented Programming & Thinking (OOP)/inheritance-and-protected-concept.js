// inheritance

class Animal{
    // Name = ''
    age = 1;
    constructor(name){
        this.Name = name;
    }

    run(){
        console.log(`${this.Name} is running`)
    }
}

// let dog = new Animal('dog');
// console.log(dog);
// dog.run();

class Dog extends Animal{
    bark(){
        console.log(this.Name + ' woof woof')
    }
}

let dog = new Dog("Aung Nak");

dog.bark()

// public => access anywhere 
// private => access only in own class
// protected => access only in own class and child class 