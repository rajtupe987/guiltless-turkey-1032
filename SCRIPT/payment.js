document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault();
 
 
    let fname=document.querySelector("#name").value;
    let lname=document.querySelector("#lname").value;
    let add=document.querySelector("#address").value;
    let number=document.querySelector("#cardNo").value;
    let cvv=document.querySelector("#cardCvv").value
 
    if(fname=="" || number=="" ||cvv=="" || lname==""|| add==""){
     alert("Any of the Given fields are empty")
    }else{
     window.location.href = "OTPpage.html"
    }
   
 })