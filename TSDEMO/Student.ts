/*
1.class
2.Read only properties
3.Optional properties
4.static variables/properties and methods
    1.static properties/methods are common/shared across all the objects
    2.static properties/methods can be accessed through class name directly
    3.static properties/methods can be modified using class
*/

class Student {
    readonly studentId: number;//Read-only property (can be assigned once , inside constructor)
    name: string; //Regular property
    email?: string;//optional property(can be undefined)
   static schoolName: string="Automation world";//static variable shared among the all the instances/objects

    constructor(sid: number, name: string, email?: string) {
        this.studentId = sid;
        this.name = name;
        this.email = email // if dyou dont pass email then it us undefined
    }

    //Method
    // displayInfo():void{
    //     console.log("Student ID : ",this.studentId);
    //     console.log("Student Nmae : ",this.name);
    //     if (this.email) {
    //         console.log("Email id :",this.email);           
    //     }else{
    //         console.log("Email is not provided");            
    //     }             
    // }

    // function() {
    //     console.log("Student ID : ", this.studentId);
    //     console.log("Student Nmae : ", this.name);
    //     if (this.email) {
    //         console.log("Email id :", this.email);
    //     } else {
    //         console.log("Email is not provided");
    //     }
    // }

  
    displayInfo = (): void => {
        console.log("Student ID :", this.studentId);
        console.log("Student Name :", this.name);
        if (this.email) {
            console.log("Email id :", this.email);
        } else {
            console.log("Email is not provided");
        }

        console.log("School name:",Student.schoolName);//access static property  using Student(class name)
        
    };

 static changeSchoolName=(newName:string):void=>{
    Student.schoolName=newName;
}
}


//Usage
let s1=new Student(101,"plawwright");
let s2=new Student(102,"TypeScript","test@gamil.com")



s1.displayInfo();
s2.displayInfo();
//Try to modify the student of s1 object.
//s1.studentId=111;//Cannot assign to 'studentId' because it is a read-only property.

//change the school name using static method
Student.changeSchoolName("Play wright");

s1.displayInfo();
s2.displayInfo();

