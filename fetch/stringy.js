var data = {
    name:"samir",
    age:20
}

var strjson = JSON.stringify(data)
console.log(typeof (strjson))
console.log(strjson[1])

var parsedData = JSON.parse(strjson)
console.log(typeof (parsedData))
console.log(parsedData.name)