//object - object contains properties and behaviour.
//object contains variables & methods
//object is collection of key and value pairs

//employee ... name, desig, sal, dep
               //bonus getempdetails(), setDetails()

               
//student - name, sid , grade
             //getDetails() setDetaails()               

//Different ways to create an object in JS/TS
//1.using 'object' type - Directly define the values for variables(JS/TS)
//2.Inline Type Object - we also define the datatype of the keys(TS)
//3.using type aliases(JS/TS)
//4.using the classes(JS ES16/TS)


//1.using 'object' type - Directly define the values for variables(JS/TS)
//The TypeScript 'Object' type represents all values that are not in primitive types


// let employee:Object={
//     name:"John",age:30,salary:5000,job:"Engineer"
// }

let employee={
    name:"John",age:30,salary:5000,job:"Engineer",

    getDetails:function(){
     // console.log(this.name,this.age,this.salary,this.job);
      return `${this.name} is a ${this.job} earning ${this.salary} `;
    }
}

console.log(typeof employee);//object
//accessing object - approach 1(using . notation)
console.log(employee.name,employee.job);
console.log(employee.getDetails());
//accessing object - approach 2(using bracket notation)

console.log(employee["name"],employee["getDetails"]());

//modify the value
employee.job="Manager";
//employee["job"]="Manager"
console.log(employee.job);

//*************************************************** */
//2.Inline Type Object - we also define the datatype of the keys(TS)

let student:{
    name:string,
    age:number,
    grade:string,
    getSummary:()=>string
}={
    name:"John",
    age:15,
    grade:"A",
    getSummary:function(){
        return `${this.name} is ${this.age} years old and grade is ${this.grade}`
    }
}

console.log(student.getSummary());

//3.using type aliases(JS/TS): allows creating a new name for an existing type

//Example1:
type product={
    name:string,
    price:number,
    getInfo:()=>string

}

let book1:product={
    name:"TypeScript",
    price:300,
    getInfo:function(){
  return `${this.name} cost ${this.price}`
    }
}

let book2:product={
    name:"JavScript",
    price:500,
    getInfo:function(){
  return `${this.name} cost ${this.price}`
    }
}
 
console.log(book1.getInfo());
console.log(book2.getInfo());

for(let i in book1){
    console.log(book1.name);
    console.log(book1.price);
    
}

//Example 2: Intersection Types

type personal={
    name:string,
    age:number
};

type contact={
    email:string,
    phone:number
}

type candidate=personal & contact&{
   getContactInfo:()=>string;
}

let cand:candidate={
    name:"PW",
    age:15,
    email:"test@123.com",
    phone:1233,
    getContactInfo: function(){
        return `${this.name} can be contacted at ${this.email} or ${this.phone}`;
    }

}
console.log(cand.getContactInfo());


//************************************ */
//4. Using the classes (JS ES16/TS)
class Person{
    ssn:string;
    firstname:string;
    lastname:string;

    constructor(ssn:string,firstname:string,lastname:string){
        this.ssn=ssn;
        this.firstname=firstname
        this.lastname=lastname

    }

    getFullName():string{
        return `${this.firstname} ${this.lastname} `;
    }

    getDetails():string{
        return `SSN : ${this.ssn}, Name : ${this.getFullName()}`
    }

}

//object creation
let p=new Person("111","automation","pw");
console.log(p.firstname);
console.log(p.getDetails());
let p2=new Person("222","play","TS");
console.log(p2.firstname);
console.log(p2.getDetails());

