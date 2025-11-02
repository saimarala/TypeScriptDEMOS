


let age: number = 20
// if(age>=18){
//     console.log("You are eligible for vote");

// }

//if else condition
// if(condition){
//     statment;
// }else{
//    statment
// }

//Example 2: even or odd

let num: number = 10;
if (num % 2 == 0) {
    console.log(`${num} even number`);

} else {
    console.log(`${num} odd number`);

}

//Nested if else
/*
    if(condition 1){
    statment;
    }else if(condition 2){
    statments;
    }

    */

//EXample 3:

let marks: number = 95;

if (marks >= 90 && marks <= 100) {
    console.log("Grade A");


} else if (marks >= 75 && marks <= 90) {
    console.log("Grade B");
} else if (marks >= 60 && marks <= 75) {
    console.log("Grade C");
} else {
    console.log("Grade D");
}
//Example 4: Browser selection

let browser:string="chrome"
if (browser==="chrome") {
    console.log("Browser is chrome");
    
    
} else if (browser==="firefox") {
    console.log("Browser is firefox");
}else if (browser==="safari") {
    console.log("Browser is safari");
}else{
    console.log("Other browser");
    
}

//switch case statment
/*

switch(expression)
{
case value1: statments;
             break;
case value2: statments;
             break;     
case value3: statments;
             break;               
default: statments;

}
*/

//Example 5:
let day:number=3;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;    
    case 4:
        console.log("Thrusday");
        break;    
    case 5:
        console.log("Friday");
        break;  
    case 6:
        console.log("Saturday");
        break; 
    case 7:
        console.log("Sunday");
        break;  
    default: 
    console.log("Invalid week");
        
}
    //Example 6: The switch statment can also include an expresion
    let x:number=10,y:number=5;
    switch(x-y)//expression
    {
        case 0:
            console.log("Result zero");
            break;
        case 5:
            console.log("Result is Five");
            break;
        case 10:
            console.log("Result is 10");
            break;   
        default: console.log("Result is something else");
             
                
            
    }
