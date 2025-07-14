const products =[
    {quantity: 5, nam:'shirt', price: 500},
    {quantity: 1, nam:'shirt', price: 500},
    {quantity: 4, nam:'parfum', price: 400},
    {quantity: 3, nam:'pant', price: 600}, 
    {quantity: 6, nam:'pant', price: 600}, 
    {quantity: 8, nam:'pant', price: 600}, 
];
function forShoppingCost(products){
    let sumOfCast = 0;
    for(const product of products){
        // console.log(product)
        const totalPrice = product.price * product.quantity;
        const totalShoppingCost = totalPrice + sumOfCast;
        sumOfCast = totalShoppingCost;
    }
    return sumOfCast;
}
const totalCost = forShoppingCost(products);
console.log(totalCost)