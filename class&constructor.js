class Car {
    constructor(brand) {
        console.log("The Car constructor has been called");
        this.carname = brand;
    }
}
let myCar = new Car("Toyota"); // prints "The Car constructor has been called"

//We've created a myCar object of the Car Class with carname set as 'Toyota'. The myCar object is an instance of the Car Class.

//In JavaScript classes, this refers to the instance of the class. In other words, when an object is created using a class, 
// this stands for that particular object.

//When this is used inside a class's constructor method, it refers to the newly created instance of that class. 
// In our code, this.carname = brand; means the carname property of the newly created object is set to the value of brand passed to the constructor.

//You can access the property carname of the instance myCar as follows:

console.log(myCar.carname);  // Outputs: 'Toyota'