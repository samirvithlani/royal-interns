//replce promise with async await
//async await is syntactic sugar
//async await is built on top of promise
//async await is not a replacement of promise


async function getMovieData(){

    var response =  await fetch("https://reqres.in/api/users?page=2",{
        method:"GET"
    })
    var data = await response.json();
    console.log("data",data);
    

    

}
getMovieData();


