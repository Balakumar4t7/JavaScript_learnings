const nums= [3, 7, 2, 9, 4, 11, 6, 8, 1, 5]; 
 
let nums_Greater = nums.filter(n => n>5); // used filter method to get values greater than 5
console.log(nums_Greater);  // DIsplaying the result

let sq_nums= nums.map(n => n*n); // used map to create an new array which is a square of the nums Array
console.log(sq_nums);

nums.forEach(n => console.log("Number : " + n)); // using for each method to print the numbers

let num= nums.find(n => n>8) // used find() method to find the next number greater than 8
console.log(num);

const names = ["Bala", "Gopal" , "Zoro","Luffy"];
names.forEach(n => console.log(n+" is a Developer"));
let names_dev= names.map(n => n+ " is a Developer");
console.log(names_dev);




