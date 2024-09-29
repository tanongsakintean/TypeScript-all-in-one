// class exampele student 
interface Student {
  _studentId:string;
  _firstName:string;
  _lastName:string;
  _age:number;
  getFullName:()=>string;
}

class student implements Student {
  _firstName = "";
  _lastName = "";
  _age = 0;
  _studentId = "";

  constructor(firstName: string,lastName: string,age:number,studentId:string){
    this._age = age;
    this._studentId = studentId;
    this._firstName = firstName;
    this._lastName = lastName;
  }

  getFullName(){
    return this._firstName +" " +this._lastName
  }
}

let stu1 = new student("tanongsak","intean",23,"6406021622095")
console.log(stu1.getFullName());





//  optional properties

interface Users  {
  username:string;
  email?:string;
}

let users:Users = { 
  username:"tanongsakintean" 
}

users.email //Users.email?: string | undefined


//generics type 
function increment<T,U>(a:T[], b:U):number {
    let result:number = 0;
    if (typeof a.every(it=>typeof it == "number")) {
        result = (a as number[]).reduce((p,b)=>p+b) 
    } 
  return (b as number) + result
}

function map<T,U>(arr: T[], callback:(arr:T )=> U):U[] { 
   return arr.map(callback)
}

function sort<T>(arr:T[],callback:(a:T ,b:T)=>number):T[] {
  return arr.sort(callback)
}

interface Queue<T> {
  enqueue:(v:T)=>T[];
  dequeue:()=>T[];
  data:T[]
}

const queue:Queue<string> = {
  data:[],
  enqueue(v) {
    this.data.push(v);
    return this.data;
  },
  dequeue() {
      this.data.shift();
      return this.data;
  },
}

queue.enqueue("122");
queue.enqueue("1122")
console.log(queue.data);



console.log(sort([2,3,41,6,7,8,1,5,7,0],(a,b)=>a-b));
console.log(sort([2,3,41,6,7,8,1,5,7,0],(a,b)=>b-a));


console.log(map(["1","2","3"],(s)=>parseInt(s)))

console.log(increment([1,2,3],5))
 
//intersaction type
interface Color {
  color:string;
}

interface Size {
  width:string;
  height:string;
}

interface Area<T> {
  area:(a:number,b:number)=> T
}

type Ractangle =  Color & Size & Area<number>

const reactangle:Ractangle = {
  color:"red",
  width:"20",
  height:"30",
  area(a, b) {
      return 1/2 * a * b
  },
}


console.log("area reactangle = ",reactangle.area(12,20))

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
  propsToUpdate: Partial<Assignment> /// this is some property in type from type in Partial in this case is Assignment
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

type FetchUsersReturnType = Awaited<ReturnType<typeof fetchUsers>>; /// NEW type from function set async it focus type return from await 100% in this example type is User[]
let user: FetchUsersReturnType = [];
fetchUsers().then((users) => {
  user = [...users];
  console.log(user);
});


//Partial type === optional properties 

type Animal = {
  name:string;
  age:number;
  sound:string;
}

type PartialAnimal = Partial<Animal>

let animal:PartialAnimal  = {
  name:"dog" // age and sound is optional properties
}

/// Pick type === select properties in this types 

type SelectSomePropAnimal = Pick<Animal,"name" | "sound"> // type SelectSomePropAnimal have properties slect from type Animal is name and sound

let selectSomePropAnimal: SelectSomePropAnimal = {
  name:"cat",
  sound:"meao meao!"
}


/// omit type === select all properties but don't slect some type 
type OmitSomePropAnimal = Omit<Animal,"name">

let omitSomePropAnimal:OmitSomePropAnimal = {
  age:10,
  sound:"buff! buff!"
}


type NameAnimal = "dog" | "cat" | "fish" | "carb"
type SoundAnimal = "buff! buff!" | "meao! meao!" | "pok! pok!" | "bu! bu!"

/// Record type == key of type in exampe and value in example must is  object 
type RecordAnimal = Record<NameAnimal,{sound:SoundAnimal}>

let recordAnimal: RecordAnimal = { // Type NameAnimal must select all type in NameAnimal 
  dog:{
    sound:"buff! buff!"
  },
  cat:{
    sound:"meao! meao!"
  },
  fish:{
    sound:"pok! pok!"
  },
  carb:{
    sound:"bu! bu!"
  },
}


type RecordColor = Record<string,string>

let color: RecordColor = {
  gray:"#f1f2f3",
  white:"#ffffff",
  blue:"#000FFF"
}


/// Parameters type  === use to get parameters of function argument BUT!! must use with typeof to get argument type output is tuple 

type FunFullName = (arg1:string, arg2:string) => string

const funFullNmme:FunFullName = (arg1,arg2)=>{
  return arg1 + " " + arg2;
}

type ParameterArgsFunction = Parameters<typeof funFullNmme>

let parametersArgsFunction: ParameterArgsFunction = ["11","22"]

 
/// ReturnType ===  use to get return type of funtion BUT!! must use with typeof to get return type 

type ReturnTypeFuntion = ReturnType<typeof funFullNmme>  

let returnTypeFuntion:ReturnTypeFuntion = "return type function"


/// Awaited Type ===  use with asynchronous 

async function getFullName():Promise<string> {
 return "string asynchronous ";
}

type returnTypeGetFullName = Awaited<ReturnType<typeof getFullName>>; // ใช้เพื่อให้ เอา Promise ออกตอน return type function


///Required Type === required all properties must use
 
interface RequiredTypeUser {
  fullName:string;
  age?:number;
}


type RequiredType = Required<RequiredTypeUser>

// let userReuired: RequiredType = { // error because age is required from Reuired
//   fullName:"tanongsak intean"
// }



/// Readonly Type === all properties is readonly 
type ReadonlyRequiredTypeUser = Readonly<RequiredTypeUser>


/// Exclude Type ===  select type not same in example
type AgeType = 20 | 10 | 30

type ExcludeTypeAge = Exclude<AgeType,10 | 20 > // type 30 not same in types 

//TIP! T Extends U ? T : never ==> T สืบทอดมาจาก U ใช่ไหม ถ้าใช้ให้ใช้ได้ ถ้าไม่ return never 
//TIP! infer === type นั้นๆ เช่น type ReturnType = ReturnTypes = T Extends ()=> infer U ? U : never

type CustomReturnType<T> = T extends (message:unknown)=> infer U ? U : never; /// ถ้า type T ตรงกับ (messange:unknown)=> infer(ผลลัพท์เป็น type ๊U) U ก็ return T ได้เลย แต่ไม่ return never

function sayHello(message:string):string {
  return message
}

type SayHelloReturnType = CustomReturnType<typeof sayHello>

///  Extract Type ===-return type have match args 1 and args2 
type ExtractTypeAge = Extract<AgeType,10 | 20>


/// Nonnullable Type === select only type is not null or undefined

type NonNullableType = NonNullable<AgeType | null | undefined> /// can use only 10 , 20 , 30


/// constructorParameter Type ===  return args type of constructor 
class Person {
  private age:number;
  private name:string;

  constructor(name:string,age:number){
    this.age = age
    this.name = name
  }
  
  public get getName() : string {
    return this.name 
  }

  
  public set setName(v : string) {
    this.name = v;
  }
  
  
  public set setAge(v : number) {
    this.age = v;
  }

  
  public get getAge() :number {
    return this.age; 
  }
}

type ConstructorParameterPerson = ConstructorParameters<typeof Person> /// return constructor parametersArgsFunction


//// InstanceType ==  return typeof this class when new class but don't have type of class 

type InstanceTypePerson = InstanceType<typeof Person>

let person:InstanceTypePerson = new Person("beer",23)

console.log(person.getName);


/// NoInfer type === กรณีที่กรอก properties ที่เป็น type optional จะบังคับค่าให้ตรงกับ format ที่เราระบุไว้เบื้องต้น ในตัวอย่างคือ type C ่

console.log("----------------------------------------------------------------------------");

function createStreetLight<C extends string>(
  colors: C[],
  defaultColor?: NoInfer<C>, /// type defaultColor เป็น optional แต่! ไม่ให้ infer == อนุมาน ว่า type นั้นเป็นไรบังคับให้ตรงที่มันมีอยู่
):void {
  console.log(defaultColor);
}
createStreetLight(["red", "yellow", "green"], "red");  // OK
// createStreetLight(["red", "yellow", "green"], "blue");  // Error


