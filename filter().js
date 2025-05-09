const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris', 'Betelgeuse'];
const evenIndexedStars = stars.filter((star, index) => {
    return index % 2 === 0;
});
console.log(evenIndexedStars); // prints ['Sirius', 'Rigel', 'Betelgeuse']