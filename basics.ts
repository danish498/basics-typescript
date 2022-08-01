// Primitive: number, strings, boolean
// More complex type: array, objects
// Functions type, parameter

// Primitives

let age: number;
let num: number = 24;

// let num: number = '24';

age = 24;
// age = '24';

let userNmae: string;
userNmae = 'Daan';

// userNmae = 58;

let isInstructor: boolean;

isInstructor = true;

// More Complex types

let Hobbies: string[];

Hobbies = ['Sports', 'Cooking'];

let expenditure: number[];

expenditure = [12, 14, 15, 16, 'danish'];

let person: {
  name: string;
  age: number;
};

person = {
  name: 'Danish',
  age: 23,
};

person = {
  isEmployee: true,
};

let person: {
  name: string;
  age: number;
}[];

// Type Infeence  // Union typw

let course: string | number = 'React - The complete guide';

course = 12345687;

// Type Aliasess

type Person = {
  name: string;
  age: number;
};

let person1: Person;

person1 = {
  name: 'Danish',
  age: 23,
};

// person1 = {
//   isEmployee: true,
// };

let person2: Person[];

// Functions and type;

function sum(a: number, b: number) {
  return a + b;
}

function print(value: any) {
  console.log(value);
}

/// Generics

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const dempArray = [1, 5, 6, 7];

const updatedArray = insertAtBeginning(dempArray, -1);
const stringArray = insertAtBeginning(['a', 'b', 'c'], 'd');
// updatedArray[0].split('');
