/*
step1: write the signatures of functions
step2:implement the function
step3:calling the function

*/

//Example1 :

function getInfo(id:number):string;
function getInfo(name:string):string;


function getInfo(param: number|string):string 
{

    if(typeof param==="number"){
        return(`User ID is ${param}`)
    }else{
        return(`User Name is ${param}`)
    }
 
}

console.log(getInfo(10));
console.log(getInfo("PW"));

//Example 2: Different number of parameters

function add(a:number,b:number) :number;

function add(a:number,b:number,c:number) :number;

function add(a:number,b:number,c?:number):number{

    if(c!=undefined){
        return a+b+c;
    }
    return a+b;
}


console.log(add(10,20));
console.log(add(10,20,30));

//Example 3: different return types

function processInput(str:string):string;
function processInput(num:number):number;

function processInput(input:string|number):string|number{

    if(typeof input==="string"){
        return input.toUpperCase();
    }else{
        return input*2;
    }
}


console.log(processInput(10));
console.log(processInput("Playwright"));


//Example 4:
function greet(name:string):string;
function greet(age:number):string;
function greet(isMarried:string):string;


function greet(val:string|number|boolean):string{

    if (typeof val==="string") {
        return `Hello ${val}`
    }else if(typeof val==="number"){
        return `You are ${val} years old`;
    }else{
        let res:string=val?"married":"single";
        return res;
    }
}
console.log(greet("PW"));
console.log(greet(12));
console.log(greet(true));
