
function shoppingCost (shirtQuantity, pantQuantity, shoeQuantity){
    const shirtPrice = 500;
    const pantPrice = 300;
    const shoePrice = 900;
    const shirtCost = shirtPrice * shirtQuantity;
    const pantCost = pantPrice * pantQuantity;
    const shoeCost = shoePrice * shoeQuantity;
    const totalCost = shirtCost + pantCost + shoeCost;
    return totalCost;
}
const allShoppingCost = shoppingCost(5, 3, 1);
console.log(allShoppingCost)