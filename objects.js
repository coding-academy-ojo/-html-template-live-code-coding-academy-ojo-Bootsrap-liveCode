const myObj = {name : "alaa"};
console.log(myObj.name);

const anotherObj = {
    hasAjob : true,
    age:40,
    hobbies:["Eat","sleep","Code"],
    beverage:{
        morning:"Coffe",
        afternoon:"Tea"
    },
    action:function(){
        return `this time for ${anotherObj.beverage.afternoon}`;
    }
};
console.log(anotherObj.hasAjob);
console.log(anotherObj.age);
console.log(anotherObj.beverage.afternoon);
console.log(anotherObj.action());




