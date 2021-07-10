// You will be given an array of drinks, with each drink being an object with two properties: name and price. 
// Create a function that has the drinks array as an argument and return the drinks objects sorted by price in ascending order.

function sortDrinkByPrice(drinks) {
	let sorted = drinks.sort((x, y) => x.price - y.price)
    return sorted
} 

const drinks1 = [
	{name: 'lemonade', price: 90},  
	{name: 'lime', price: 432}, 
	{name: 'peach', price: 23}
];

const sorted1 = [
	{name: 'peach', price: 23},
	{name: 'lemonade', price: 90}, 
	{name: 'lime', price: 432}
];

const drinks2 = [
	{name: 'water', price: 120}, 
	{name: 'lime', price: 80}, 
	{name: 'peach', price: 90}
];

const sorted2 = [
	{name: 'lime', price: 80},
	{name: 'peach', price: 90}, 
	{name: 'water', price: 120}
];

console.log(sortDrinkByPrice(drinks1), sorted1)
console.log(sortDrinkByPrice(drinks2), sorted2) 

