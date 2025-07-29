const student = {
    name: 'foyej',
    age: 23,
    college: 'brindabon',
    subject: 'BA',
}
const keys = Object.keys(student);
console.log(keys)
const forV = Object.values(student);
console.log(forV)
const forKV = Object.entries(student);
delete student.college
console.log(forKV)