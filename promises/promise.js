//async --> 
///-------------------- 2 seconds value
/// ***** --> value undefine..

//syn
// ----- any how....., value-->
///*****  ---> value
//promise then, async await

///stages of promise pending, resolve, reject
//then, catch
//PRomise is class
// setTimeout(()=>{
//     console.log("2 seconds value")
// },3000)

function myPromise(){

    
    var promise = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            //resolve("value")
            reject("you are not allowed")
        },5000)
    })
    console.log("promise...",promise)

    promise.catch((err)=>{
        console.error(err)
    })
    

    promise.then((value)=>{
        console.log(value)
    })
    

}
//myPromise()

function sendData(){


    return new Promise((res,rej)=>{
        setTimeout(()=>{
            rej("value")
        },2000)
    })

}
sendData().then((value)=>{
    console.log(value)
}).catch((err)=>{
    console.error(err)
})


