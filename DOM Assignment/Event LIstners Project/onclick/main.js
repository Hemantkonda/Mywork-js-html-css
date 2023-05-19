let boxElement = document.getElementById("box");
let colorChange = document.querySelector(".click")

boxElement.addEventListener("click", () => {
    colorChange.style.color = "green";
    alert("You Clicked Me!")
})