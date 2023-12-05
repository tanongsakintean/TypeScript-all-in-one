/// Utility Type

/// Partial

interface Assignment {
  studentId: string;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assign: Assignment,
  propsToUpdate: Partial<Assignment> /// this is some property in type for update value
): Assignment => {
  return {
    ...assign,
    ...propsToUpdate,
  };
};

const assign1: Assignment = {
  studentId: "compsci123",
  title: "Final Project",
  grade: 0,
};

console.log(updateAssignment(assign1, { grade: 95 }));
const assignGraded: Assignment = updateAssignment(assign1, { grade: 95 });

/// Required and Readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
  /// this is some property in type for required value not can be undefined
  // send to database, etc.
  return assign;
};

const assignVerified: Readonly<Assignment> = {
  // type is readonly can't not edit
  ...assignGraded,
  verified: true,
};
// assignVerified.grade = 88; error type can't edit type must readonly
console.log(assignGraded);
// recordAssignment(assignGraded); //! error because verified can be undefined
recordAssignment({ ...assignGraded, verified: true });

// Record
const hexColorMap: Record<string, string> = {
  // use for set key and value
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
  Sara: "D",
  Kelly: "A",
};

interface Grades {
  assign1: number;
  assign2: number;
}

const gradeData: Record<Students, Grades> = {
  Sara: { assign1: 85, assign2: 93 },
  Kelly: { assign1: 76, assign2: 15 },
};

/// Pick and Omit
type AssignResult = Pick<Assignment, "studentId" | "grade">; /// pick some property from Assignment for use new type AssignResult

const score: AssignResult = {
  studentId: "k123",
  grade: 85,
};

type AssignPreview = Omit<Assignment, "grade" | "verified">; /// can't use property in this is 'grade' and 'verified' other can use for new type

const preview: AssignPreview = {
  studentId: "k123",
  title: "Final Project",
};

// Exclude and Extract
type adjustedGrade = Exclude<LetterGrades, "U">; // remove some  property in this is "U" remove from LetterGrades
const students: Record<string, adjustedGrade> = { math: "D", eng: "A" };

type Shapes =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T3 = Exclude<Shapes, { kind: "circle" }>;

type hightGrade = Extract<LetterGrades, "A" | "B">; // select type is the same in type specific in this example "A" | "B" for create new type
const studentsHight: Record<string, hightGrade> = { math: "A", eng: "B" };

type Shape =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type T2 = Extract<Shape, { kind: "circle" }>; // select type is the same in type specific in this example select property kind:'circle' for create new type

// Nonnullable

type AllPossibleGrades = "Dave" | "John" | null | undefined;
type NamesOnly = NonNullable<AllPossibleGrades>; // select type must not null and undefined  this example type can be "Dave" | "John"

// ReturnType
// type newAssign = { title: string; points: number };

const createNewAssign = (title: string, points: number) => {
  return { title, points };
};

type NewAssign = ReturnType<typeof createNewAssign>; /// new type from function return type this in example can be return {title:string,points:number} from createNewAssign()

const tsAssign: NewAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);

// Parameters

type AssignParams = Parameters<typeof createNewAssign>; /// new type array from parameters  function in this example can be type string and number
const assignArgs: AssignParams = ["Generics", 100];

const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);

// Awaited - helps us with the ReturnType of a Promise

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const fetchUsers = async (): Promise<User[]> => {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => {
      return res.json();
    })
    .catch((err) => {
      if (err instanceof Error) console.log(err.message);
    });
  return data;
};

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; /// NEW type from function set async it focus type return from await in this example type is User[]
let user: FetchUsersReturnType = [];
fetchUsers().then((users) => {
  user = [...users];
  console.log(user);
});
