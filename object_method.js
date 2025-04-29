let car = { //object
    brand: 'Tesla',
    model: 'Model 3',
    drive: function(){//method
        return "Vroom vroom";
    }
};

// Changing the model and adding a new property.
car.color = 'white';
car.model = 'Model Y';

// TODO: Call the 'drive' method here and print the result
let info = car.drive();
console.log(info);
