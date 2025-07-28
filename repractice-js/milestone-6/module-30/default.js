function checkDefault(num1, num2){
    const result = num1 + num2;
    console.log(result, num1, num2)
}
checkDefault(12, 12)

function fordefault( nam1, num2 = 0){
    const result = nam1 + num2;
    console.log(nam1, num2, result)
}
fordefault(11)
function wthiuotDefault(num1, num2){
    const result = num1 + num2;
    console.log(num1, num2, result)
}
wthiuotDefault(10)