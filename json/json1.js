///
//json
//key value pair : 

var student  = 
{
    name:"jhon",
    email:"jshon@gmail.com",
    age:20,
    isActive:true,
    city:"pune",
    pincode:411001,
}
var student1  = 
{
    name:"jhon",
    email:"jshon@gmail.com",
    age:20,
    isActive:true,
    address:{
        city:"pune",
        pincode:411001,
    }
}

console.log(student.name);
console.log(student.email);
console.log(student.age);
console.log(student.isActive);
console.log(student1.address.city);
console.log(student1.address.pincode);