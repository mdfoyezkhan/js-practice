const products =[
    {nam:'shirt', price: 500},
    {nam:'heanglaf', price: 200},
    {nam:'parfum', price: 400},
    {nam:'pant', price: 600}, 
    {nam:'pant', price: 600}, 
    {nam:'pant', price: 600}, 
]
function getSumOfAllProductPrice(products){
    let sumOfProductPrice = 0;
    for(const product of products){
        sumOfProductPrice = sumOfProductPrice + product.price;
    }
    return sumOfProductPrice;
}
const getPrice = getSumOfAllProductPrice(products);
console.log(getPrice)