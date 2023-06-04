
document.querySelector("button").addEventListener("click", function () {


    let otp = document.querySelector("#otp").value;

    if (otp == "1234") {
        alert("Payment Successful")
    } else {
        alert("incorrect OTP")
    }
})