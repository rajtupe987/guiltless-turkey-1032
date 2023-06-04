let signinbtn=document.querySelector("signbtn");

 let signin=document.querySelector("#signin");

 let users=JSON.parse(localStorage.getItem("userData"))||[];


 signin.addEventListener("submit",function(event){

    event.preventDefault();

    let count=0;

    let temp;
    
    users.forEach(function(el){

       if(el.email === signin.email1.value){
        count++;

        temp=el;

        localStorage.setItem("loggeduser",JSON.stringify(el))
       }

    });

    if(count==0){
        alert("user not resistred")
    }else{
    
        if(temp.password != signin.pass1.value){
            alert("Wrong password!")
        }else{
          alert("login sucessful!");
          window.location.assign("./index.html")
        }

    }


 })