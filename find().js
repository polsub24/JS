const numbers = [1, 3, 5, 2, 4, 6];
const firstEvenNumber = numbers.find((num) => {
    return num % 2 === 0;
});
console.log(firstEvenNumber); // prints 2, the first even number