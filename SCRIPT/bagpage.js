let favdata = JSON.parse(localStorage.getItem("favourites")) || [];

display(favdata);
let bag = [];

// display(favdata)
function display(data) {
    let total=0;
    let count=1;
    document.querySelector("#fav-container").textContent = null;
    data.forEach(function (el, index) {


        let card = document.createElement("div");

        let img = document.createElement("img");
        img.setAttribute("src", el.avatar)

        let title = document.createElement("h2");
        title.innerText = el.title;

        let catagory = document.createElement("h3");
        catagory.innerText = el.catagory;

        let price = document.createElement("h5");
        price.innerText = el.price;

        let discripcion = document.createElement("p");
        discripcion.innerText = el.Desrciption;

        let btn = document.createElement("button");

        btn.innerText = "Remove";
        btn.addEventListener("click", function () {

            let favdata = JSON.parse(localStorage.getItem("favourites")) || [];


            favdata.splice(index, 1)
            localStorage.setItem("favourites", JSON.stringify(favdata));

            display(favdata);
        
            Swal.fire(
                "cart has been removed",
                '',
                'error'
            )
        })
        
        let inc=document.createElement("button");
        inc.innerText="+";

        inc.addEventListener("click",function(){
            count++;
            qty.innerText=count;
        });

        let qty=document.createElement("span");
        qty.innerText="1";

        let dec=document.createElement("button");
        dec.innerText="-";
        
        dec.addEventListener("click",function(){
            count--;
            qty.innerText=count;
        });


        card.append(img, title, catagory, price ,inc,qty,dec, discripcion, btn)

        document.querySelector("#fav-container").append(card);
       
        total+=el.price;
    })
     document.querySelector("#fav-sum").innerText=total;
    document.querySelector("#fav-total").innerText = data.length;

    document.querySelector("#totalp").innerText=total;
    document.querySelector("#prod").innerText = data.length;
    document.querySelector("#tax2").innerText=total*12/100;
    document.querySelector("#ordert").innerText=total+(total*12/100);
}


let search = document.getElementById("search-btn");
search.addEventListener("click", () => {
    let searchInput = document.getElementById("search-input")
    searchInput = searchInput.value;
    searchInput = searchInput.toLowerCase();
    console.log(searchInput)
    let filterData = proData.filter((element) => {
        if (element.title.toLowerCase().includes(searchInput) || element.catagory.toLowerCase().includes(searchInput))
            return true;
        else
            return false;
    })
    console.log(filterData);
    display(filterData)
})
let reset = document.getElementById("reset");
reset.addEventListener("click", () => {
    document.getElementById("from").value = "";
    document.getElementById("to").value = "";
    display(proData);
})
