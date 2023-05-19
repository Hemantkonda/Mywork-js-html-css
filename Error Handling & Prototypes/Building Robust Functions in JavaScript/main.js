function getPerson(personObj) {
    try {
        if(!personObj || typeof personObj !== "object"|| !personObj.name || !personObj.age){
            throw new Error("Invalid Parameter")
        }
        const {name, age} = personObj;
        return `Name: ${name}, Age: ${age}`;
    } catch (err) {
        return err.message;
    }
}


console.log(getPerson({name: "Mithun", age: 20})); 
console.log(getPerson({name: "Mithun"}));
console.log(getPerson(["name", "Mithun"]));

