// let arrayMeet = [
//   {
//     id: 1,
//     name: "Chicken",
//     quantity: {
//       name: "Good",
//       value: 4,
//     },
//   },
//   {
//     id: 2,
//     name: "Pig",
//     quantity: {
//       name: "Bad",
//       value: 1,
//     },
//   },
//   {
//     id: 3,
//     name: "Beef",
//     quantity: {
//       name: "Medium",
//       value: 2,
//     },
//   },
//   {
//     id: 4,
//     name: "Fish",
//     quantity: {
//       name: "Good",
//       value: 4,
//     },
//   },
// ];

// Replace for statement map
// const response = arrayMeet.reduce((c, n) => [...c, n.name], []);

// Replace for statement filter
// const response = arrayMeet.reduce(
//   (c, n) => (n.quantity.name === "Good" ? [...c, n] : c),
//   []
// );

// Replace for statement map and filter
// const response = arrayMeet.reduce(
//   (c, n) => (n.quantity.name === "Good" ? [...c, n.name] : c),
//   []
// );

// Replace for statement some and every
// const response = arrayMeet.reduce(
//   (c, n) => c || n.quantity.name === "Good",
//   false
// );
// => using some

// const response = arrayMeet.reduce(
//   (c, n) => c && n.quantity.name === "Good",
//   true
// );

// using every

// console.log("response", response);
