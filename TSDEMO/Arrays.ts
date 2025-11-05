/*

Arrays in typescript
--------------------------
- An array is a special type of varaible that stores multiple values.
-The values can be same data type or different data types.
-Arrays are declaring using '[]'  or gerneric Array<T> type.
-Indexing starts from 0.
-Arrays are an ordered collection of elements.
*/


//Approach 1 : using leteral

//let names:string[]=[];//Declaration

//initialization/assigning values
// names[0]="John";
// names[1]="smith";
// names[2]="Peter"
// names[3]="Scott"


// let names:string[]=["John","smith","Peter","Scoot"]// declaration + initialization

// console.log(names);


//Approach 2 :Using generic Array<T> type

let empnames:Array<string>=["John","smith","peter","scott"];

 let empIds:Array<number>=[101,102,103.104];

 let data:Array<string|number>=["Jhon",101,"smith",102,"Peter","scott"];

// let mixedData:Array<any>=[1,"Jhon",true,null];


// console.log(empnames);
// console.log(empnames[1]);

//Example 1:Iterating over an array using a traditional for loop
console.log("Employee Names.........");

for (let i = 0; i < empnames.length; i++) {//i<=empnames.length-1
    const element = empnames [i]; // representing the index 
    console.log(element);
     
}

//Example 2 : Iterating using the 'for....in' loop (indexes)
console.log("Employee data.........");
for(const element in data){
    console.log(data[element]);
    console.log(element);
    
    
}

//Example 3 : Iterating using the 'for....of' loop (values)
console.log("Employee Ids.........");

for (const element of empIds) {

    console.log(element);  
    
}


//Example 4 Passing an array to the function

// search an element in a array using function
 let search=(ele:number,arr:number[]):boolean=>{
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===ele) {{
            return true;//Element found
        }
            
        }
        
    }
return false;
 }

 let arr:number[]=[10,20,30,40,50];
console.log( search(30,arr));
console.log( search(300,arr));


//Example 5 : A function takes an array and retirn array

let capitalizeWord=(arr:string[]):string[]=>{
    let result:string[]=[];
//   for (let i = 0; i < arr.length; i++) {
//     result[i]=arr[i].toUpperCase();
    
//   }

// for(let i in arr){
//     result[i]=arr[i].toUpperCase()
// }

for (let item of arr) {
    result.push(item.toUpperCase());
}

  return result;

}

let words:string[]=["hello","world","Typescript"]
console.log(capitalizeWord(words));
