function checkAjax (){


     var xhr = new XMLHttpRequest();
     xhr.open("GET","https://reqres.in/api/users?page=2",true);
     xhr.send();
     xhr.onloadstart = function(){
        console.log("request started");
        console.log("state...",this.readyState);
    }
    
    xhr.onprogress = function(){
        console.log("request in progress");
        console.log("state progress",this.readyState);
    }
     xhr.onload = function(){
            var obj = JSON.parse(this.responseText);
            console.log("onload",this.readyState);
            //console.log(obj,this.readyState);
        }
        
        xhr.onloadend = function(){
            console.log("request ended");
            console.log("state,",this.readyState);
        }
        


        
        // xhr.onreadystatechange = function(){
        
        //     if(this.readyState==1){
        //         console.log("connection established");
        //     }
        //     else if(this.readyState==2){
        //         console.log("request received");
        //     }
        //     else if(this.readyState==3){
        //         console.log("processing request");
        //     }
        //     else if(this.readyState==4){
        //         console.log("request finished and response is ready");
        //     }
        // }

    //  xhr.onload = function(){
            
    //             var obj = JSON.parse(this.responseText);
    //             console.log(obj);
    //     }




    //onreadystatechange is an event handler
    //stages of ajax
    //1. create object
    //2. open connection
    //3. send request
    //4. get response
    //5. display response
    
}
checkAjax();