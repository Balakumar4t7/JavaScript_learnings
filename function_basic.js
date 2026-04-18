let a=3;
let b=5;  // Variables are Declared here

function add( x, y){  // Regular funnction to add two numbers
    return x+y;
}
console.log(add(a,b)); 

let sum= (x,y) =>{  // this is called Arrow function , here it is used to add tow numbers
    return x+y;
}
console.log(sum(a,b));

let isEven =(x) =>{  // arrow function to return weather a number is even or odd
    if((x%2) === 0){
        return "it it even";
    }
    else{
        return "it is odd";
    }
}
console.log(isEven(4));

let firstName="Bala",lastName="Kumar";

let fullName = () =>{  // arrow fuction to return fullname by combineing the first and lastname with space between them
    return firstName+ " "+lastName;
}
console.log(fullName());