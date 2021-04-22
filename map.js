let arrayMeet = [
  {
    id: 1,
    name: "Chicken",
    quantity: {
      name: "Good",
      value: 4,
    },
  },
  {
    id: 2,
    name: "Pig",
    quantity: {
      name: "Bad",
      value: 1,
    },
  },
  {
    id: 3,
    name: "Beef",
    quantity: {
      name: "Medium",
      value: 2,
    },
  },
  {
    id: 4,
    name: "Fish",
    quantity: {
      name: "Good",
      value: 4,
    },
  },
];

const response = arrayMeet.map((item) => item.quantity.name);

console.log("response=>", response);
