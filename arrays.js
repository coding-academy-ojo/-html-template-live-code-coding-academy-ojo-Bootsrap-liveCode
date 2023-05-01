//Arrays

const myArray = [];
//add elements to an array

myArray[0] = "Ayham";
myArray[1] = 1123;
myArray[2] = true;
myArray[3] = ["Ali" ,"Ahmad"];
//push
myArray.push("school");
console.log(myArray);
//unshift
myArray.unshift(466648);
//pop
myArray.pop();

console.log(myArray);
//length 
console.log(myArray.length);

//last element in an array
console.log(myArray[myArray.length-1]);

//shift -remove item from first of array
const firstItem = myArray.shift();
console.log(firstItem);
console.log(myArray);
console.log(myArray[1]);

//delete
delete myArray[2];
console.log(myArray);


//concat

const ar1 = ["A" , "B" , "C"];
const ar2 = ["D" , "E" , "F"];
const newArray = ar2.concat(ar1);
console.log(newArray);

//spraed oprateor

const newArray2 = [...ar1 , ...ar2]
console.log(newArray2);


