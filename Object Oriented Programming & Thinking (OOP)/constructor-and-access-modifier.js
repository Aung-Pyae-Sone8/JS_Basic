// constructor 

class Car1{
    Name = '';
    constructor(name,wheels){
        this.Name = name;
        this.wheels = wheels;
        this.drive();
    }
    drive(){
        console.log(this.Name + ' is driving');
    }
    getWheel(){
        console.log(this.Name + ' has ' + this.wheels + ' wheels')
    }
}

new Car1('marcedes', 4);

let toyota = new Car1('toyata', 10);
toyota.getWheel();

// OOP (access modifier) (static, public, private, protected(not in JS))

class Car2{
    Name = 'marcedes';  // (public)
    #hp = 300;          // (# -> private)
    getHorsePower(){
        console.log('Horse Power is '+ this.#hp);
    }
}

let car2 = new Car2;
// car2.#hp = 600; (do not work beacause #hp is private)

car2.getHorsePower();
