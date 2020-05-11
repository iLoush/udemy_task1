"use strict";

let money, time;

function start() {
   money = +prompt("What is your monthly budget?", "");
   time = prompt("Enter data in format YYYY-MM-DD", "");

   while (isNaN(money) ||
      money == "" ||
      money == null) {
      money = +prompt("What is your monthly budget?", "");
   }
}
start();

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: true,
   chooseExpenses: function () {
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
   },

   detectDayBudget: function () {
      appData.moneyPerDay = (appData.budget / 30).toFixed();
      alert(`Your daily budget is ${appData.moneyPerDay} eur`);
   },

   detectLevel: function () {
      if (appData.moneyPerDay <= 1000) {
         console.log("Minimum level");
      } else if (appData.moneyPerDay >= 1001 && appData.moneyPerDay <= 2000) {
         console.log("Middle level");
      } else if (appData.moneyPerDay >= 2001) {
         console.log("High level");
      } else {
         console.log("An error");
      }
   },

   checkSavings: function () {
      if (appData.savings == true) {
         let save = +prompt("What is amount of your savings?"),
            percentage = prompt("What percentage?");

         appData.monthIncome = (save / 100 / 12 * percentage).toFixed(1);
         alert(`Your monthly income from deposit is ${appData.monthIncome} eur`);
      }
   },

   chooseOptExpenses: function () {
      for (let i = 1; i <= 3; i++) {
         let questionOptExpenses = prompt("What is your optional expenses item?");
         appData.optionalExpenses[i] = questionOptExpenses;
      }
   },

   chooseIncome: function () {
      let items = prompt("What can be additional income? (Enter with comma)", "");

      if (typeof (items) != "string" ||
         items == "" || typeof (items) == null) {
         console.log("You enter wrong data");
      } else {
         appData.income = items.split(", ");
         appData.income.push(prompt("Maybe something else?"));
         appData.income.sort();
      }

      appData.income.forEach(function (itemmassive, i) {
         alert(`Additional income options: ${(i+1)} ${itemmassive}`);
      });
   }
};

for (let key in appData) {
   console.log(`There are data: ${key} ${appData[key]}`);
}


appData.moneyPerDay = (appData.budget / 30).toFixed();

alert(`Daily budget is: ${appData.moneyPerDay} eur`);

if (appData.moneyPerDay < 1000) {
   console.log("Minimum level");
} else if (appData.moneyPerDay > 1000 && appData.moneyPerDay < 2000) {
   console.log("Middle level");
} else if (appData.moneyPerDay > 2000) {
   console.log("High level");
} else {
   console.log("Something went wrong");
}

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