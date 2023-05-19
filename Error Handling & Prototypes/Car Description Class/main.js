// Car Description by Class object
class car {
    constructor(company, model, year){
        this.company = company;
        this.model = model;
        this.year = year;
    }
    
    getDesc() {
        return `This is a ${this.year} ${this.company} ${this.model}.`
    }
}

const myCar = new car("Jaguar", "F-Type", 2014)  
console.log(myCar.getDesc());


