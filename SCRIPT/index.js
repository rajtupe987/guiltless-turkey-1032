
document.querySelector("#getname").textContent = localStorage.getItem("fname")

document.querySelector("#fom").addEventListener("submit",function(){

    Swal.fire(
        "Email has been Sent to your email account",
        '',
        'success'
      )
})
