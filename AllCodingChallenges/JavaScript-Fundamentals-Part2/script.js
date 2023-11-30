////// Challenge 1 ////////
// const calcAvg = (sc1, sc2, sc3) => (sc1 + sc2 + sc3) / 3;
// console.log(calcAvg(3,4,5))

// const scoreDolphins = calcAvg(2, 15, 4);
// const scoreKoalas = calcAvg(30, 40, 20);
// console.log(scoreDolphins, scoreKoalas)

// const checkWinner = function(avgDolphins, avgKoalas){
//     if(avgDolphins >= 2 * avgKoalas){
//         console.log(`Dolphins win ${avgDolphins} vs ${avgKoalas}`);
//     }else if (avgKoalas >= 2*avgDolphins){
//         console.log(`Koalas win  ${avgKoalas} vs ${avgDolphins} `);
//     }else{
//         console.log("No team wins");
//     } 
// }

// console.log(checkWinner(scoreDolphins, scoreKoalas));




///// CHALLENGE 2 ///////
// function calcTip(billValue){
//     if(billValue >= 50 && billValue <= 300 ){
//         const tip = billValue * 0.15;
//         console.log(`The bill was ${billValue} the tip was ${tip}, and the total value is ${billValue+tip}`);
//     }else{
//         const tip = billValue * 0.20;
//         console.log(`The bill was ${billValue} the tip was ${tip}, and the total value is ${billValue+tip}`)
//         }
// }

// const bills = [125, 555, 44];

// const tips = [
//     calcTip(bills[0]),
//     calcTip(bills[1]),
//     calcTip(bills[2])
// ]

// console.log(tips);



/////// CHALLENGE 3 /////////
const Mark = {
    firstname: "Mark",
    lastname: "Miller",
    mass : 78,
    height: 1.69,

    calcBMI: function(){
        this.llogaritBMI = this.mass / (this.height ** 2);
        return `${this.firstname} has a bmi of ${this.llogaritBMI}`;
    }
}

const John = {
    firstname: "John",
    lastname: "Smith",
    mass : 92,
    height: 1.95,

    calcBMI: function(){
        this.llogaritBMI = this.mass / (this.height ** 2);
        return `${this.firstname} has a bmi of ${this.llogaritBMI}`;

    }
}

Mark.calcBMI();
John.calcBMI();
console.log(Mark.llogaritBMI, John.llogaritBMI)


console.log(`${John.llogaritBMI > Mark.llogaritBMI ? "John's Smiths bmi is higher than Marks" : " Mark' Miller's Bmi is Higher than john"}`)
