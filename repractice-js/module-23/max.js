const foyej = 10;
const salman = 70;

const emon = 600;
const sanam = 500;

if(foyej > salman && foyej > emon){
    console.log('foyej is big bro')
}
else if (salman > foyej && salman > emon){
    console.log('salman is big bro')
}
else{
    console.log('emon is big bro')
}

function bigestNumbar(num1, num2, num3){
    if(foyej > salman && foyej > sanam){
    // console.log('foyej is big bro')
    return 'foyej is big bro';
    }
    else if (salman > foyej && salman > sanam){
        // console.log('salman is big bro')
        return 'salman is big bro';
    }
    else{
        // console.log('sanam is big bro')
        return 'sanam is big bro';
    }
}
const result = bigestNumbar(foyej, salman, sanam);
console.log(result)

const max = Math.max(foyej, salman, emon, sanam);
console.log(max)