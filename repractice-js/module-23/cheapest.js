const phones =[
    {nam :'samsung',  price: 20000, camera:'50mp', color: 'green'},
    {nam :'xoami',  price: 10000, camera:'50mp', color: 'red'},
    {nam :'oppo',  price: 40000, camera:'50mp', color: 'blue'},
    {nam :'iphone',  price: 200000, camera:'50mp', color: 'green'},
    {nam :'htc',  price: 50000, camera:'50mp', color: 'black'},
];
function bigestPrice(phones){
    let getBigestPrice = phones[0];
    for(const phone of phones){
        if(phone.price > getBigestPrice.price){
            getBigestPrice = phone;
        }
    }
    return getBigestPrice;
}
const bigPrice = bigestPrice(phones);
console.log(bigPrice);


const mobiles =[
    {nam :'samsung',  price: 20000, camera:'50mp', color: 'green'},
    {nam :'xoami',  price: 10000, camera:'50mp', color: 'red'},
    {nam :'oppo',  price: 40000, camera:'50mp', color: 'blue'},
    {nam :'iphone',  price: 200000, camera:'50mp', color: 'green'},
    {nam :'htc',  price: 50000, camera:'50mp', color: 'black'},
];
function cheapestPrice (mobiles){
    let getcheapPrice = mobiles[0];
    for(const mobile of mobiles){
        if(getcheapPrice.price > mobile.price){
            getcheapPrice = mobile;
        }
    }
    return getcheapPrice;
}
const cheapestPriceGotIt = cheapestPrice(mobiles);
console.log(cheapestPriceGotIt)
