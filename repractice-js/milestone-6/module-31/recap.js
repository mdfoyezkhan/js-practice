const products = [
    {id: 1, name: 'dell', price: 50000},
    {id: 1, name: 'lenovo', price: 70000},
    {id: 1, name: 'hp', price: 40000},
    {id: 1, name: 'macbook', price: 170000},
    {id: 1, name: 'asus', price: 20000},
];
const forMap = products.map(n => n.name);
console.log('for map', forMap);
const foreachs = products.forEach(n => n.id);
console.log('for each',foreachs);
const forFilter = products.filter(n => n.price > 60000);
console.log('for filter', forFilter)
const forFilters = products.filter(n => n.price < 50000);
console.log('choto gula ',forFilters)
const forFind = products.find(n => n.price > 40000);
console.log('for find',forFind)
const forReduce = products.reduce((privius, corrent) => privius + corrent.price, 0);
console.log(forReduce)
const recapReduce = products.reduce((p , c) => p + c.price, 0);
console.log(recapReduce)