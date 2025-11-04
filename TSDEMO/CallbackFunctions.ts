// A call back  function : A function passed as an argument to another function and executed later

//Example 1: 
//Function that takes callback function as a parameter
function greet(name:string,callback:(message:string)=>void) {
    console.log(name);
    callback("Hello")//execution the callback function
    
    
}


//call back function
function showMessage(message:string){
    console.log(message);    
}

//calling the function by passing the callback function
greet("PW",showMessage)

//Example 2:
function sum(a:number,b:number,callback:(result:number)=>void){
    //  let c=a+b;
    //  callback(c);
    callback(a+b)

}

//callback function

function displayResults(result:number):void{
console.log(result);

}

sum(10,20,displayResults)