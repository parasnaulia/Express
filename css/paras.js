let arr = [1, 2, 3, 4, 5];
let newArr = arr
  .map((ele) => {
    return ele * 2;
  })
  .reduce((ele) => {
    return ele > 4;
  });
console.log(newArr);
