// Anonymous Function (Unnamed Function/Nameless Function)

/*
 An anonymous function is a function does not have a name.
 Instead, it is assigned to a variable, which act a name

 Syntax
 let variable = function(parameters){
 //function body
 }

 variable(); calling the function
*/

// let msg = function (): string {
//     return "Hello Typescript";
// }

// console.log(msg();

//Example 2: Anonymous Function with the parameters

let multiply=function(a:number,b:number):number{
    return a*b;
}
console.log(multiply(10,20));
