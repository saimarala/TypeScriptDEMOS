let numbers:number[]=[1,2,3,4,5];
let fruits:string[]=["apple","banana","orange","mango"];

//length attrubute(Not a method)

console.log(numbers.length);
console.log(fruits.length);

//1.push() - add single/multiple elements to end of the array
//syntax : array.push(element1,....element)

numbers.push(6,7)

console.log("after push",numbers);//[ 1, 2, 3, 4, 5, 6, 7]


//2.pop() - Remove the last element from an array
//Syntax : array.pop();
let lastFruit=fruits.pop();
console.log("After pop",fruits);// [ 'apple', 'banana', 'orange' ]
console.log("Removed fruit is :",lastFruit);//mango

//3.shift() - Removes the first element from an array
//syntax : array.shift()

let firsNumber=numbers.shift();

console.log("After shift()",numbers);//[ 2, 3, 4, 5, 6, 7 ]
console.log("Removed Number : ",firsNumber);// 1

//4.unshift() - Add the single/multiple elements to  the begining of an array
//syntax : array.unshift(element1.....elemenN)

fruits.unshift("Kiwi","pear");

console.log("After unshift():",fruits);//[ 'Kiwi', 'pear', 'apple', 'banana', 'orange' ]

//5. concat() - combines two or more arrays

//syntax : array.concat(value1,....valueN)

let combinedArray= numbers.concat([8,9],[10])
console.log(combinedArray);

//6. slice() - Extracts a section of an array
//Starting Index start from zero
//Ending index will be exclusive. if 3 is ending Index it will consider 2(3-1=2)
//syntax: array.slice(start,end)

// let extractArray=fruits.slice(1,3);
// console.log("After Slice():",extractArray);// [ 'pear', 'apple' ]

let extractArray=fruits.slice(2,5);
console.log("After Slice():",extractArray);

//7. splice() - Adds/removes elements from an array(From everywhere)
//syntax : array.splice(start,deletecount,item1,'''',itemN)
console.log("current elements in fruits array",fruits);

  //Ex 1:only removing
let removedElements=fruits.splice(1,2);//here 1 is starting index, 2 is represent how many elements to be removed
console.log("After splice ",removedElements);
console.log("After splice removed elements",removedElements);//[ 'pear', 'apple' ]
   //ex 2:not removed but added
   fruits.splice(1,0,"pineapple","grapes");
   console.log("after splice add",fruits);//[ 'Kiwi', 'pineapple', 'grapes', 'banana', 'orange' ]
   //ex3:both remove and add
   fruits.splice(1,2,"mango","cherry")
   console.log("splice delete and add",fruits);//[ 'Kiwi', 'mango', 'cherry', 'banana', 'orange' ]

   //8. indexOf() - Finds the index of an element, If element not found then return -1
   //syntax : array.indexOf(searchElement)  or array.indexOf(searchElement,starting Index)

    //Ex1.
    console.log("Index of banana:",fruits.indexOf("banana"));//3
    
    //Ex 2.
    let dragonIndex=fruits.indexOf("dragon");
    console.log(dragonIndex);//-1
    //Ex 3
    console.log(fruits.indexOf("banana",2));//3

    //9. includes - checks if an element exists
    //return true or false
    //Syntax : array.includes(searchElement,from index)  
    
    let isAppleExist:boolean=fruits.includes("apple");
    console.log("Does fruit exist?",isAppleExist);//false

    //10.toString  - converts array to string
    //Syntax : array.toString()
    console.log(numbers);
    let numberString=numbers.toString();
    console.log("Converted array to string",numberString);

    let myArray:string[]=['w','e','l','c','o','m','e'];
    console.log(myArray);
    let str:string=myArray.toString();
    console.log(str);
    
    
    
    