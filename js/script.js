import items from "./items.js";
console.log(items);

// DOM Elements
const itemsContainer = document.getElementById("the-items");
const cartItemsContainer = document.getElementById("cart-items");
const totalAmountElement = document.getElementById("total-amount");
let total=0;


// Add to cart function
const addToCart = (item) => {
    
    // Creating cart list element
    const cartList = document.createElement("li");
    cartList.textContent = `${item.name} - KSH ${item.price}`;


    // delete cart item button
    const deleteItemCartButton = document.createElement("button");
    deleteItemCartButton.textContent = "Remove";
    deleteItemCartButton.addEventListener("click", () => {
        cartList.remove();
        total -= item.price;
        totalAmountElement.textContent = total.toFixed(2);
        })

    //button goes inside the cart list item 
    cartList.appendChild(deleteItemCartButton);

    //Adding cart list to the cart container    
    cartItemsContainer.appendChild(cartList);
        

    // Getting the total amount and updating it
    total += item.price;
    totalAmountElement.textContent = total.toFixed(2);

        // toFixed()
        //  Formats a number to a fixed number of decimal places
}


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

  
    // new price based on quantity
    const updatePrice = () => {
        const newPriceCalculated = item.price * currentQuantity;
        newPrice.textContent = `Price: KSH ${newPriceCalculated}`;
    };

    // Update price when quantity changes
    addQuantity.addEventListener("click", updatePrice);
    removeQuantity.addEventListener("click", updatePrice);
 
    // new price element
    const newPrice = document.createElement("p");
    newPrice.textContent = `Price: KSH ${item.price}`;

    // ------------------------------------------------------------------------------------------------------------------------


    // Add cart button
    const addCartButton = document.createElement("button");
       // name of the button
    addCartButton.textContent = "Add to Cart";
    addCartButton.addEventListener("click", () => addToCart(item));

    // Building the  item card
    li.appendChild(name);
    li.appendChild(image);
    li.appendChild(description);
    li.appendChild(price);
    li.appendChild(addCartButton);
    li.appendChild(quantityTitle);
    li.appendChild(quantity);
    li.appendChild(addQuantity);
    li.appendChild(removeQuantity);
    li.appendChild(newPrice);
    

    // Adding the item card to the items container
    itemsContainer.appendChild(li);

})