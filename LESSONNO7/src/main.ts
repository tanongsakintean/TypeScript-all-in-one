/// Index Signatures

// interface TransactionObj {
//   readonly [key: string]: number;
// }
interface TransactionObj {
  readonly [key: string]: number;
  // Pizza: number;
  // Books: number;
  // Job: number;
}

const todaysTransactions: TransactionObj = {
  Pizza: 10,
  Books: 5,
  Job: 5,
};

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions["Pizza"]);

let prop: string = "Pizza";
console.log(todaysTransactions[prop]); // typescript can't specific show index of const if don't use [key:string] : number

const todaysNet = (transactions: TransactionObj): number => {
  let total = 0;
  for (const transaction in transactions) {
    total += transactions[transaction];
  }
  return total;
};

console.log(todaysNet(todaysTransactions));

// todaysTransactions.Pizza = 40; //!  can't to assign  because in type  set to readonly

// console.log(todaysTransactions["Dave"]); /// is undefined because typescript don't know that key have value but know must return number
/////////////////////////////////////////

interface Student {
  // [key: string]: string | number | number[] | undefined;
  name: string;
  GPA: number;
  classes?: number[];
}

const student: Student = {
  name: "beer",
  GPA: 3.5,
  classes: [100, 200],
};

// console.log(student.test);

for (const key in student) {
  console.log(`${key}: ${student[key as keyof Student]}`); // you can use as keyof for typescript can know
}

Object.keys(student).map((key) => {
  console.log(student[key as keyof typeof student]); // you can use as keyof  typeof for typescript can know
});

const logStudentKey = (student: Student, key: keyof Student): void => {
  console.log(`Student ${key}: ${student[key]}`);
};

logStudentKey(student, "GPA");
logStudentKey(student, "name");
logStudentKey(student, "classes");

////////////////////////////////////

// interface Incomes {
// [key: 'salary' ]: number; /// interface can't specific type that but can use in type
// }

type streams = "salary" | "bonus" | "sidehustle"; // this is key

type Incomes = Record<streams, number | string>; /// set new type must name is Record  extends stream key and value can be number | string

let monthlyIncomes: Incomes = {
  salary: "5,000",
  bonus: 322,
  sidehustle: 22,
};

for (const revenue in monthlyIncomes) {
  console.log(monthlyIncomes[revenue as keyof Incomes]);
}
