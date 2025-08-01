function sum(a, b){
const sum = a + b;
}
const result = sum(12, 12);
// console.log(result)

function negative (a, b){
    if (a < 0 || b < 0){
        return
    }
    return a + b;
}
const total =negative(12, -2);
console.log(total)
const objects = {age: 23, id: 1, name:'foye'};
console.log(objects.id, objects.salary);


const nnarray = [12, 12, 23, 34, 45];
delete nnarray[1]
console.log(nnarray[9], nnarray[1], nnarray[0])
console.log(nnarray)


