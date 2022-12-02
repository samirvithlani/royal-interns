//descion making statements   --> if() { <-->} else {<-->}
//switch() {<-->} case <-->: break; default: break;
//loops --> for() {<-->} while() {<-->} do {<-->} while();


var age = "21";

if(age == 18){
    console.log("you are eligible to vote");
    if(age>=21){
        console.log("you are eligible to marrige");
    }
    else{
        console.log("you are not eligible to marrige");
    }
}
else{
    console.log("you are not eligible to vote");
    if(age>=12){
        console.log("you are eligible to study");
    }
}

///////////////////////////////////////////////////////////////
21

//no % 2 ==00  &&  no > 50
    //f         -      f
    ///t       t        t
    ///t      f        f

//no % 2 ==00  ||  no > 50

// f      t      t
// t     -      t
// f     f      t
