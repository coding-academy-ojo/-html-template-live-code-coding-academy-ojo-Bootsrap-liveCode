//functions 

//methods  = built in functions 
let name = "AYHAM".toLocaleLowerCase();
let address ="amman".toUpperCase();

console.log(name);
console.log(address);

console.log(Math.floor(Math.random() * 100));

//function declarations syntax
//code block
//add parameters 

function sum(num1,num2){
return num1 + num2;
}

console.log(sum(2,6));
console.log(sum(42,6));
console.log(sum(2,56));


function multi(num1,num2){
    if(num2 === undefined){
        return num1 *num1;
    }

    return num1 * num2;
    }
    
    console.log(multi(2));

function getUserNameFromEmail(email){
    return email.slice(0, email.indexOf("@"));
}    

console.log(getUserNameFromEmail('ayhamZaid@gmail.com'));
console.log(getUserNameFromEmail('ahmad@yahoo.com'));
console.log(getUserNameFromEmail('sara@hotmail.com'));


const toProperCase = (name) =>{
    return name.charAt(0).toUpperCase() + name.slice(1).toLocaleLowerCase();
};

console.log(toProperCase("OrAnGeAcDemEY"));


//Array

const myArray = [];


//var ,let ,const 
//globle Scope
var x =1; //function scope 
let y =2; //block scoped
const z =3;

console.log(`globle:${x}`);
console.log(`globle:${y}`);
console.log(`globle:${z}`);

function myFunc(){
    var x = 10;
    const z =5;
    console.log(`function: ${x}`);
    console.log(`function: ${y}`);
    console.log(`function: ${z}`);

    {
        var x =11;
        const z = 6;
        console.log(`block: ${x}`);
        console.log(`block: ${y}`);
        console.log(`block: ${z}`);

    }
}
myFunc();



