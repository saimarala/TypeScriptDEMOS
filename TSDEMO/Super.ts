//super() - used to invoke immediate parent class constructor
//super() - used to invoke immediate parent class method
//super() - Cannot be used to invoked the parent class property.(In java it is possible)

class Parent{
     num:number=10;
    constructor(){
        console.log("This is parent class constructor..");
        
    }

    display(){
        console.log("This display method from parrent class construtor...");
        
    }
}

class child extends Parent{
    num:number=20;//property overiding
    constructor(){
        super(); // this will call parent class constructor(must be called)
        console.log("This is child class constructor...");
        
    }

    show(){
        console.log(this.num);
       // console.log(super.num);// parents num //TS doesn't support  super.num to access parent class properties directly licke java
        
        console.log("This is child class show() method from child class");
        
    }

    //overided method
    display(){
        super.display();// This will invoke the parent class method
        console.log("This is display() method from child class...");    
        
    }
}

let c1=new child();
c1.show() // child class
c1.display() 

