function demo(a){

    console.log("demo",a)

}
function demo2(a){

    console.log("demo2",a)
}
function test(a,cb1,cb2){

        if(a>50){
        cb1(a)
        }else{
            cb2(a)
        }
        

}

test(10,demo,demo2)