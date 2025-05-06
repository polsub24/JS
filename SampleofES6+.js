// TODO: Define an arrow function named 'bakeCake' that takes in an array of ingredients and returns a string detailing the cake's ingredients. Use the `.join` method
const bakeCake = (ingredientsArray) => `The cake contains: ${ingredientsArray.join(', ')}.`;
// TODO: Create a constant array 'ingredients' with cake ingredients: 'flour', 'sugar', 'eggs', 'butter'
const ingredients = ['flour','sugar','eggs','butter'];
// TODO: Use destructuring to create variables from the 'ingredients' array, each representing an ingredient
const [flour, sugar, eggs, butter] = ingredients;
// TODO: Write a template string in 'bakingMessage' to describe the process using those 4 ingredient variables and print it to the console
const bakeMessage = `To bake a cake, we mix ${flour}, ${sugar}, ${eggs}, and ${butter}.`;
console.log(bakeMessage);
// TODO: Use 'console.log' to output the result of calling 'bakeCake'
console.log(bakeCake(ingredients));