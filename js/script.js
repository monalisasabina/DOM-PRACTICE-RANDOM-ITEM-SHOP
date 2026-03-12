import items from "./items.js";
console.log(items);

// DOM Elements
const itemsContainer = document.getElementById("the-items");
const cartItemsContainer = document.getElementById("cart-items");
const totalAmountElement = document.getElementById("total-amount");
let total=0;

// ITEMS CARD
// Displaying all items (items card)
items.forEach(item =>{
  
    // creating the list element
    const li =document.createElement("li");

    // creating item name element
    const name = document.createElement("h3");
      //textContent sets or gets the text inside an HTML element.
    name.textContent = item.name;

    //Creating image element
    const image = document.createElement("img");
    image.src = item.img;
    image.alt = item.name;

    // Created item description element
    const description = document.createElement("p");
    description.textContent = item.description;

    
    // PRICE AND QUANTITY ELEMENTS
    // ------------------------------------------------------------------------------------------------------------------------
    // Created item price element
    const price = document.createElement("p");
    price.textContent = `Price: KSH ${item.price}`;

    // Initial quantity for each item
    let currentQuantity = 0;

    // quantity title
    const quantityTitle = document.createElement("p");
    quantityTitle.textContent = "Quantity:";

    // Quantity input element
    const quantity = document.createElement("input");
    quantity.type = "number";
    quantity.min = 0;
    quantity.value = currentQuantity;
    
    // New Price elememnt
    const updatedPrice = document.createElement("p");
      updatedPrice.textContent = `TOTAL Price: KSH 0`

    // Addlistener for the Input element
    quantity.addEventListener("change", () => {
        currentQuantity = parseInt(quantity.value);
        const newPriceCalculated = item.price * currentQuantity;
        updatedPrice.textContent = `TOTAL Price: KSH ${newPriceCalculated}`;
    })


    // ------------------------------------------------------------------------------------------------------------------------

    // CART
    // Add to cart function
    const addToCart = (item, currentQuantity) => {
    
        // Creating cart list element
        const cartList = document.createElement("li");
        cartList.textContent = `${item.name} - KSH ${item.price*currentQuantity}`;

        // delete cart item button
        const deleteItemCartButton = document.createElement("button");
        deleteItemCartButton.textContent = "Remove";
        deleteItemCartButton.addEventListener("click", () => {
            cartList.remove();
            total -= item.price *currentQuantity;
            totalAmountElement.textContent = total.toFixed(2);
        })

        //button goes inside the cart list item 
        cartList.appendChild(deleteItemCartButton);

        //Adding cart list to the cart container    
        cartItemsContainer.appendChild(cartList);
        

        // Getting the total amount and updating it
        total += item.price * currentQuantity;
        totalAmountElement.textContent = total.toFixed(2);

        // toFixed()
        //  Formats a number to a fixed number of decimal places
    }

    // Add cart button
    const addCartButton = document.createElement("button");
    addCartButton.textContent = "Add to Cart"; //name of the button
    addCartButton.addEventListener("click", () => addToCart(item, currentQuantity)); // calling the add to cart function and passing the item and quantity as arguments


    // Building the  item card
    li.appendChild(name);
    li.appendChild(image);
    li.appendChild(description);
    li.appendChild(price);
    li.appendChild(quantityTitle);
    li.appendChild(quantity);  
    li.appendChild(updatedPrice);
    li.appendChild(addCartButton);

    // Adding the item card to the items container
    itemsContainer.appendChild(li);

})