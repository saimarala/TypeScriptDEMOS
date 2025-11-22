/*
1.An interface in TypeScript is a way to define the structure of an object
2.It tells the compiler what properties and types an object should have
3.It's like a blueprint for objects.

Abstract  method : we only signature of the method (there is no implementation)

interface InterfaceName{
properties 
abstract methods
}

1.Regular properties
2.Optional proparties
3.Read only properties and function types
4.Extending interface
5.Class implements interface
*/

//Example 1: Basic interface

interface Person{
    name:string;
    age:number;
}

let student :Person{
    name:"John",
    age:30
}