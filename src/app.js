

// default import
// import added from "./plus"

// const result = added(5,6)
//  console.log(result);
 


// imenovan import


// import {add,minus} from "./plus"

// const result = add (6,9)
// console.log(result);

// const result2 = minus(7,4)
// console.log(result2);

import calkulator from "./plus"
console.log(calkulator);


const result3 = calkulator.add(11,6)
const result4 = calkulator.minus(11,6)
console.log(result3);
console.log(result4);











import { nanoid } from "nanoid";

const people = [
  { name: "iса", lastName: "Петренко", age: 25 },
  { name: "Олена", lastName: "Ковальчук", age: 32 },
  { name: "Максим", lastName: "Сидоренко", age: 28 },
  { name: "Аліна", lastName: "Ткаченко", age: 22 },
  { name: "Юрій", lastName: "Мельник", age: 35 },
  { name: "Наталя", lastName: "Іванова", age: 30 },
  { name: "Дмитро", lastName: "Бондар", age: 27 },
  { name: "Світлана", lastName: "Кравченко", age: 29 },
  { name: "Артем", lastName: "Гончар", age: 31 },
  { name: "Марина", lastName: "Литвин", age: 26 }
];

const formatId = people.map(user => ({...user, id : nanoid()}))
console.log(formatId);