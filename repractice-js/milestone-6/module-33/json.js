const person = {di:1, name:'foyej', profesion:'webdeveloper'};
console.log(person);
const convertText =JSON.stringify(person);
console.log(convertText)

console.log('convert json 2');

const shop ={
    name:'rich man',
    produts:{
        mans:['t-shart', 'shart', 'shus', 'pant'],
    },
    isNew:'true',
    open: '10pm to 9pm',

}
console.log(shop)
const convertTexts = JSON.stringify(shop);
console.log(convertTexts)
const convertObject = JSON.parse(convertTexts)
console.log(convertObject)



const produts ={
    shop:'khan gears',
    items:'mobile acceseris',
    produts:{
        phone: ['phone cover', 'headphone', 'blouthot spiker']
    }
}
console.log(produts)
const produtsJson = JSON.stringify(produts);
console.log(produtsJson)
const produtsForFarse = JSON.parse(produtsJson);
console.log(produtsForFarse)