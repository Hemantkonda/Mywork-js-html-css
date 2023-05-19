function convertToNumber(str) {

    try {
        const number = Number(str);
        if(!number){
            throw new Error("Invalid")
        }
        return number;
    } catch (error) {
        return "Invalid number"
    }
}

console.log(convertToNumber("str"));
console.log(convertToNumber("456"));