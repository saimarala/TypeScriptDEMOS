//*****forEach() map(), filter(), reduce(), some(), every()******** */

//1.forEach() - Executes a function once for each element
//It takes function as a parameter
//syntax : array.forEach(function(currentValue,index,array()){})

//currentValue - The current element being processed in the array
//index(optional) - The index of the current element being processed in the array
//array(optional) - The array the current element belongs to.

//Ex1 : Get the index of all the fruits along with value
let fruits:string[] =["apple","banana","orange","mango","kiwi"];

console.log("Printing the fruits along with the index using for loop");
for(let i in fruits){
    console.log(i,fruits[i]);
    
}

console.log("Printing the fruits along with the index using for..each method");

fruits.forEach(function(element,index){
   // console.log(index,element);
   console.log(`${index}`,`${element}`);
   
    
})

//using arrow
fruits.forEach((element,i)=>{
     console.log(`${i}`,`${element}`);
})

//Ex2:

fruits.forEach((element)=>{
     console.log(`${element.toUpperCase()}`);
})

//2.map() - creates a new array with the result of calling the function on every element of an array
//It takes function as a parameter
//Returns the same number of elements that we have in origional array

//syntax : array.map(function(currentValue,index,array){})

//Ex1 : Get square of all the numbers in the array. Ex[1,2,3]then result should be [1,4,9]

let numbers:number[]=[1,2,3,4,5]
let squaredNumbers=numbers.map((element)=>{
     return (element* element);
})

console.log("Squared numbers : ",squaredNumbers);
console.log("Origional array : ",numbers);

//EX 2: Doble each number[1,2,3,4,5]--->[2,4,6,8,10]
// let doubledNumbers=numbers.map((element)=>{
//  return (element *2);
// })

let doubledNumbers=numbers.map((element)=>element*2);//If you have single return statment inside the arrow function then {} and 'retutn'
console.log(doubledNumbers);

//3. filter() - creates a new array with all the elements that pass/satisfy the function
//It takes function as a parameter
//Returns the same or fewer number of elements  compared to origional array
//syntax : array.map(function(currentValue,index,array){})

// let evenNumbers=numbers.filter((num)=>{
//     return(num%2==0) ;
// })
let evenNumbers=numbers.filter((num)=>num%2==0)
let oddNumbers=numbers.filter((num)=>num%2!=0)

console.log("even numbers",evenNumbers);
console.log("odd numbers",oddNumbers);

let filteredNumbers=numbers.filter((num)=>num>3)

console.log("Numbers > 3",filteredNumbers);

//4. reduce() - Applies a function on every element of an array and returns a single value
//syntax:array.reduce(function(accumulator,currentValue,index,array){})

// accumulator - The accumulated value from previous iteration
//current value - The current element being processed

//Ex1: Get the total (sum) all the elements in an array

// let total=0;
// for (let i = 0; i < numbers.length; i++) {
//      total+=numbers[i]  // 1 2 3 6 10   
// }
//console.log("Sum of all the numbers : ",total);//15

//using reduce method

// let reduceResults=numbers.reduce((total,element)=>{
//      return(total+element);
// })

// let reduceResults=numbers.reduce((total,element)=>{
//      return(total+element);
// },0)//here 0 is default value of accumulator


let reduceResults=numbers.reduce((total,element)=>(total+element),0)
console.log("Sum of all the numbers : ",reduceResults);


//5. some() - checks if any element staifies an condition
//Returns true if at least one element passes the condition, else false
//syntax:array.some(function(currentValue,index,array){})

//Ex 1; Check array contains  negative values

let hasNegative:boolean=numbers.some((num)=>num<0);
console.log("Does array conatins negative  ?",hasNegative);
//Ex 1; Check array contains  positive values
let posNegative:boolean=numbers.some((num)=>num>0);
console.log("Does array conatins postive  ?",posNegative);

//6. every() - Checks if all the elements satisfy the condition
//Returns true if all the  element passes the condition, else false
//syntax:array.every(function(currentValue,index,array){})

//Ex1:
let allEven=numbers.every((element)=>element%2==0);

console.log("All are even numbers?",allEven);
//Ex2 .

let allGreateThaneOne=numbers.every((element)=>element>=1);
console.log(allGreateThaneOne);




