// interface User {
//     firstName:string,
//     lastName:string,
//     age:number
//     email?:string //here ? is for optional
// }

// function isLegal(user:User){
//     if(user.age>18){
//         return true;
//     }else{
//         return false
//     }
// }

// isLegal({
//     firstName:"laxman",
//     lastName:"Suthar",
//     age:23
// })


// Union
// type GreetARg = number | string;

// function greet(id:GreetARg){

// }

// greet(1);
// greet("1")

//Intersection

type Employee = {
    name:string;
    startDate:Date;
}

interface Manager {
    name:string;
    department:string;
}

type TeamLead = Employee & Manager;

const t:TeamLead = {
    name:"harkirat",
    department:"fklfj",
    startDate:new Date()
}