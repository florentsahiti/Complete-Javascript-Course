
/////// VARIABLAT /////////////
/*
let js = "amazing"; 
console.log(40 + 8 +23-10);

let firstName = "Florent";
console.log(firstName);
console.log(firstName); //4:20
console.log(firstName); 
console.log(firstName); 

//detyra e pare VALUES AND VARIABLES
let country = 'Kosova';
let continent = 'Europe';
let populations = 1780000;

console.log(country);
console.log(continent);
console.log(populations);
*/



/////// DATA TYPES /////////

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof javascriptIsFun);
// console.log(typeof 12);
// console.log(typeof "Lepri");

// javascriptIsFun = 'YES';
// console.log(typeof javascriptIsFun);

// //detyra dataTypes
// let isIsland = false;
// let language;

// console.log(isIsland);
// console.log(language);




///////////LET VAR AND CONST//////////////
// let age = 30;
// age = 31;

// const birthYear = 2003;
// birthYear = 1990;

// Detyrae e let var and cost


/////OPERATORS////////

// const now = 2037;
// const ageJonas = now - 1991;
// const ageFlorent = now - 2003;


// console.log(ageFlorent, ageJonas);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);
// // 2 ** 3 do thote 2 ne te treten = 2*2*2=8

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + " " + lastName);
 
// let x = 10 + 5; // 15
// x += 10; //  x = x + 10 = 25
// x *= 4 // x = x * 4 = 100
// x++ // x = x + 1;
// x-- // x = x - 1;
// console.log(x);


// console.log(ageFlorent < ageJonas);
// console.log(ageJonas >= 18);

//  const isFullAge = ageJonas >= 18;

//  console.log(now - 1991 > now - 2019);




/////// OPERATOR PRECEDENCE///////////

// const now = 2022;
// const ageJonas = now - 1991;
// const ageFlorent = now - 2003;

// console.log(now - 1991 > now - 2019);

// const averageAge = (ageFlorent + ageJonas) / 2
// console.log(ageFlorent, ageJonas)

//ASSIGNMENTS ME OPERATORE//////
// 1
// let myCountryPop = 1800000;
// console.log(myCountryPop / 2);
// // 2 e thjeshte
// // 3
// let FinlandPop = 6000000;
// console.log(myCountryPop > FinlandPop);
// //4
// const avgOfRandomPopulation = 33000000;
// console.log(myCountryPop < avgOfRandomPopulation );
// //5
// console.log("Kosova eshte ne Evrope dhe ka nje popullsi prej " + myCountryPop + " ku e flasin gjuhen sshqipe " );




///////STRING AND TEMPLATE LITERALS/////////

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const currentYear = 2023;

// const jonas = "I'm " + firstName + ', a ' + (currentYear - birthYear) + ' years old' + job + '!';
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${currentYear - birthYear} year old ${job}!`;
// console.log(jonasNew);


////////// IF/ELSE STATEMENTS /////////

// const age = 15;

// if( age >= 18){
//     console.log("Sarah can start driving 👍");
// }else{
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young wait another ${yearsLeft} years;`)
// }


// // Defino popullsinë e Kosovës
let popullsiaKosoves = 1.8; // në milionë

// Kontrollo nëse popullsia është mbi ose nën 33 milionë
// if (popullsiaKosoves > 33) {
//     console.log("Popullsia e Kosovës është mbi mesatare");
// } else {
//     console.log("Popullsia e Kosovës është për 30 milionë më poshtë mesatares");
// }

// // Ndrysho popullsinë në 130 dhe shiko rezultatin
// popullsiaKosoves = 130;

// if (popullsiaKosoves > 33) {
//     console.log("Popullsia e Kosovës është mbi mesatare");
// } else {
//     console.log("Popullsia e Kosovës është për 30 milionë më poshtë mesatares");
// }

// // Ktheje popullsinë në vlerën origjinale
// popullsiaKosoves = 1.8;

// if (popullsiaKosoves > 33) {
//     console.log("Popullsia e Kosovës është mbi mesatare");
// } else {
//     console.log("Popullsia e Kosovës është për 30 milionë më poshtë mesatares");
// }



// const birthYear = 1991;

// let century;
// if(birthYear <= 2000){
//     century = 20;
// }else{
//     century = 21;
// }

// console.log(century);



//////// Type Conversion and Coercion /////////

// //type conversion
// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(inputYear + 18);

// console.log(Number('Jonas'));
// console.log(typeof NaN);


// //type coercion
// console.log('I am ' + 23  + " years old ");
// console.log('23' - '10' - 3);
// console.log('23' / '2');

// let n = '1' + 1
// n = n - 1;
// console.log(n);




//////Truthy and False Values //////////
// 5 falsy values : 0, '', undefined, null, NaN

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({})); 

// const money = 0;

// if(money){
//     console.log("Don't spend it all: ");
// }else{
//     console.log("You should get a job");
// }


// let height;
// if(height){
//     console.log('yay! height is defined');
// }else{
//     console.log('height is undefined')
// }



////// EQUALITY OPERATORS ///////
// const age = 18;
// if( age === 18){
//     console.log('you just became an adult');
// }

// // === ma i mir o qeky per arsyje qe e kontrollone edhe vleren edhe tipin e te dhenave

// const favorite = Number(prompt("What s your favorite number"));
// console.log(favorite);
// console.log(typeof favorite);

// if(favorite === 23){
//     console.log('COOL! 23 is an amazing number');
// }else if(favorite === 7){
//     console.log('Cool! 7 is also a cool number');
// }else{
//     console.log('Number is not 23 or 7');
// }

// if(favorite !== 23){
//     console.log("why not 23");
// }


/////// BOOLEAN LOGIC ///////////

////// LOGICAL OPERATORS ////////
// const hasDriversLicense = true; //A
// const hasGoodVision = true; //B

// console.log(hasDriversLicense && hasGoodVision);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive){
//     console.log("Sarah is able to drive");
// }else{
//     console.log("Someone else should drive");
// }



/////// SWITCH //////////
// const day = 'monday';

// switch(day){
//     case 'monday': // day === 'monday'
//         console.log('Plan course structure');
//         console.log('Go to coding meetup');
//         break
//     case 'tuesday':
//         console.log('theory videos');
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('Write code examples');
//         break;
//     case 'friday':
//         console.log('Record videos');
//         break;    
//     case 'saturday':
//     case 'sunday':
//         console.log('enjoy the weekend')
//         break;
//     default:
//         console.log('Not a valid day');

// }
// let language = 'spanish'; // Ndrysho këtë vlerë për të provuar gjuhë të tjera

// switch (language) {
//     case 'chinese':
//     case 'mandarin':
//         console.log('MOST number of native speakers!');
//         break;
//     case 'spanish':
//         console.log('2nd place in number of native speakers');
//         break;
//     case 'english':
//         console.log('3rd place');
//         break;
//     case 'hindi':
//         console.log('Number 4');
//         break;
//     case 'arabic':
//         console.log('5th most spoken language');
//         break;
//     default:
//         console.log('Great language too!');
//         break;
// }



/////////// conditional ternary operator //////////

// const age = 12;
// age >= 18 ? console.log('I like to drink vine ') : 
// console.log('I like to drink water');

// const drink = age >= 18 ? 'wine' : 'wat  er';
// console.log(drink);

// let drink2;
// if(age>=18){
//     drink2 = 'wine';
// }else{
//     drink2 = 'water';
// }
// console.log(drink2);

// console.log(`I like to drink ${age >= 18? 'wine' : 'water' }`);