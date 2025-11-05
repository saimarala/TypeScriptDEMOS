/*
Tuples in typrscript
A tuple is a fixed-length array where each element has a specific type
It helps is storing multiple fileds of differnt types together
*/

//Example 1 : tuple 2 values

let person:[string,number]=["jhon",101];

console.log(person);
console.log(person[0]);
console.log(person[1]);

//Example 2 : tuple with multiple values

let user :[number,string,boolean,number,string]=[10,"pw",true,20,"ss"]

console.log(user);

//Example 3 : Iteration over a tuple using traditional for loop

for (let i = 0; i < user.length; i++) {
    console.log(user[i]); 
}

for (let i in user) {
    console.log(user[i]); 
}

for (let val of user) {
    console.log(val); 
}

//Example 6: Tuple array(Array of tuples)

let students:[number,string][]=[[101,"dd"],[102,"qqq"],[103,"dddwewe"]]

console.log(students.length);

console.log(students[0]);//[ 101, 'dd' ]
let tp=students[0]
console.log(tp[0]);



