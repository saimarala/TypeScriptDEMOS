let a:number=10, b:number=20;

//Arthmetic operators

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(b/a);//qoutient
console.log(a%b);//remainder
console.log(5**2);

//Assignment Operators =
a=10;
b=5;
// a+=b;//a=a+b

// console.log(a);
console.log("assignment operators");

console.log(a+=b);//a=a+b
console.log(a-=b);//a=a-b
console.log(a*=b);//a=a*b
console.log(a/=b);//a=a/b
console.log(a%=b);//a=a%b

//Relational Operators
//Returns boolean - true/false
//  > < >= <= == != ===(Strict equality)
console.log("***********Relational Operators************");

console.log(a>b);
console.log(a>b);
console.log(a>=b);
console.log(a<=b);
console.log(a==b);
console.log(a!=b);
console.log(a===b);

//Difference between ==(equality)  ===(Strict equality)

console.log("****** == vs === ******");


let num1:any=10;
let num2:any="10";
console.log(num1==num2);//true(Only compare values)
console.log(num1===num2);//false(Compares the values & type)

//Logical operatos
//returns true/false (boolean)
//works between boolean variable

//b1     b2       &&         ||       !b1
//----------------------------------------
//true   true     true       true     false
//true   false    false      true
//false  true     false      true      true
//false  false    false      false

console.log("**********logical Operators*******");
let b1:boolean=true;
let b2:boolean=false;

console.log(b1&& b2);//false
console.log(b1 || b2);//true
console.log(!b1);//false
console.log(!b2);//true

//combition of logical & Relational operators
console.log("*******Mixing of logical & realtional operators***************");

console.log(20>10  && 10>5);

console.log(20>10 || 10>5);












