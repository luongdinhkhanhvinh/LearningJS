// Tính tổng không dùng reduce
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }

// Tính tồng dùng hàm reduce
// let arr = [1, 2, 3, 4, 5];

// let sum = arr.reduce((x, y) => x + y);

// // Note :
// // @params x : previous value
// // @params y : current value
// console.log("sum", sum);

// // Tính tổng của các giá trị trong một reduce object JavaScript

// let initialValue = 0;
// let objArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }, { x: 5 }];

// let sum = objArray.reduce(function (total, currentValue) {
//   return total + currentValue.x;
// }, initialValue);

// console.log("sum", sum);

// // Convert nhiều array thành một array filter reduce javascript
// let flattened = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ].reduce((total, currentValue) => total.concat(currentValue), []);

// console.log("flattened", flattened);
