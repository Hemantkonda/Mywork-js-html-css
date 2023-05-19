

function reverse() {
    let text = document.getElementById("input-text").value;
   
        setTimeout(()=>{
            const reversed = text.split("").reverse().join("");
            document.getElementById("output").innerText =  `Reversed string: ${reversed}`
        }, 2000)
    
}