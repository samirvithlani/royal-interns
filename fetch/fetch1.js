//fetch ajax
//API -->application programming interface json

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
getData();
