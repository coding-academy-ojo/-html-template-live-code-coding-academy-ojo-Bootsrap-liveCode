alert("404 error")
confirm("you can Enter to our website")

let name = prompt("pls enter your name");

const greeting = '   Hello world!   ';
console.log(greeting);
console.log(greeting.trim());

let playerOne = "paper";
let computer = "rock";
if(playerOne ===computer){
    console.log("Tie game!");
}else if(playerOne ==="rock"){
    if(computer==="paper"){
        console.log("computer win");

    }else{
        console.log("playerOne wins");
    }
}else if(playerOne ==="paper"){
    if(computer==="scissors"){
            console.log("computer win");

    }else{
    console.log("playerOne wins");
    }
}else if(playerOne ==="scissors"){
    if(computer==="rock"){
        console.log("computer win");

    }else{
        console.log("playerOne wins");
    }
}     




let soup = " noodle soup";
let response = soup ? "yes, we have soup." :"Sorry, no soup today";
console.log(response);

let soup = " noodle soup";
let isCustomerBanned = false;
let soupAccess = isCustomerBanned
?"sorry, no soup today for you"
:soup
?`yes, we have ${soup} today.`
:"sorry,no soup today";
console.log(soupAccess);



let testScore = prompt("pls enter your score");
let mygrade = 
testScore >= 89
? "A"
:testScore >= 79
?"B"  
:testScore >= 69
?"C"
:testScore >= 59
?"D"
:"F"
alert(`My test  grade  is  a ${mygrade}`);