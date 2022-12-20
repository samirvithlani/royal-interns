var data = [100,200,300,452,152]
var sum=0



data.map((d)=>{
    return sum  = sum + d
})

console.log(sum)


var users = [
    {
        name: "John",
        age: 25,
        marks:[100,200,300]
    },
    {
        name: "Peter",
        age: 30,
        marks:[105,236,20]
    },
    {
        name: "Mark",
        age: 28,
        marks:[90,95,63,500]
    }
]
var agesum = 0
// for(let i =0;i<users.length;i++){
//     agesum = agesum + users[i].age
// }
var max = 0
var uName = ""

users.map((d)=>{
    //jhon
    //peter

    agesum = 0

    //jhon.marks.map
    //100
    //200
    //peter.marks.map
    d.marks.map((m)=>{
        // 0 = 0 + 100 age sum = 100
        // 100 = 100 + 200 age sum = 300
        // 300 = 300 + 300 age sum = 600
        //0 = 0 + 105 age sum = 105
        //105 = 105 + 236 age sum = 341
        //341 = 341 + 20 age sum = 361
        agesum = agesum + m
        //100 200 300 user 1
        
    })
    // 0 < 600 TRUE
    // 600 < 361 FALSE
    if(max<agesum){

        // max = 600
        max = agesum
        // uName = jhon
        uName = d.name

    }

    console.log("age sum ===>",agesum)


})
console.log("max age sum ===>",max)
console.log("max age sum ===>",uName)



