function discountPrice(quantity){
    if(quantity <= 100){
        const total = quantity * 100;
        return total;
    }
    else if(quantity <= 200){
        const total = quantity * 80;
        return total;
    }
    else{
        const total = quantity * 50;
        return total;
    }
}
const totalCost = discountPrice(50);
const totalCost2 = discountPrice(120);
const totalCost3 = discountPrice(220);
console.log(totalCost, totalCost2, totalCost3);


function leyarDiscount(quantity){
    const discountPrice = 100;
    const discountPrice2 = 80;
    const discountPrice3 = 50;
    if(quantity <= discountPrice){
        const totalCost = quantity * discountPrice;
        return totalCost;
    }
    else if(quantity <= 200){
        const fulPriceFor100 = 100 * discountPrice;
        const discountPriceForabove100 = quantity -100;
        const totalCost = discountPriceForabove100 * discountPrice2;
        const total = fulPriceFor100 + totalCost;
        return total;
    }
    else{
        const discountFor100 = 100 * discountPrice;
        const discountFor200 = 100 * discountPrice3;
        const alldiscount = quantity - 200;
        const totalCost = alldiscount * discountPrice3;
        const total = discountFor100 + discountFor200 + totalCost;
        return total;

    }
}
const discountPrice2 =leyarDiscount(110);
console.log(discountPrice2)