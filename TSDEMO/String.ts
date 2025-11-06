//string - text value  or a comination of characters
/*  
1.Single Quote - String Literal ('SingleQuote')
2.Double quote - string Literal ("Double quote")
3.backtick(``) - String template - when we try to use a string variable inside another string value ${variable}

index in string starts with 0
'' or "" or ``(backtick)
*/

//Declartion of strings

let str1:string='This is a string with single quote';
let str2:string="This is a string with double quote";
let str3:string="This is a string with back tick";
console.log(str1);
console.log(str2);
console.log(str3);

//when to use back tick

let num:number=10;
console.log("Number is ",num);
console.log(`Number is ${num}`);

//string methods

let str:string="Hello, Typescript!"
//1. lenght - find the lenght of the string(how many number of characters)
console.log(str.length);//18
//2.toUpperCase() and toLowerCase()
console.log(str.toUpperCase());//HELLO, TYPESCRIPT!
console.log(str.toLowerCase());//hello, typescript!

//3.charAt(index) and indexOf(string)
console.log(str.charAt(4));//o
console.log(str.indexOf("o"));//4
console.log(str.indexOf("Typescript"));//7

//4.Substring(Strating index,ending index) ending index is exclusive
console.log(str.substring(7));//Typescript!
console.log(str.substring(0,5));

//5. includes() : return true or false (boolean)
//string value is case sensitive
console.log(str.includes("Type"));//true
console.log(str.includes("type"));//false
console.log(str.includes("sai"));//false
console.log(str.includes("!"));//true

//6.startswith() and ensWith() --> return boolean value
//string value is case sensitive
console.log(str.startsWith("Hello"));//true
console.log(str.startsWith("hello"));//false
console.log(str.endsWith("t!"));//true
//7. replace
str.replace("Typescript","JavaScript");
console.log(str.replace("Typescript","JavaScript"));//Hello, JavaScript!

//8.split() - break the string into multiple parts based on the delimeter, returns an array

let words:string[]=str.split(" ");
console.log(words);//[ 'Hello,', 'Typescript!' ]

console.log(words[0]);//Hello,

console.log(str.split(" ")[1]);//Typescript!

//Ex 2: 
let myString:string="abc@gmail.com,ada";


let arr=myString.split(",")
console.log(arr[0]);
console.log(arr[1]);
//console.log(myString.split(","));//[ 'abc@gmail.com', 'ada' ]
console.log(myString.split(":"));//[ 'abc@gmail.com,ada' ]

//9. trim(), trimStart(), trimEnd()

myString="  welcome to typescript "

console.log(myString.trim());//welcome to typescript
console.log(myString.trimStart());
console.log(myString.trimEnd());

//10. concat
str1="welcome";
str2=" to typescript"
str3=" and javascript";

console.log(str1.concat(str2));//welcometo typescript
console.log(str1+str2);//welcometo typescript
console.log("welcome".concat("typescript"));

console.log(str1.concat(str2).concat(str3));

//concept of string immutability
// num=10;

let res=num+5;
console.log(res);//15
console.log(num);//10

let modifiedString=str1.concat(" to typescript");
console.log(str1);

//muiltline string

let multiLine:string=`welcome to
  typscript`;
  console.log(multiLine);
  