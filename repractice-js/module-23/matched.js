const brands =[
    {id:1, name: 'iphone', price: 120000,},
    {id:2, name: 'sumsong', price: 50000,},
    {id:3, name: 'dell laptop', price: 50000,},
    {id:4, name: 'lenovo laptop', price: 50000,},
    {id:5, name: 'oppo phone', price: 50000,},
    {id:6, name: 'techno phone', price: 50000,},
    {id:7, name: 'apple laptop', price: 50000,},
    {id:8, name: 'nokea Phone', price: 50000,},
];
function phoneBrand(phone, search){
    const phoneArray = [];
   for(const brand of brands){
    if(brand.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())){
        phoneArray.push(brand)
    }
   }
   return phoneArray;
}
const result = phoneBrand(brands, 'laptop');
console.log(result)