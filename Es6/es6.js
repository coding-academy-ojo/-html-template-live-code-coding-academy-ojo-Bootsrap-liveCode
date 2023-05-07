// let var const 
function varexample(){
    var x = 10;
    if(true){
    var x =20;
    console.log(x);
}
console.log(x);
}
varexample();

//let example
function letexample(){
    let x = 10;
    if(true){
    let x =20;
    console.log(x);
}
console.log(x);
}
letexample();

//const Example 
function constexample(){
    const x = 10;
    if(true){
    const x =20;
    console.log(x);
}
console.log(x);
}
constexample();


//Arrow function 

let sumoftwoNumber  = (a,b) => a + b ;
console.log(sumoftwoNumber(10,20));

//multi line string 

let sayHallo = `Ahamd say Hello 
To Wajdi and togther play games
in playground`
console.log(sayHallo);                


//defult parameters 
//es5
let calcArea  = function (heigt  = 50, width = 60){

    // heigt = heigt || 50;
    // width = width || 60;

    let result = heigt * width;
    return result;

}
console.log(calcArea(80,90));

//Destructuring Assignment
//Array
let frutis = ["Banana" , "Apple"];
let [a , b] = frutis;
console.log(b);


//class 

// class UserProfile{
//     constructor(firstName,lastName){
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }

//     getName(){
//         console.log(`The full name  is ${this.firstName} ${this.lastName}`);//templet literals 
//     }
// }

    // let obj = new UserProfile('Alaa','Almuhsen');
    // obj.getName();

//modules    


import {UserProfile} from '.ex.js';
let obj1 = new UserProfile('Ayham' ,'Zaid');
obj1.getName();










