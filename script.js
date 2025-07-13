if (!localStorage.getItem("cart")) {
    // cart does NOT exist

    localStorage.setItem("cart", JSON.stringify([])); // create empty cart
}
let cart = []
let d = document.querySelector(".Items_Container");
function add(btn) {

    const card = btn.closest(".card");
    let item = {

        name: card.querySelector("h3").textContent,
        price: card.querySelector(".price span").textContent,
        image: card.querySelector("img").src,
        quantity: 1
    }

    const existing = cart.find(i => i.name === item.name);
    if (existing) {


        existing.quantity += 1;

    } else {
        cart.push(item);
    }
    d.innerHTML = ""
    let total = 0;


    cart.forEach(element => {



        dom(element.image, element.name, (element.price * element.quantity), element.quantity)



        total += parseInt(element.price) * parseInt(element.quantity);
    })
    let dtotal = document.querySelector(".totalrs span").textContent = total;
}


function dom(image, name, price, quantity) {
let src;
if (quantity>1) {
     src = "minus.svg";
}else{
src = "delete.svg";

}
    let d = document.querySelector(".Items_Container").insertAdjacentHTML("beforeend", `
    
    <div class="items">
                        <div class="itemss">

                        <div class="cimage"><img src="${image}" alt="" srcset=""></div>
                        <div class="itemsss">

                                <div class="iname"><span>${name}</span></div>
                                <div class="iprice">Rs. <span>${(price)}</span></div>
                            </div>
                        </div>
                        <div class="moredetails">
                        
                        <div class="buttons"><div><img src="${src}" class="btnminus" alt="" onclick="minus(this)"></div> <div class="qty">${quantity}</div> <div><img src="plus.svg" alt="" class="btnplus" onclick="plus(this)"></div>  </div>
                        </div>
                        </div>
                        
                        `)

    return d;

}


function plus(btn) {

    let details = btn.closest(".items")
    let name = details.querySelector(".iname span").textContent
    let qty = parseInt(details.querySelector(".qty").textContent)
    let price = parseInt(details.querySelector(".iprice span").textContent) / qty;

    let minus = details.querySelector(".btnminus");


    



    const existing = cart.find(i => i.name === name);
    if (existing) {
        existing.quantity = (qty + 1);


    }
    d.innerHTML = ""
    let total = 0;
    cart.forEach(element => {



        dom(element.image, element.name, (element.price * element.quantity), element.quantity)



        total += parseInt(element.price) * parseInt(element.quantity);
    })
    let dtotal = document.querySelector(".totalrs span").textContent = total;

if (minusSrc.includes("delete.svg")) {
        minusImg.src =  "http://127.0.0.1:3000/minus.svg"
        console.log("Updated to:", minusImg.src);
    }
}


// document.addEventListener("contextmenu", function (e) {
//     e.preventDefault();
//   });

function minus(btn) {

    let details = btn.closest(".items")
    let name = details.querySelector(".iname span").textContent
    let qty = parseInt(details.querySelector(".qty").textContent)
    let price = parseInt(details.querySelector(".iprice span").textContent) / qty;



    const existing = cart.find(i => i.name === name);
    if (existing) {
        if (qty > 1) {
            existing.quantity = (qty - 1);

        }else{

            cart = cart.filter(item => item.name !== name);

        }


    }

    d.innerHTML = ""
    let total = 0;
    cart.forEach(element => {



        dom(element.image, element.name, (element.price * element.quantity), element.quantity)



        total += parseInt(element.price) * parseInt(element.quantity);
    })
    let dtotal = document.querySelector(".totalrs span").textContent = total;


}

const searchInput = document.getElementById("search");

searchInput.addEventListener("input", function () {
    const filter = this.value.toLowerCase(); // get the search text
    const cards = document.querySelectorAll(".card"); // all product cards

    cards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase(); // product name

        if (title.includes(filter)) {
            card.style.display = "flex"; // or whatever your default display is
        } else {
            card.style.display = "none";
        }
    });
});


function place_order(){

    
    localStorage.setItem("cart", JSON.stringify(cart))
    
    window.location.href = "Order_Reciept.html"


}

let hamburger = document.querySelector(".icon-cart");

hamburger.addEventListener("click", ()=>{

let cartconatiner = document.querySelector(".cartcontainer");

if (cartconatiner.style.right == "-100%") {
    cartconatiner.style.display = "flex"
    cartconatiner.style.right = "-1%";
}else{

cartconatiner.style.right = "-100%";
cartconatiner.style.display = "none"
}



})