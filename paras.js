// // // let p;
// // // console.log(p);
// // // console.log(20 - "7"); //Bug
// // // let p=undefined;
// // // p=null;
// // // console.log(p);
// // // console.log(typeof(p))

// // // let x = 10;
// // // let num = x++ + ++x;
// // // console.log(num++);
// // // console.log(x++);
// // // console.log(x);
// // // console.log(num);

// // let a = [1, 2, 3];
// // let b = [1, 2, 3];

// // let result1 = a == b;
// // let result2 = a === b;

// // console.log(result1); // What is the output?
// // console.log(result2);

// // let a = {
// //   name: "paras",
// //   age: 24,
// // };

// // let b = {
// //   name: "paras",
// //   age: 24,
// // };
// // console.log(a == b);
// // console.log(a === b);

// // let x = [1, 2, 3];
// // let y = x;
// // let z = [1, 2, 3];

// // console.log(x == y); // Output: ?//True
// // console.log(x === y); // Output: ?//True
// // console.log(x == z); // Output: ?//false
// // console.log(x === z);//false

// // let a = [1, 2, 3];
// // let b = a;
// // a.push(4);

// // console.log(b);

// // function createFunction() {
// //   let localVar = 10;

// //   return function () {
// //     console.log(localVar);
// //   };
// // }

// // const myFunction = createFunction();
// // myFunction();

// const person = {
//   name: "John",
//   age: 30,
//   sayHello: function () {
//     console.log(
//       `Hello, my name is ${this.name} and I'm ${this.age} years old.`
//     );
//   },
// };

// const greet = person.sayHello.bind(person);
// greet();

// // const person = {
// //   name: "John",
// //   age: 30,
// //   sayHello: () => {
// //     console.log(
// //       `Hello, my name is ${this.name} and I'm ${this.age} years old.`
// //     );
// //   },
// // };

// // person.sayHello;
// // //greet(); // Output: Hello, my name is undefined and I'm undefined years old.

// console.log(3 ** 3);

let arr = [1, 2, 3, 4, 5];
let newArr = arr
  .map((ele) => {
    return ele * 2;
  })
  .filter((ele) => {
    return ele > 4;
  });
console.log(newArr);
