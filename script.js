const phone="919344608590";

fetch("products.json")
.then(res=>res.json())
.then(products=>{

const container=document.getElementById("products");

products.forEach(product=>{

container.innerHTML += `
<div class="card">
<img src="${product.image}">
<h3>${product.name}</h3>
<p class="price">₹${product.price}</p>

<button onclick="order('${product.name} ₹${product.price}')">
WhatsApp Order
</button>
</div>
`;

});

});

function order(item){

const text=`Hello ERO Stationery, I want ${item}`;

window.open(
`https://wa.me/${phone}?text=${encodeURIComponent(text)}`
);

}

function searchProduct(){

let input=document
.getElementById("search")
.value.toLowerCase();

let cards=document.querySelectorAll(".card");

cards.forEach(card=>{

card.style.display=
card.innerText.toLowerCase().includes(input)
? "block"
: "none";

});

}