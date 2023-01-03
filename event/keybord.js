function keyCheck(event){

    // console.log("keyCheck");
    console.log(event.which);
    console.log(event);
    var x = document.getElementById("name").value
    console.log(x);
    document.getElementById("pname").innerHTML = x;

}