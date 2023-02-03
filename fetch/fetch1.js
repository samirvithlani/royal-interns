//fetch ajax
//API -->application programming interface json

async function deleteData (){

  var res =  await  fetch("https://reqres.in/api/users/2",{
    method:"DELETE",
  })

  console.log(res);
  var status = await res.status;
  console.log(status);
  
  

}
deleteData();


async function postData() {
  var res = await fetch("https://reqres.in/api/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "samir",
      job: "kai nai....",
    })
  });
  var data = await res.json();
  console.log(data);
}

//postData();

function getData() {
  var userdata;
  fetch("https://reqres.in/api/users?page=25", {
    method: "GET",
  })
    .then((res) => {
      res
        .json()
        .then((data) => {
          userdata = data; //not possible
        })
        .catch((err) => {
          console.error(err);
        });
    })
    .catch((err) => {
      console.error(err);
    });

  console.log("userdata", userdata);
}
//getData();
