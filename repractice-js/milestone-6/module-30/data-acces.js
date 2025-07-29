// const person = [{ name: 'foyej', age: 23, fotherName: 'jamal uddin khan' }]
// const acces = person[0].fotherName;
// console.log(acces)
const school = {
    schoolName: 'amrita sorkari pratomik biddaloy',
    address: 'amrita',
    subject:{
        bangla:'first and secend',
        english: 'first and secend',
        techers:{
            banglaTecher:'akmol',
            englishTecher : 'akil',
        }
    },
    student:{
        totalStudents: 20,
        class:'1 teke 10',
    }

}

const schools= school.subject.techers.englishTecher;
console.log(schools)

const school2 = {
    schoolName: 'amrita sorkari pratomik biddaloy',
    address: 'amrita',
    subject:{
        bangla:'first and secend',
        english: 'first and secend',
        techers:{
            banglaTecher:'akmol',
            englishTecher : 'akil',
        }
    },
    student:{
        totalStudents: 20,
        class:'1 teke 10',
    }

}
const rechick = school2?.student?.totalStudents;
console.log(rechick)
