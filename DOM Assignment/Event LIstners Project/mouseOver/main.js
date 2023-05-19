let boxElement = document.getElementById("box");
let addNew = document.querySelector(".dblclick");

// Adding New Class on dblClick
boxElement.addEventListener("mouseover", () => {
    addNew.classList.add("new");
    alert("Mouse is Over On Me!")
})