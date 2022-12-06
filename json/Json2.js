var languages = ["C#", "Java", "JavaScript", "PHP", "Python", "Ruby"];

//languages.push("C++");

console.log(languages);
//console.log("removing....",languages.pop())
console.log(languages);

//languages.shift();
//languages.unshift("C");
//inserting at a specific index
//languages.splice(2,3,"node","react","angular");
var x = languages.every((lang)=>{

    return lang !== "Java"
})
console.log(x);
console.log(languages);


// languages = languages.map((lang)=>{
    
    
// })



var filteredData = languages.filter((lang)=>{

    return lang.length>4
})


for(var i=0;i<languages.length;i++){

    if(languages[i].length>4){
        filteredData.push(languages[i])
    }

}

console.log(filteredData)

// languages.forEach((lang)=>{
//     console.log(lang);
// })

// for(var i=0;i<languages.length;i++){
//     console.log(languages[i]);
// }


