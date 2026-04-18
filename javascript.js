
// complex objects
let student = {
    name : 'Balakumar',
    dept : 'CSE',
    age:'20',

    skills :{
            front_end:'HTMl , css',
            back_end:'java',
            db : 'MySQL'
    }

}

for(let key in student.skills){
    console.log(key,student.skills[key]);
}