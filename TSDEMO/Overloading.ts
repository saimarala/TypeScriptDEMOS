//Method Overloading and constructor overloading in typescript

class Calculator {
    //constructor overloading
    constructor(); //default constructor
    constructor(a: number, b: number)//parameterized constructor

    constructor(a?: number, b?: number) {
        if (a !== undefined && b !== undefined) {
            console.log("Sum : ", (a + b));

        } else {
            console.log("Default constructor called...");

        }
    }


    //Method overlaoding
    add(a:number,b:number):number;
    add(a:number,b:number,c:number):number;

    add(a:number,b:number,c?:number):number{
        if (c!=undefined) {
            return a+b+c;
        }

        return a+b;
    }

}

//usage

//constructoroverloading
let cal1 = new Calculator()
let cal2 = new Calculator(10, 20)

//method overloading

console.log(cal1.add(10,20));

console.log(cal2.add(10,20,30));

