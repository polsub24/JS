const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, number) => {
    return total + number;
}, 0);
console.log(sum); // prints total sum of numbers