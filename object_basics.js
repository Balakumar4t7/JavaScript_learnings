
// getting started with objects in Javascript 

const profile ={  // an onbject named profile with atributes like name, age, city and sills as an array and also an greet arraw function
    name : "Bala",
    age : 21,
    city : "Chennai",
    skills : ["HTML","CSS","JavaScript"],

    greet :() => { //method stored in greet
        return `HI i am ${profile.name} , from ${profile.city}`
    }
}
console.log(profile.name);
console.log(profile.greet()); 


profile.isEmployed=false;  // Adding a new property to the existing Object 
console.log(profile);


let student =[    // array of size 3 holdin g three sudent object with properties like m=name,mark and grade
    {name:"bala" , mark : 80 , grade:"A"},
    {name:"Gopal", mark : 35 , grade : "E"},
    {name:"Luffy", mark : 39 , grade : "E"}
]

let validate =(student) =>{   // method to  accept an array and return an array who has grade "E"
    return student.filter(n => n.grade ==="E"); // usinf an Array method .filter() to filter the student 
}
console.log(validate(student)); // Displaying the result by calling the method


let {name,age,city} = profile;  // this is Object Destructing (focused on storeing the object property values in a new variable)
console.log(profile);
console.log(name,age,city);
