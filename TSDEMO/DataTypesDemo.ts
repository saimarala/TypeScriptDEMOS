/*

1.primitive data types (Built-in)
Number
String
Boolean
Null
Undefined
Any
Union Type
void

2.Non-primitive data types(Objects) 

Array
Class
Function
Interface
Tuple
*/


//1. Number Type
//Represents both integers and floating-point numbers

// let age:number=25;
// let price:number=25.5;
// let big=1123124141;


// console.log(age);
// console.log(price);
// console.log(big);

// console.log(typeof age);
// console.log(typeof(price));

//2.STRING TYPE
//Represents textual data

/* 
1.SingleQuote('');
2.DoubleQuote("")
3.Backtick(``)
*/
let firstName:string="pw";
let lastName:string='automation';


//console.log("Hello",firstName,lastName);
let greeting:string=`hello ${firstName} ${lastName}`;
console.log(greeting);

//3.BOOLEAN TYPE
//Reperesents true/false values
let isStudent:boolean=true;
let hasJob:boolean=false;
console.log("Is student?",isStudent);
console.log("has Job?",hasJob);

//4.NULL & UNDEFINED
//special types for absence of value

let emptyValue:null=null;
let notAssigned: undefined=undefined;
console.log(emptyValue);
console.log(notAssigned);

let price:number;
console.log(price);//undefined

//5.ANY TYPE
//loses TypeScript benfits

let value:any="Welcome";
console.log(typeof value);

value=100;
console.log(typeof value);

value=true;

console.log(value);
console.log(typeof value);

//6.UNION TYPE - Combine multiple types

let id:number |string |boolean;

id ="abc123";
console.log(id);

id=12345
console.log(id);

id=true;
console.log(id);

//7.VOID TYPE
//Used for functions that don't return anything

function show(){
    console.log("welcome");
    
}

show()

function sum(x:number,y:number){
    console.log(x+y);
    

}
sum(1,2)
function sumFunc(x:number,y:number){
    return(x+y);   

}

let res=sumFunc(10,20)
console.log(res);






