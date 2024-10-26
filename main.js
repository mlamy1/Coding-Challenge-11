// Task 2: Add Event Listener for Product Selection

const productSelector = document.getElementById('product-selector'); // Used to get the product selector display
const quantityInput = document.getElementById('quantity'); //  Used to get the quantity input display
const totalPriceElement = document.getElementById('total-price'); // Used to get the total price display
const placeOrderButton = document.getElementById('place-order'); // Used to display get the place order button display
const orderSummary = document.getElementById('order-summary'); // Used to get the order summary display

//Task 3: Calculate Total Price Dynamically 
// Calculate total price when product or quantity changes
function updateTotalPrice() { 
    const productPrice = parseFloat(productSelector.value); // Used to parse the selected product price
    const quantity = parseInt(quantityInput.value); // Used to parse the selected quantity
    const totalPrice = productPrice * quantity; // Used to calculate the total price
    
    totalPriceElement.textContent = totalPrice.toFixed(2); // Used to update the total price
}

productSelector.addEventListener('change', updateTotalPrice); // Used to update the total price when product is selected
quantityInput.addEventListener('input', updateTotalPrice); //Used to update the total price for desired quantity
