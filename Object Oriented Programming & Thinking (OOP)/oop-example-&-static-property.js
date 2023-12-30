// OOP Example 

class Calculator{

    plus(num1,num2){
        return num1+num2;
    }
    sub(num1,num2){
        return num1-num2;
    }
    division(num1,num2){
        return num1/num2;
    }
    multiply(num1,num2){
        return num1*num2;
    }
    remainder(num1,num2){
        return num1%num2;
    }
}

let calculator = new Calculator;
console.log(calculator.plus(1,2));

// Static Property 

class Calculate{
    static PI = 3.14;
}

console.log(Calculate.PI); // using static keyword => no need to declare with new keyword