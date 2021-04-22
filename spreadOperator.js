// Cách 1 :
const barca = ["Messi", "Xavi"];
const mu = ["Rooney", "Vidic"];

const all = [...barca, ...mu];
console.log("all", all);

// Cách 2 : Dùng array.concat()

const all1 = barca.concat(mu);
const all2 = [].concat(barca, mu);

console.log("all1", all1);
console.log("all2", all2);

// Cách 3: Dùng array.push()
barca.push(...mu);
console.log("barca", barca);
