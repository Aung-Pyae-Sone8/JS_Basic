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