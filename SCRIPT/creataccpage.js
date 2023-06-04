
let signupbtn = document.querySelector("#create");
let signUp = document.querySelector("#signup");

let users = JSON.parse(localStorage.getItem("userData")) || [];

signUp.addEventListener("submit", function (event) {
    event.preventDefault();

    let count = 0;
    users.forEach(function (el) {

        if (el.email === document.querySelector("#email").value) {
            count++;
        }
    });


    if (count > 0) {
        alert("User already resistered")
    } else {


        if (document.querySelector("#pass").value != document.querySelector("#repass").value) {
            alert("Password do not matched")
        } else {
                 let fname=document.querySelector("#fname").value;
                 let lname=document.querySelector("#lname").value;
                 let email=document.querySelector("#email").value;
                 let cemail=document.querySelector("#cemail").value;
                 let phone=document.querySelector("#phone").value;
                 let password=document.querySelector("#pass").value;
                 let repass=document.querySelector("#repass").value;
            let user = {
                fname,
                lname,
                email,
                cemail,
                phone,
                password,
                repass
            };
            users.push(user);

            localStorage.setItem("userData", JSON.stringify(users));
            localStorage.setItem('fname', fname);
         
            alert("Sign Up Succesfull");


            signUp.reset();
        }
    }
})



document.querySelector("form", function (event) {

    event.preventDefault();

    let fname = document.querySelector("#fname").value;

    let lname = document.querySelector("#lname"), value;

    let email = document.querySelector("#email").value;

    let cemail = document.querySelector("#cemail").value;

    let phone = document.querySelector("#phone").value;

    let password = document.querySelector("#pass").value;



})

