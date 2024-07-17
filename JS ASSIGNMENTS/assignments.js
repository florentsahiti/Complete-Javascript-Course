'use strict'

///// functions ////////
// function describeCountry(country, population, capitalCity){ 
//     return `${country} has ${population} milion people and its capital city is ${capitalCity}`
     
// }

// const shteti1 = describeCountry("Finlanda", 126, "helsinki");
// console.log(shteti1);

// const shteti2 = describeCountry("suedi", 62, "stakholm");
// console.log(shteti2);

// const shteti3 = describeCountry("Norway", 26, "Oslo");
// console.log(shteti3);


///////function declarations vs expression


// function percentageOfWorld(population){
//     return `China has ${population} million people so it's about ${(population / 7900)*100} % of the world population`
// }

// const kina = percentageOfWorld(1441);
// console.log(kina)


// const prq2 = function(population1){
//     return `China has ${population1} million people so it's about ${(population1 / 7900)*100} % of the world population`

// }

// const kina2 = prq2(322);
// console.log(kina2);

// function calling other function
const percentageOfWorld = (population) => {
    return (population / 7900) * 100
}


// function describePopulation(country, population){
//     return `${country} has ${population} million people which is about ${percentageOfWorld(1440)} % of the world population`;

// }

// console.log(describePopulation("China", 1441))


///////INTRODUCTION TO ARRAY/////////


// const populations = [1440, 1521, 1444, 1999]

// if(populations.length == 4){
//     console.log("TRUE");
// }else{
//     console.log("False");
// }

// const percentages = [
//     percentageOfWorld(populations[0]),
//     percentageOfWorld(populations[1]),
//     percentageOfWorld(populations[2]),
//     percentageOfWorld(populations[3])
// ]
// console.log(percentages);


// const fqinjet = ["Serbia","MaliZi", "Maqedonia", "Shqiperia"]
// console.log(fqinjet);
// const shtetiAme = fqinjet[3];
// console.log(shtetiAme);

// fqinjet.push("Utopia");
// console.log(fqinjet);

// fqinjet.pop(fqinjet.length - 1);
// console.log(fqinjet);

// if(!fqinjet.includes("Germany")){
//     console.log("Probably not a central european counry");
// }


// Object
// const myCountry = {
//     country: "Kosova",
//     capital: "Prishtina",
//     Language: "Shqip",
//     Population: 1.8,
//     Neighbours: ["Shqiperia", "Maqedonia", "Mali i zi"]

        
// }

// console.log(`${myCountry.country} has ${myCountry.Population} people ${myCountry.Language} people, ${myCountry.Neighbours.length} neighbooring countries and a capital called ${myCountry.capital}`)

// myCountry.Population += 2;
// console.log(myCountry.Population);

// myCountry['Population'] -= 2;
// console.log(myCountry.Population);


// Object methaod
// const myCountry = {
//     country: "Kosova",
//     capital: "Prishtina",
//     Language: "Shqip",
//     Population: 1.8,
//     Neighbours: ["Shqiperia", "Maqedonia", "Mali i zi"],

//     describe: function(){
//         return `${this.country} has ${this.Population} milion people`
//     },

//     checkIsIsland: function(){
//         this.isIsland;
//         return `${this.Neighbours === 0 ? true : false }`;
//     }
        
// }


// console.log(myCountry.checkIsIsland());
// console.log(myCountry.describe());


//The for loop
//1. There are elections in your country! In a small town, there are only 50 voters. 
// Use a for loop to simulate the 50 people voting, by logging a string like this to 
// the console (for numbers 1 to 50): 'Voter number 1 is currently voting

// for( let voters = 1; voters <= 50; voters++){
//     console.log(`Voter Number ${voters} is currently voting`)
// }


// Developer skills and editor setup
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];


const printForecast = function(arr){
    let str = '';
    for(let i = 0; i<arr.length; i++){
        str = str + `${arr[i]}C in ${i + 1} days ... `
    }
    console.log('...'  +  str)
} 

printForecast(data1);
