//Varaible : container which can hold/store some data

//var, let, const

//Syntax : Keyword variablename:data type(optional)=value
//Ex : var age:number=30
//Ex : var age=30

// var age=30;
// console.log(age);
//var vs let vs const
//----------------------

//1.Scope
//2.Declaration/Value Assignment
//3.Re-declaration
//4.Re-initialization/Re-assignment
//5.Hoisting

//var - we do not use this in modern JS/TS. Avoid var because it has function scope and can lead to unexpected
//let - use let when you need a variable that can change
//const - use const when variable should not change


//scope - accessible area(Functional scope and block scope)
//Example2 1:var (function scope)
function varScope() {
    if (true) {{
        var msg="Hello word";
        console.log(msg);
        
    }
    console.log(msg);
        
    }    
    console.log(msg);
}

varScope();
//Example 2: let and const
function blockScope() {
    if (true) {
        let msg="hello world"
        const greet="hello const"
        console.log(msg);
        console.log(greet);
        
        
    }
    //  console.log(msg); // cannot access
    //     console.log(greet);// cannot access
    
}

blockScope();

//Example3 :

function scopeDiff(){
    if (true) {
       var num1=10;
       let num2=20;
       let num3=30;
       console.log(num1);
       console.log(num2);
       console.log(num3);        
    }
    console.log(num1);// access -funcational
      // console.log(num2);// cannot access - block
     //  console.log(num3);//cannit access - block
}

scopeDiff();

//Declaration/ value assignment
//Example:1 var can be declared without initialization
// var x;// declaration
// console.log(x);//undefined
// x=30;//initialization

//Example:2 let can be declared without initialization
// let x;// declaration
// console.log(x);//undefined
// x=30;//initialization
// console.log(x);


//Example:3 const must be  initialization at the time declaration
//const z;//incorrect
const z=50;
console.log(z);


//3. Re-decalaration
//vars - allows the re-declaration
//let and const - not allows the re-decalaration(making code safer)

//Example1: var  allows the re-declaration
var city ="New York";
var city = "Los Angles"
console.log(city);

// //Example2:let - not allowed re-declaration

// let country="India";
// let country="US";

//Example3: const- not allowed re-declaration

// let planet="Earth";
// let planet="Mars";
// console.log(planet);


//4.Re-initalization/Re-assignment
//var and let - re-assignment allowed
//const - Re-assignment not allowed(Only constants allowed - cannot change the value)

//Example 1: var allows re-assignment

// var age=25;
// age=30;//allowed
// console.log(age);

//Example 2:let allows re-assignment
const age=25;
//age=30;//not allowed
console.log(age);


//5.Hoisting - var (Hoisted with undeined), let and const (Not Initialized)
// before decalring aw called 
// console.log(a);//undefined
// var a=10;
// console.log(a);


// console.log(a);//Not Initialized
// let a=10;
// console.log(a);

//console.log(a);//Not Initialized
const a=10;
console.log(a);












