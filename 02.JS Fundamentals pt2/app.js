'use strict';

///// ACTIVATING STRICT MODE ////////
// let hasDriversLicense = false;
// const passTest = true;

// if(passTest){
//     hasDriversLicense = true;
// }
// if(hasDriversLicense){
//     console.log("I can drive :D");
// }

// const intereface ='Audio';





///// FUNCTIONS //////////
function logger(){
    console.log("My name is Jonas");
}

//calling / running / invoking function
logger();
logger();
logger();


function fruitProcessor(apples, orange){
    const juice = `Juice with ${apples} apples and ${orange} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice);

const orangeJuice = fruitProcessor(0, 5)
console.log(orangeJuice)





/////// FUNCTION DELCARATION VS EXPRESSION ///////////
//declaration
// function calcAge1(birthyear){
//     return 2023 - birthyear;
// }

// const moshaJem = calcAge1(2003);
// console.log(moshaJem);


// //expression
// const calcAge2 = function (birthyear){
//     return 2023 - birthyear;
// }

// const moshaJonasit = calcAge2(1993);
// console.log(moshaJonasit, moshaJem )



// Arrow function
// const calcAge2 = function (birthyear){
//         return 2023 - birthyear;
// }

//how we write arrow function
// const calcAge3 = birthyear => 2037 - birthyear;
// const age3 = calcAge3(2003);
// console.log(age3);

// const yearUntilRetirment = (birthyear, firstName) => {
//     const age = 2023 - birthyear;
//     const retirment = 65 - age;
//     // return retirment
//     return `${firstName} retires for ${retirment} years`
// }

// console.log(yearUntilRetirment(2003, "Florent"));
// console.log(yearUntilRetirment(1967, "hashim"));

// const emriVaribales = (parametri1, parametri2) => {
//     return e kthen ni string ktu
// }
// pastaj ktu e thirr emrivariables/funksionit(parametri1, parametri2);




///////// Function calling other function ////////////

// function cutFruitPieces(fruit){
//     return fruit*4;
// }



// function fruitProcessor(apples, orange){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(orange);

//     const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges.`;
//     return juice;
// }

// console.log(fruitProcessor(2,3));



///// REVIVING FUNCTION ////////
// const calcAge = function(birthyear){
//     return 2037 - birthyear;
// }

// const yearUntilRetirment = function (birthyear, firstName){
//     const age = calcAge(birthyear);
//     const retirment = 65 - age;
    
//     if(retirment > 0){
//         return retirment;
//     }else{
//         return -1;
//     }


    

//     // return `${firstName} retires for ${retirment} years`;
// }

// console.log(yearUntilRetirment(1991, 'jonas'));


////////// ARRAYS ///////////////

// // literal syntax
// const friends = ['Micheal', 'Steven', 'Peter'];
// console.log(friends);

// // menyra e dyte e array
// // const years = new Array(1999, 1994, 2008, 2020);


// console.log(friends[0]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = 'Jay';
// console.log(friends);

// const firstName = "Florent";
// const florent = [firstName, 'Sahiti', 2023 - 2003];
// console.log(florent);

// // exercise
// const calcAge = function(birthyear){
//     return 2037 - birthyear;
// }

// const years = [1990, 1967, 2002, 2010, 2018];

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);
// console.log(age1, age2, age3);

// const ages = [age1, age2, age3]
// console.log(ages);




/////// BASIC ARRAY OPERATIONS (METHODS)/////////////
// const friends = ['Micheal', 'Steven', 'Peter'];
// //add elements
// const  newLength = friends.push('Jay');
// console.log(friends);
// console.log(newLength);

// friends.unshift('john');
// console.log(friends);

// //remove elements
// friends.pop(); //last
// const popped = friends.pop();
// console.log(popped);
// console.log(friends);


// friends.shift();//first
// console.log(friends);


// console.log(friends.indexOf('Steven'))

// friends.push(23);
// console.log(friends.includes('Steven'));
// console.log(friends.includes('Bob'));
// console.log(friends.includes('23'));


// if(friends.includes('Steven')){
//     console.log("You haave a friend called Peter");
// }



//////// OBJECTS ///////

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// }


/////// Dot vs Bracket Notation //////////
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     age: 2037 - 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven']
// }

// console.log(jonas)

// console.log(jonas.lastName);
// console.log(jonas['lastName']);

// const nameKey = 'Name';
// console.log(jonas['first' + nameKey]);
// console.log(jonas['last' + nameKey]);

// const interestedIn = prompt("What do you want to know about jonas? choose between firstname, lastname, age, job, and friends ");

// if(jonas[interestedIn]){
//     console.log(jonas[interestedIn]);
// }else{
//     console.log("Wrong reques!choose properly");
// }

// jonas.location = 'Portugal';
// jonas["twitter"] = '@jonaschemtd';
// console.log(jonas);

// // Challenge
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends and his bestfriend is ${jonas.friends[0]}`)


////////// OBJECT METHOD ////////////////
// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schmedtmann',
//     birthYear: 1991,
//     job: 'teacher',
//     friends: ['Micheal', 'Peter', 'Steven'],
//     hasDriversLicense: true,

//     // calcAge: function(birthYear){
//     //     return 2037 - birthYear;
//     // }
//     //  calcAge: function(){

//     //     return 2037 - this.birthYear;
//     // }

//       calcAge: function(){
//         this.age = 2037 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function(){
//         return  `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's licencse`
//     }

// };

// console.log(jonas.calcAge());

// console.log(jonas.age);
// console.log(jonas.age);
// console.log(jonas.age);


// ///CHALLENGE
// //"Jonas is a 46-year old teacher, and he has a driver's license";
// console.log(jonas.getSummary());




/////// FOR LOOP /////////
// for loop keeps running while condition is TRUE
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetiton  ${rep}`);
// }



/////// Looping Arrays, Breaking and Continuing /////////
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//      2037 - 1991,
//      'teacher',
//      ['Micheal', 'Peter', 'Steven']
// ];


// const types = [];


// for(let i = 0; i < jonas.length; i++){
//     //reaading types array
//     console.log(jonas[i], typeof jonas[i]);

//     //fillling types array
//     // types[i] = typeof jonas[i];

//     types.push(typeof jonas[i]);
    
// }

// console.log(types)


// const years = [1991, 2007, 1969, 2020];
// const ages = [];

// for (let i = 0; i < years.length; i++){
//     ages.push(2037 - years[i]);
// }

// console.log(ages)



// // Continue and break
// console.log("=======ONLY STRINGS ===========")
// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] !== 'string') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }

// // Continue and break
// console.log("=======break with number===========")
// for(let i = 0; i < jonas.length; i++){
//     if(typeof jonas[i] === 'number') continue;
//     console.log(jonas[i], typeof jonas[i]);
// }



/////LOOPING BACKWARDS AND LOOPS IN LOOPS ////////////
// const jonas = [
//     'Jonas',
//     'Schmedtmann',
//      2037 - 1991,
//      'teacher',
//      ['Micheal', 'Peter', 'Steven']
// ];


// for(let i = jonas.length - 1; i >= 0; i--){
//     console.log(i, jonas[i]);
// }

// for(let exercise = 1; exercise < 4; exercise++){
//     console.log(`----------Starting exercise ${exercise} `)

//     for( let rep = 1; rep < 6; rep++){
//         console.log(`Exercise ${exercise} Lifting weight repetion ${rep} `);
//     }
// }


//////// WHILE LOOP ////////
// for(let rep = 1; rep <= 10; rep++){
//     console.log(`Lifting weights repetiton  ${rep}`);
// }
 
// let rep = 1
// while (rep <=10){
//     console.log(`Lifting weights repetiton  ${rep}`);
//     rep++;
// }


// let dice = Math.trunc(Math.random() * 6) + 1;


// while (dice !== 6){
//     console.log(`You rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) + 1;
//     if(dice=== 6) console.log('Loop is about to end')
// }