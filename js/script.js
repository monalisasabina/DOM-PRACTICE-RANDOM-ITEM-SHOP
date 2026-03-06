import { items } from "./items";

// DOM Elements
const itemsContainer = document.getElementById("the-items");
const cartItemsContainer = document.getElementById("cart-items");
const totalAmountElement = document.getElementById("total-amount");
let total=0;

// Displaying all items (items card)
items.forEach(item =>{
  
    // creating the list element
    const li =document.createElement("li");

    //Creating image element
    const image = document.createElement("img");
    image.src = item.img;
    image.alt = item.name;

    // creating item name element
    const name = document.createElement("h3");
    name.textContent = item.name;




    



})