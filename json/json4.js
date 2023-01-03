var data = ["java","python","c++","node","ds","react"]
console.log(data)
data.splice(2,3,"c")
console.log(data)
console.log(data.includes("c"))

var data1 = [
    {
        "name":"java",
        "price":1000

    },
    {
        "name":"priii",
        "price":1000

    },
    {
        "name":"python",
        "price":450
        
    },
    {
        "name":"ds",
        "price":2500
        
    },
    {
        "name":"java",
        "price":1500  

    },
]

console.log(data1)
//data1.splice(0,0,{"name":"c",price:500})
//data1.splice(0,2,{"name":"c",price:500})

//data1 = [...data1,{"name":"c",price:500},{"name":"c++",price:500}]

console.log(data1)
//spred operator

console.log(data1.includes({"name":"java",price:1000}))

//console.log(data1.name.includes("java"))
//console.log(data1.includes({name:"java"}))
//console.log(data1.name.includes("java"))

//java
///filter will return an array 
//find will return an object
///filter
var x = data1.find((d)=>{
    
    return d.name.startsWith("p")
})
console.log(x)
var x1 = data1.every((d)=>{
    
    return d.name.startsWith("p")
})
// var x1 = data1.some((d)=>{
    
//     return d.name.startsWith("p")
// })

var x2 = data1.findIndex((d)=>{

    return d.name.startsWith("z")
})
console.log(x2)
//index of with map
var x3 = data1.map((d)=>{
    return d.name
}).indexOf("java")

console.log(x3)







