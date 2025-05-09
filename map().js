const stars = ['Sirius', 'Vega', 'Rigel', 'Polaris'];
const brightStars = stars.map((star) => {
    return star + ' is very bright!';
});
console.log(brightStars); // prints star names with added info
// Prints ['Sirius is very bright!', 'Vega is very bright!', 'Rigel is very bright!', 'Polaris is very bright!']