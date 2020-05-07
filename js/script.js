let money = prompt("What is your monthly budget?", "");
let time = prompt("Enter data in format YYYY-MM-DD", "");

let appData = {
   budget: money,
   timeData: time,
   expenses: {},
   optionalExpenses: {},
   income: [],
   savings: false
};

let userQuestion1 = prompt("Enter must expense item in this month?", ""),
   userQuestion2 = prompt("How much is all expenses", ""),
   userQuestion3 = prompt("Enter must expense item in this month?", ""),
   userQuestion4 = prompt("How much is all expenses", "");

appData.expenses[userQuestion1] = userQuestion2;
appData.expenses[userQuestion3] = userQuestion4;

alert(appData.budget / 30);