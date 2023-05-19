// writing a function that create rightAngle pattern
// function rightAngle() {
//     for (let row = 6; row > 0; row--) {
         
//         let pattern = "";
//         for (let col = 0; col < row; col++) {
//             pattern += "*";
            
//         }
        
//         console.log(pattern)
//     }
    
    
// }

// rightAngle();

// Define the cart array
let cart = [];

// Add an event listener to each "Add to Cart" button
document.getElementById("item1").addEventListener("click", () => {
  // Add the item to the cart with a quantity of 1
  cart.push(1);
  // Update the cart display
  updateCart();
});

document.getElementById("item2").addEventListener("click", () => {
  cart.push(1);
  updateCart();
});

document.getElementById("item3").addEventListener("click", () => {
  cart.push(1);
  updateCart();
});

// Define a function to update the cart display
function updateCart() {
  // Clear the current cart display
  document.getElementById("cart").innerHTML = "";

  // Loop through each item in the cart
  cart.forEach((quantity) => {
    // Double the quantity
    quantity *= 2;

    // Create a new list item to display the item and quantity in the cart
    const li = document.createElement("li");
    li.textContent = `Item: ${cart.indexOf(quantity) + 1}, Quantity: ${quantity}`;

    // Add the new list item to the cart display
    document.getElementById("cart").appendChild(li);
  });
}

let a = [20, 40,42, 67,34,56];
let sumOfA = a.reduce((prev, curr)=> prev + curr,0);
console.log(`Sum of Total:${sumOfA}`);


