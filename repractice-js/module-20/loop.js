const phones = {
    brand: 'sumsung',
    color: 'black',
    price: 25000,
    camera: '50mp',
}
// for(const phone in phones){
//     console.log(phone)
//     console.log(phones[phone])
// }
for(const prop in phones){
    console.log(prop, ':', phones[prop])
}
const keys = Object.keys(phones);
console.log(keys);
for(const phone of keys){
    console.log(phone)
    console.log(phones[phone])
}
for(const mobile of keys){
    console.log(mobile, ':', phones[mobile])
}