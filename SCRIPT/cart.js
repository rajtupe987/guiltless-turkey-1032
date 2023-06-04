let container=document.getElementById("cart-container")
let total=document.getElementById("cart-total")
let cartData=JSON.parse(localStorage.getItem("cart"));
if(cartData===null){
    cartData=[]
}
displayProduct(cartData);

function displayProduct(data){
    container.innerHTML=null;
    data.forEach((element,index) => {
        let card=document.createElement("div")
        card.setAttribute("class","card")

        let image=document.createElement("img")
        image.setAttribute("src",element.image)
        image.setAttribute("class","img")

        let name=document.createElement("h1")
        name.innerText=element.name;
        let category=document.createElement("h2")
        category.innerText=element.category
        let price=document.createElement("h2")
        price.innerText="₹"+element.price

        let increment=document.createElement("button")
        increment.innerText="+";
        increment.setAttribute("class","quantity")
        increment.addEventListener("click",()=>{
            quantity.innerText++
            element.quantity++
            show()
        })

        let quantity=document.createElement("span")
        quantity.innerText=element.quantity

        let decrement=document.createElement("button")
        decrement.innerText="-"
        decrement.setAttribute("class","quantity")
        decrement.addEventListener("click",()=>{
            if(quantity.innerText==1){
                return false
            }else{
                element.quantity--
                quantity.innerText--
                show()
            }
        })
        
        let remove=document.createElement("button")
        remove.innerText="Remove"
        remove.setAttribute("id","remove")
        remove.addEventListener("click",()=>{
            cartData.splice(index,1)
            localStorage.setItem("cart",JSON.stringify(cartData));
            displayProduct(data)
            show()
        })

        card.append(image,name,category,price,increment,quantity,decrement,remove)
        container.append(card)
    });
}

function show(){
    let totalPrice=0
    cartData.forEach((element)=>{
        totalPrice+=(element.quantity)*(element.price)
    })
    
    total.innerText=Math.floor(totalPrice);
    console.log(typeof(totalPrice))
    
}
show()