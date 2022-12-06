var users = [
    {
        name:"ajay",
        age:25,
        isMarried:false,
        gender:"Male"
    },
    {
        name:"jaya",
        age:27,
        isMarried:true,
        gender:"Female"
    },
    {
        name:"raj",
        age:45,
        isMarried:true,
        gender:"Male"
    }
]

///
// for(var i=0;i<users.length;i++){

//     var u = users[i]
// }

// users = users.filter((u)=>{

//     return u.gender ==="Female" && u.isMarried === false
// })




function removeData (name){

    users = users.filter((u)=>{

        return u.name !==name
    })
    return users

}

removeData("raj")

console.log(users)

