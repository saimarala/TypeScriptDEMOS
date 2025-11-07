class Person{

    public name:string; //public property - access anywhere
    protected age:number; // protected property - accessible within the class and its sub class
    private ssn:number; // private property - accessible only within this class

    constructor(name:string,age:number,ssn:number){
        this.name=name;
        this.age=age;
        this.ssn=ssn;
    }

  public display(){
        console.log("Name :",this.name);
        console.log("Age :",this.age);
        console.log("SSn :",this.ssn);       
    }
}

class Employee extends Person{
    private empId:number;
    constructor(name:string,age:number,ssn:number,empId:number){
        super(name,age,ssn)
        this.empId=empId;
    }

    showEmployeeDetails(){
        console.log(this.name);// public - accessible
        console.log(this.age);//protrected - accessible
       // console.log(this.ssn);//private - we cannot accessible
        console.log(this.empId);   //private still we can access since it is declared inside the same class 
        
    }
}

let emp=new Employee("PW",1111,2323232,101)

emp.display()
emp.showEmployeeDetails();

console.log(emp.name);//accessible
// console.log(emp.age);//not accessible
// console.log(emp.ssn);//not accessible