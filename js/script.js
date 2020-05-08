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
   savings: true
};

function chooseExpenses() {
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
}
chooseExpenses();

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

function checkSavings() {
   if (appData.savings == true) {
      let save = +prompt("What is amount of your savings?"),
         percentage = prompt("What percentage?");

      appData.monthIncome = (save / 100 / 12 * percentage).toFixed(1);
      alert(`Your monthly income from deposit is ${appData.monthIncome} eur`);
   }
}
checkSavings();

// function for daily budget
function detectDayBudget() {
   appData.moneyPerDay = (appData.budget / 30).toFixed();
   alert(`Your daily budget is ${appData.moneyPerDay} eur`);
}
detectDayBudget();

// function for income level
function detectLevel() {
   if (appData.moneyPerDay <= 1000) {
      console.log("Minimum level");
   } else if (appData.moneyPerDay >= 1001 && appData.moneyPerDay <= 2000) {
      console.log("Middle level");
   } else if (appData.moneyPerDay >= 2001) {
      console.log("High level");
   } else {
      console.log("An error");
   }
}
detectLevel();

// function for not mandatory expenses
function chooseOptExpenses() {
   for (let i = 1; i <= 3; i++) {
      let questionOptExpenses = prompt("What is your optional expenses item?");
      appData.optionalExpenses[i] = questionOptExpenses;
   }
}
chooseOptExpenses();

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