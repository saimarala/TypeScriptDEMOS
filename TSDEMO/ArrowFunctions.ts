// Arrow Functions/Lambd function

/* 
Lambda refers to anonymous function is programming
Lambda function are a concise mechanism to represents anonymous functions.
These functions are also called as Arrow functions.

There are 3 parts to a lambda function
1.Parameters - A function may optionally have parameters
2.The fat arrow notation/lambda notation(=>) - It is also called as a the "goes to operator"
3.Statments - represent the functions instruction set

syntax:
let varaible = (parameters)=>{
//block of code
}
*/

//Example 1: Arrow function with no parameters and no return type
//  let greet=():void=>{
//     console.log("Hello Typescript");
    
//  }

//  greet()

//Example 2: Arrow function with parameters and return type
// let add=(a:number,b:number):number=>{
//     return a+b;
// }

// console.log(add(10,20));

//Example 3: Arrow function with implicit return

// let add = (a:number,b:number):number=>a,b;
// let mulitply = (a:number,b:number):number=>a+b;

// console.log(add(10,2));
// console.log(mulitply(10,2));

//Example 4 :  Arrow function with optional parameters

// let displayDetails=(id:number,name:string,mailid?:string)=>{

// console.log("ID:",id);
// console.log("Name:",name);
// console.log("Email:",mailid);
// }

// displayDetails(1,"ss","test@pw.com");
// displayDetails(1,"ss")

//Example 5:Arrow function with default parameters

// let calculateDiscount=(price:number, rate:number=0.5):void=>{
//     let discount:number=price*rate;
//     console.log("Discount Amount:",discount);   
// }

// calculateDiscount(1000,0.30)
// calculateDiscount(1000)

//Example 6 : Arrow  functions with Rest parameters - multiple types

let findElements=(...elements:(number|string )[]):number=>{
    return elements.length;
}
console.log(findElements(3,"pw",2,1,"ss"));
console.log(findElements(1,2,3,4,5,6));
console.log(findElements("dd","pw","dddd","ss"));


