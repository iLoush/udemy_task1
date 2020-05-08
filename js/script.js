"use strict";

let money = +prompt("What is your monthly budget?", "");
let time = prompt("Enter data in format YYYY-MM-DD", "");

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};

// loop while
/*
let i = 0;
while (i < 2) {
   let a = prompt("Enter must cost name in this month?", ""),
      b = prompt("How much is it", "");

      if (typeof (a) === "string" &&
      typeof (a) != null &&
      typeof (b) != null &&
      a != " " &&
      b != " " &&
      a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
   } else {
      console.log("Wrong");
      i--;
   }
   i++;
}
*/

// loop do ... while
/*
let i = 0;
do {
   let a = prompt("Enter must cost name in this month?", ""),
      b = prompt("How much is it", "");

      if (typeof (a) === "string" &&
      typeof (a) != null &&
      typeof (b) != null &&
      a != " " &&
      b != " " &&
      a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
   } else {
      console.log("Wrong");
      i--;
   }
   i++;
} while(i<2);
*/

for (let i = 0; i < 2; i++) {
   let a = prompt("Enter must cost name in this month?", ""),
      b = prompt("How much is it", "");

   if (typeof (a) === "string" &&
      typeof (a) != null &&
      typeof (b) != null &&
      a != " " &&
      b != " " &&
      a.length < 50) {
      console.log("done");
      appData.expenses[a] = b;
   } else {
      console.log("Wrong");
      i--;
   }
}

appData.moneyPerDay = appData.budget / 30;

alert(`Daily budget is: ${appData.moneyPerDay} eur`);

if (appData.moneyPerDay < 1000) {
   console.log("Mininum level");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
   console.log("Middle level");
} else if (appData.moneyPerDay > 2000) {
   console.log("High level");
} else {
   console.log("Something went wrong");
}