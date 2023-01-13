//Exception handling ERROR
//try catch block,finally block

age = 20;
try{
    if(age<18){
        //throw "Not eligible";
        throw new Error("Not eligible");
    }
    else{
        console.log("Eligible");
    }
}
catch(err){
    console.error(err.message);
    //console.error(err);
}
finally{
    console.log("Finally block");
}