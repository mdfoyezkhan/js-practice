const friends = ['salman', 'emon', 'salman', 'foyej', 'sanam', 'arman', 'arman', 'samaun'];
function noDuplicate(array){
    const uniqarrays = [];
    for(const items of array){
       if(uniqarrays.includes(items) === false){
        uniqarrays.push(items)
       }
    }
    return uniqarrays
}
const uniqArray = noDuplicate(friends);
console.log(uniqArray);

const noDuplicateNumber = [12, 12, 32, 45, 67, 67, 78, 90, 90];
function forNotDuplicateNumber(array){
    const noDuplicateInArray = [];
    for(const items of array){
        if(noDuplicateInArray.includes(items) === false){
            noDuplicateInArray.push(items);
        }
    }
    return noDuplicateInArray;
}
const forOutput = forNotDuplicateNumber(noDuplicateNumber);
console.log(forOutput);