const decrementBtn = document.getElementById("decrement");
const incrementBtn = document.getElementById("increment");
const reset = document.getElementById("reset");
const displayValue = document.getElementById("displayValue");

// decrement By 1
decrementBtn.addEventListener("click", () => {
    let value = Number(displayValue.innerText);
    if (value > 0) {
        displayValue.innerText = value - 1;
      } else {
        alert("Negative value not allowed");
      }
})


// increment By 1
incrementBtn.addEventListener("click", () => {
    let value = Number(displayValue.innerText);
    if (value >= 10){
        alert("value not allowed 10+");
      } else {
        displayValue.innerText = value + 1;
      }
})

// Reset to 0
reset.addEventListener("click", () => {
    displayValue.innerText = 0;
  });

  
// let count = 0;

// decrementBtn.addEventListener("click", () => {
//      count = count - 1;
//     displayValue.innerText = count
// });

// incrementBtn.addEventListener("click", () => {
    
//      count = count + 1;
//      displayValue.innerText = count


// })

// reset.addEventListener("click", () => {
//     displayValue.innerText = 0;
//   });


