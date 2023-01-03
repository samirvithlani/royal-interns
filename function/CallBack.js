function demo(obj){

       console.log("demo",obj.name) 

       return obj.name.toUpperCase()
}

function demo2(){

    console.log("demo2") 

}
function demo3(){

    console.log("demo3") 

}

function test(user,cb){

    ///user = {name:"raj",age:25}
    var res = cb(user)
    console.log("res",res)
    return res

}
console.log(test({name:"raj",age:25},demo))