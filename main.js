let btn1=document.querySelector(".btn1");
let btn2=document.querySelector(".btn2");
let cards=document.querySelector(".cards");
let modal=document.querySelector(".modal_values");
let modalBg =document.querySelector(".modal-bg");
let closeicon=document.querySelector(".fa-xmark")
let closeBtn =document.querySelector(".closeBtn");
let totalPrices = document.querySelector(".total_price_values")
let quantitys = document.querySelector(".cardcount")

btn1.addEventListener("click",function (){
modalBg.classList.add("bg_active")
})
closeicon.addEventListener("click",function (){
    modalBg.classList.remove("bg_active")
})
closeBtn.addEventListener("click",function (){
    modalBg.classList.remove("bg_active")
})

let products=[
    {
        id:1,
        name:"Orange",
        price:7,
        image:"orange.jpg"
    },
    {
        id:2,
        name:"Banana",
        price:10,
        image:"banana.webp"
    },
    {
        id:3,
        name:"Apple",
        price:3,
        image:"apple2.jpg"
    }
];
let listCard=[];
function initApp()
{
 products.map((value,key)=>{
    let newDiv=document.createElement("div");
    newDiv.classList.add("card");
    newDiv.innerHTML=
    `
    <img src="image/${value.image}">
    <div class="title">${value.name}</div>
    <div class="price">${value.price}$</div>
    <button onclick="addToCard(${key})"> Add To Card </button>
    `;
    cards.appendChild(newDiv);
 })
}
initApp();
function addToCard(key)
{
 if(listCard[key]==null)  {
    listCard[key]=JSON.parse(JSON.stringify(products[key]))
    listCard[key].quantity=1
  }
  reloadCard()
}

function reloadCard(){
   modal.innerHTML="";
   let count=0;
   let totalPrice=0;
   listCard.map((value,key)=>{
   totalPrice=totalPrice+value.price;
   count=count+value.quantity;
   if(value !=null){
    let newDiv=document.createElement("li");
    newDiv.innerHTML=`
    <div>${value.name}</div>
    <div>${value.price}$</div>
    <div>
    <button onclick="changeQuantity(${key},${value.quantity - 1})">-</button>
    <input type="number" value="1" class="product_count" />
    <button onclick="changeQuantity(${key},${value.quantity + 1})">+</button>
    </div>
    `
    modal.appendChild(newDiv)
    modal.classList.add("modal_values")
   }
   })
   totalPrices.innerText = totalPrice.toLocaleString();
   quantitys.innerText = count
}

function changeQuantity(key,quantity){
    if(quantity==0){
        delete listCard[key]
    }
    else{
        listCard[key].quantity=quantity
        listCard[key].price=quantity * products[key].price
      
    }
    reloadCard()
}



btn2.addEventListener('click', function () {
   modal.innerHTML= ""
   totalPrices.innerText=0
   quantitys.innerText=0
   listCard=[]

});


// let  basket = document.querySelector(".product_count")
// basket.addEventListener('change', function (event) {
//     if (event.target.classList.contains('product_count') && event.target.nodeName === 'INPUT') {
//         let countes = event.target.value;
//         listCard[key].price = countes * products[key].price
//     }
//     reloadCard();
//     changeQuantity()
// });