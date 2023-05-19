let boxElement = document.getElementById("box");
let addNew = document.querySelector(".dblclick");

// Adding New Class on dblClick
boxElement.addEventListener("dblclick", () => {
    addNew.classList.add("new");
    alert("Hi I am Double Clicked!")
})