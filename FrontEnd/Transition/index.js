// // // // function x() {
// // // //   let a = 10;
// // // //   return function y() {
// // // //     console.log(a);
// // // //   };
// // // // }
// // // // // console.log(x())
// // // // let ans = x();
// // // // console.log(ans());
// // // function paras() {
// // //   var x = 10;
// // //   setTimeout(() => {
// // //     console.log(x);
// // //   }, 9000);
// // //   console.log("function paras ends here");
// // // }
// // // paras();
// // const a = function paras() {
// //   console.log("hello");
// // };
// // a();

// // let s1 = [1, 2, 4];
// // let s2 = [1, 2, 4];
// // console.log(s1 == s2);
// console.log("starting the code");
// const ans = paras()
//   .then(() => {
//     console.log("Finaly resolve");
//     return true;
//   })
//   .catch((err) => {
//     console.log("first promise not resolved");
//   })
//   .then((data) => {
//     return paras1();
//   })
//   .then((data1) => {
//     console.log(data1);
//   })
//   .then(() => {
//     return paras2();
//   })
//   .then((data2) => {
//     console.log(data2);
//   })
//   .catch((err) => {
//     console.log(err);
//   });
// // console.log(p1);
// console.log("hello");
// function paras1() {
//   const p1 = new Promise((resolve, reject) => {
//     if (true) {
//       resolve("Second Promise Resolved");
//     } else {
//       reject("Sorry 2nd promise not resolve");
//     }
//   });
//   return p1;
// }
// function paras2() {
//   const pr = new Promise((res, rej) => {
//     if (true) {
//       res("Third also Resolved");
//     } else {
//       rej("Sorry third is rejected");
//     }
//   });
//   return pr;
// }

// function paras() {
//   const pr = new Promise(function (resolve, reject) {
//     if (true) {
//       setTimeout(() => {
//         resolve("Resolved");
//       }, 10000);
//     } else {
//       reject("sorry");
//     }
//   });
//   return pr;
// }
// console.log(ans);

// Object.prototype.paras = function () {
//   console.log("this is pp");
// };
// const date = new Date();
// date.paras();
console.log("starting..");
async function paras() {
  console.log("this is inside async");
  return "paras";
}
//remember async function always returns a promise even if you wirtten
//return simple strings async function wraps this in promise and retuns
//it
paras()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
console.log("outside async");
