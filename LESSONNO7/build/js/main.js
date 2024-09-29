"use strict";
/// Index Signatures
const todaysTransactions = {
    Pizza: 10,
    Books: 5,
    Job: 5,
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);
let prop = "Pizza";
console.log("Pizza = ", todaysTransactions[prop]); // typescript can't specific show index of const if don't use [key:string] : number
const todaysNet = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNet(todaysTransactions));
const student = {
    name: "beer",
    GPA: 3.5,
    classes: [100, 200],
};
// console.log(student.test);
for (const key in student) {
    console.log(`${key}: ${student[key]}`); // you can use as keyof for typescript can know
}
Object.keys(student).map((key) => {
    console.log(student[key]); // you can use as keyof  typeof for typescript can know
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, "GPA");
logStudentKey(student, "name");
logStudentKey(student, "classes");
let monthlyIncomes = {
    salary: "5,000",
    bonus: 322,
    sidehustle: 22,
};
for (const revenue in monthlyIncomes) {
    console.log(monthlyIncomes[revenue]);
}
