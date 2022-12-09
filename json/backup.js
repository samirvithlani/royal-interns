var users = [
    {
        name:"ajay",
        email:"ajay@gmail.com",
        age:25,
        isMarried:false,
        gender:"Male",
        child:false,
        address :{
            city:"bangalore",
        },
        salary:456987,
        hobbies:[
            "cricket",
            "football",
        ]
    },
    {
        name:"raj",
        email:"raj@gmail.com",
        age:28,
        isMarried:true,
        gender:"Male",
        child:true,
        address :{
            city:"mumbai",
        },
        salary:15360,
        hobbies:[
            "cricket",
            "travelling",
        ]
    },
    {
        name:"jaya",
        email:"jaya@gmail.com",
        age:32,
        isMarried:true,
        gender:"feMale",
        child:false,
        
        address :{
            city:"mumbai",
        },
        salary:45800,
        hobbies:[
            "clubbing",
            "dance",
        ]
    },
    {
        name:"prathvi",
        email:"prathvi@gmail.com",
        age:29,
        isMarried:false,
        gender:"Female",
        child:false,
        
        address :{
            city:"bangalore",
        },
        salary:89625,
        hobbies:[
            "sing",
            "dance",
        ]

    }
]
var filterdUser =[]
var filterdUser1 =[]

for(let i=0;i<users.length;i++){
    if(users[i].age>25){
        filterdUser.push(users[i])
    }
}

console.log(filterdUser)

console.log("using filter method")

//filterdUser1 = users.filter((user)=> user.age>25)
//filterdUser1 = users.filter((user)=> {return user.age>25})
//filterdUser1 = users.filter((user)=>{return user.age>25 && user.isMarried === true})
//filterdUser1 = users.filter((user)=>{return user.isMarried === true && user.child === true})

// filterdUser1 = users.filter((user)=>{
//     return user.address.city ==="mumbai" && user.isMarried === true
// })

// filterdUser1 = users.filter((user)=>{

//     return user.isMarried ===true && user.child ===true && user.salary > 10000

// })

filterdUser1 = users.filter((user)=>{
    return user.hobbies.includes("cricket") && user.hobbies.includes("travelling")
})
console.log(filterdUser1);


var employee = [
    {
        name:"ajay",
        salary:25000,
        age:25,
        department:[
            "IT",
            "HR",
        ]
    },
    
    {
        name:"neha",
        salary:45000,
        age:52,
        department:[
            "DEV",
            "HR",
        ]
    },
    
    {
        name:"parth",
        salary:78000,
        age:35,
        department:[
            "HR",
        ]
    }
]
1) find employee whose salary is greater than 50000
2) find employee whose age is greater than 30
3) find employee whose department is HR