let allusers = JSON.parse(localStorage.getItem("userData")) || [];

    console.log(allusers);

    display(allusers);

    function display(data) {

        document.querySelector("tbody").innerText = "";

        data.forEach(function (elem, index) {

            let row = document.createElement("tr");

            let td1 = document.createElement("td");
            td1.innerText = elem.fname
            let td2 = document.createElement("td");
            td2.innerText = elem.lname
            let td3 = document.createElement("td");
            td3.innerText = elem.email
            let td4 = document.createElement("td");
            td4.innerText = elem.phone
            let td5 = document.createElement("td");
            td5.innerText = elem.password
            
            let td6 = document.createElement("td");
            td6.innerText = "Delete"
            td6.style.background = "red"

            td6.addEventListener("click", function () {
                let allusers = JSON.parse(localStorage.getItem("userData")) || [];
            

                allusers.splice(index,1);

                localStorage.setItem("userData",JSON.stringify(allusers))
                display(allusers);
            

                
            })

            row.append(td1, td2, td3, td4, td5, td6)

            document.querySelector("tbody").append(row)
        })


    }

