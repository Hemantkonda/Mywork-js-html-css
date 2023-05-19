const store = {
    toys: 5,
    pot: 3,
    rice: 10,
    cloths: 8
}

console.log("Store Items With Price In USD")
console.log(store);

let exchangeRate = 80;

// converting USD Price Into Rupees
let itemsInRupees = Object.entries(store).map(([itemName, itemPrice]) =>{
    
    itemPrice *= exchangeRate;

    return [itemName, itemPrice];

})

const itemsInRupeesObj = Object.fromEntries(itemsInRupees);

console.log("Store Items With Price USD Converted Into Rupees")
console.log(itemsInRupeesObj);