for(let i = 0 ; i < 20; i++){
    if(i > 5 ){
        break;
    }
    console.log(i)
}
let i = 0;
for(let i = 0; i < 20; i++){
    console.log(i)
    if(i >= 10){
        break;
    }
    
}
for(let i =  10; i < 100; i++){
    
    if(i > 30){
        break;
    }
    console.log(i)
}
let num1 = 20;
while( num1 > 10){
    console.log(num1)
    if(num1 < 15){
        break;
    }
    num1--;
}
for(let i = 1; i < 10; i++){
    if(i % 2 === 1){
        continue;
    }
    console.log(i)
}
let num = 0;
while(num < 10){
    num++;
    if(num % 2 === 0){
        continue;
    }
    console.log(num)
    
    
}
let n = 0;
while(n < 30){
    n++;
    if(n % 5 !== 0){
        continue;
    }
    console.log(n)
}
for(let x = 0; x < 50; x++){
    if(x % 5 !== 0){
        continue;
    }
    console.log(x)

}
