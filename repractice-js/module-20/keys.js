const college ={
    name:'brindabon govt college',
    addrese:'hobigonj',
    department:['BA', 'BSS', 'BBA', 'BBS'],
    allSubject:{
        ba:['bangla', 'english', 'islamic history'],
        bss:['bangla', 'english', 'islamic history'],
        bbs:{
            bangla:'optional',
            history:'mendetory',
            mendetory:{
                bangla:'mendetory',
                english:'mendetory',
            }
        }
    }
}
delete college.allSubject.ba;
console.log(college)
// const keys = Object.keys(college.allSubject.bbs);
// console.log(keys)
// const value = Object.values(college.allSubject.bbs)
// console.log(value)
// college.department[1] = 'BSC';
// console.log(college.department[1])
