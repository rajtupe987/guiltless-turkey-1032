
document.querySelector("button").addEventListener("click", function () {


    let otp = document.querySelector("#otp").value;

    if (otp == "1234") {

        Swal.fire(
            "Payment Successful",
            '',
            'success'
          )
    } else {   
        Swal.fire(
            "incorrect OTP",
            '',
            'warning'
          )
    }
})