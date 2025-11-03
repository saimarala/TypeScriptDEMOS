//Named function : A function that is declared with a name

/*
funcation functionName(parameter):returnType{
//block of code
}

functionName(); //calling the function/invoking the function
*/

//Example 1: Named function with no parameters and no return type
function display():void {
    console.log("Welcome to typecript");   
    
}

display()// calling function

//Example 2: Named function with parameters and return type

// function addNumbers(x:number,y:number):number{

//     return x+y;

// }

// addNumbers(10,20);

//console.log(addNumbers(10,20));
// let res:number=addNumbers(10,20);
// console.log(res);
//console.log(addNumbers(10,20,30));//Compile Error : Expected 2 arguments, but got 3
//console.log(addNumbers(10,20));//Compile Error : Expected 2 arguments, but got 1

//Example 3: Named function with Rest parameters

// function addNumbers(...nums:number[]){

//   let i;
//   let sum:number=0;

//   for( i=0;i<nums.length;i++){
//     sum+=nums[i];
//   }
//   console.log("sum of numbers",sum); 
// }
// addNumbers(1,2)
// addNumbers(1,2,3)


//Example 4 : Named functions with Rest parameters - multiple types

// function findElements(...elements:(number|string )[]):number{
//     return elements.length;
// }
// console.log(findElements(3,"pw",2,1,"ss"));
// console.log(findElements(1,2,3,4,5,6));
// console.log(findElements("dd","pw","dddd","ss"));   


//Example 5 : named functions with optional parameters

// function displayDetails(id:number,name:string,mailid?:string){

// console.log("ID:",id);
// console.log("Name:",name);
// console.log("Email:",mailid);
// }

// displayDetails(1,"ss","test@pw.com");
// displayDetails(1,"ss")

//Example 6: Named function with default parameters

function calculateDiscount(price:number, rate:number=0.5):void{
    let discount:number=price*rate;
    console.log("Discount Amount:",discount);
    

}

calculateDiscount(1000,0.30)
calculateDiscount(1000)