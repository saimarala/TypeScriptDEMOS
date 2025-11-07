//Inheritance
//A class can reuse the properties and methods of another class
//Inheritance is a mechanism where one class (child) can inherit the properties and methods of another class(paarent)
//Inheritance allows you to reuse the functionality of an existing class without rewriting

//A....properties + methods(parent class/ BAse class/ Super class)
//B extends A....properties + methods(child class/ sub class /derived class)

//Method ov1eriding
//A sub class can provide a specific implementation of a method that is already defined in the super class
//The method must have the same name, return type and parameters.

class Car {

    name:string;
    color:string;
    model:string;

    constructor(name:string,color:string,model:string){
        this.name=name;
        this.color=color;
        this.model=model;
    }
//Method overiding
    start(){
      console.log("Car Started...");      
    }

    stop(){
        console.log("Car Stopped...");        
    }

    displayInfo(){
        console.log(`Name: ${this.name}, color ${this.color},Model:${this.model}`);     
    }
}

class Honda extends Car{

    year: number;

    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model)
        this.year=year;
    }

    start(){
        console.log("Honda started...");      
    }
    yom(){
        console.log(`Name: ${this.name}, color ${this.color}, Model:${this.model}, yom:${this.year}`);      
    }
}

//chil class

class Maruthi extends Car{

    year: number;

    constructor(name:string,color:string,model:string,year:number){
        super(name,color,model)
        this.year=year;
    }

    start(){
        console.log("Maruthi started...");      
    }
    yom(){
        console.log(`Name: ${this.name}, color ${this.color}, Model:${this.model}, yom:${this.year}`);      
    }
}


//Using

let honda=new Honda("Honda","Red","Honda city",2025);
console.log(honda.name);
console.log(honda.color);
console.log(honda.model);
console.log(honda.year);

honda.start()//Honda started... called child class method(overided)
honda.displayInfo()//Name: Honda, color Red,Model:Honda city  partent class
honda.stop();//Car Stopped... parent class
honda.yom();//Name: Honda, color Red, Model:Honda city, yom:2025 child class


//create maruthi object

let maruthi=new Honda("Maruthi","Blue","Suzuki",2025);

maruthi.start();//Honda started...
maruthi.stop();//Car Stopped...
maruthi.displayInfo();//Name: Maruthi, color Blue,Model:Suzuki
maruthi.yom();//Name: Maruthi, color Blue, Model:Suzuki, yom:2025

//
let car:Car=new Honda("Honda","Red","Honda city",2025)
car.displayInfo()
car.start();
//car.yom();// Not accesible defined inside the child class but not there in parent