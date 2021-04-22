// // 1. Tính tổng và tích của array sử dụng reduce Javascript
// function Accumulation(...value) {
//   return value.reduce((t, v) => t + v, 0);
// }

// function Multiplication(...value) {
//   return value.reduce((t, v) => t * v, 1);
// }

// const accumulation = Accumulation(1, 2, 3, 4, 5);
// const multiplication = Multiplication(1, 2, 3, 4, 5);

// console.log("accumulation", accumulation);

// console.log("multiplication", multiplication);

// // 2.Reduce thay thế Reverse()
// function Reverse(arr = []) {
//   return arr.reduceRight((t, v) => (t.push(v), t), []);
// }

// const reverse = Reverse([1, 2, 3, 4]); // Đảo ngược mảng

// console.log("reverse", reverse);
// // 3. Reduce thay thế map() và filter()
// const arr = [0, 1, 2, 3];

// // map :[0,2,4,6]
// const a = arr.map((v) => v * 2);
// const b = arr.reduce((t, v) => [...t, v * 2], []);

// // filter:[2,3]
// const c = arr.filter((v) => v > 1);
// const d = arr.reduce((t, v) => (v > 1 ? [...t, v] : t), []);

// // reduce chấp cả hai map + filter
// const e = arr.map((v) => v * 2).filter((v) => v > 2);
// const f = arr.reduce((t, v) => (v * 2 > 2 ? [...t, v * 2] : t), []);

// console.log("a", a);
// console.log("b", b);
// console.log("c", c);
// console.log("d", d);
// console.log("e", e);
// console.log("f", f);

// // 4. Reduce thay thế some() và every()

// const scores = [
//   { score: 45, subject: "chinese" },
//   {
//     score: 90,
//     subject: "math",
//   },
//   { score: 60, subject: "english" },
// ];

// // some
// const isAtLeastOneQualified = scores.reduce(
//   (t, v) => t || v.score >= 60,
//   false
// );
// console.log("isAtLeastOneQualified", isAtLeastOneQualified);

// // every
// const isAllQualified = scores.reduce((t, v) => t && v.score >= 60, true);
// console.log("isAllQualified", isAllQualified);

// // 5. Chuck array
// const array = [1, 2, 3, 4, 5];

// function Chuck(array = [], size = 1) {
//   return array.length
//     ? array.reduce(
//         (t, v) => (
//           t[t.length - 1].length === size
//             ? t.push([v])
//             : t[t.length - 1].push(v),
//           t
//         ),
//         [[]]
//       )
//     : [];
// }

// const chuck = Chuck(array, 2);
// console.log("chuck", chuck);

// // 6. Sử dụng reduce tìm phần tử khác giữa hai array
// const array1 = [1, 2, 3, 4, 5];
// const array2 = [2, 3, 6];
// function Difference(arr = [], oarr = []) {
//   return arr.reduce((t, v) => (!oarr.includes(v) && t.push(v), t), []);
// }

// const difference = Difference(array1, array2); // [1, 4, 5]
// console.log("difference", difference);

// // 7. Chèn phần tử vào một array cho trước sử dụng reduce
// function Fill(arrFill = [], val = "", start = 0, end = arrFill.length) {
//   if (start < 0 || start >= end || end > arrFill.length) return arrFill;
//   return [
//     ...arrFill.slice(0, start),
//     ...arrFill.slice(start, end).reduce((t, v) => (t.push(val || v), t), []),
//     ...arrFill.slice(end, arrFill.length),
//   ];
// }
// const arrFill = [0, 1, 2, 3, 4, 5, 6];
// const newArray = Fill(arrFill, "aaa", 2, 5); // [0, 1, "aaa", "aaa", "aaa", 5, 6]
// console.log("fill", newArray);

// // 8. Làm phẳng một array sử dụng reduce
// function Flat(arrFlat = []) {
//   return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), []);
// }

// const arrFlat = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
// const flat = Flat(arr);

// console.log("flat", flat);
// // 9. Array trùng lặp phần tử sử dụng reduce
// function Uniq(arrUniq = []) {
//   return arrUniq.reduce((t, v) => (t.includes(v) ? t : [...t, v]), []);
// }

// const arrUniq = [2, 1, 0, 3, 2, 1, 2];
// const uniq = Uniq(arrUniq);
// console.log("uniq", uniq);

// // 10. Reduce thay thế max() và min()
// const arr = [12, 45, 21, 65, 38, 76, 108, 43];

// function Max(arr = []) {
//   return arr.reduce((t, v) => (t > v ? t : v));
// }

// function Min(arr = []) {
//   return arr.reduce((t, v) => (t < v ? t : v));
// }

// console.log("arr", arr);

// const max = Max(arr);
// console.log("max", max);

// const min = Min(arr);
// console.log("min", min);

// // 11. Tách phần tử trong Array theo đúng type of
// const arr = [
//   ["a", 1, true],
//   ["b", 2, false],
// ];

// function Unzip(arr = []) {
//   return arr.reduce(
//     (t, v) => (v.forEach((w, i) => t[i].push(w)), t),
//     Array.from({ length: Math.max(...arr.map((v) => v.length)) }).map((v) => [])
//   );
// }

// const unzip = Unzip(arr); // lọc mảng theo thuộc tính chung => unzip [ [ 'a', 'b' ], [ 1, 2 ], [ true, false ] ]
// console.log("unzip", unzip);

// // 12. Đếm số lượng giống nhau trong một array sử dụng reduce
// const arr = [0, 1, 1, 2, 2, 2];
// function Count(arr = []) {
//   return arr.reduce((t, v) => ((t[v] = (t[v] || 0) + 1), t), {});
// }

// const count = Count(arr);

// console.log("count", count);

// // 13. Group by use reduce
// const arr = [
//   { area: "GZ", name: "YZW", age: 27 },
//   { area: "GZ", name: "TYJ", age: 25 },
//   { area: "SZ", name: "AAA", age: 23 },
//   { area: "FS", name: "BBB", age: 21 },
//   { area: "SZ", name: "CCC", age: 19 },
// ];

// function Group(arr = [], key) {
//   return key
//     ? arr.reduce(
//         (t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t),
//         {}
//       )
//     : {}; // 1. Tạo ra một mảng dựa vào key sau đó lọc và push các value vào
// }

// const group = Group(arr, "area");

// console.log("group", group);

// // 14. Thống kê xem các từ khoá có trong array hay không ??
// const text = [
//   "blog javascript by anonystick.com",
//   "anonystick.com",
//   "tiki and lazada is better",
// ];
// const keyword = [
//   "javascript",
//   "anonystick",
//   "words",
//   "lazada",
//   "tips javascript",
// ];

// function Keyword(arr = [], keys = []) {
//   return keys.reduce(
//     (t, v) => (arr.some((w) => w.includes(v)) && t.push(v), t),
//     []
//   );
// }

// const keyWord = Keyword(text, keyword);
// console.log("text", text);
// console.log("keyword", keyword);
// console.log("keyWord", keyWord);

// // 15. Định dạng số thập phân sử dụng reduce

// function ThousandNum(num = 0) {
//   const str = (+num).toString().split(".");
//   const int = (nums) =>
//     nums
//       .split("")
//       .reverse()
//       .reduceRight((t, v, i) => t + (i % 3 ? v : `${v},`), "")
//       .replace(/^,|,$/g, "");
//   const dec = (nums) =>
//     nums
//       .split("")
//       .reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), "")
//       .replace(/^,|,$/g, "");
//   return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0]);
// }

// const thousandNum1 = ThousandNum(1234); // "1,234"
// const thousandNum2 = ThousandNum(1234.0); // "1,234"
// const thousandNum3 = ThousandNum(0.1234); // "0.123,4"
// const thousandNum4 = ThousandNum(1234.5678); // "1,234.567,8"

// console.log("thousandNum1", thousandNum1);
// console.log("thousandNum1", thousandNum2);
// console.log("thousandNum1", thousandNum3);
// console.log("thousandNum1", thousandNum4);
// // 16. Parse url use reduce
// const stringLink = "https://anonystick.com?age=55&name=anonystick";
// function ParseUrlSearch(link = "") {
//   return link
//     .replace(/(^\?)|(&$)/g, "")
//     .split("&")
//     .reduce((t, v) => {
//       const [key, val] = v.split("=");
//       t[key] = decodeURIComponent(val);
//       return t;
//     }, {});
// }

// const parseUrlSearch = ParseUrlSearch(stringLink);

// console.log("parseUrlSearch", parseUrlSearch);

// // 17. Phân tích một Object sang params url
// function StringUrlSearch(search = {}) {
//   return Object.entries(search)
//     .reduce(
//       (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
//       Object.keys(search).length ? "?" : ""
//     )
//     .replace(/&$/, "");
// }

// const stringifyUrlSearch = StringUrlSearch({ age: 55, name: "anonystick" });
// console.log("stringifyUrlSearch", stringifyUrlSearch);
// // 18. Get value của key của một Object cho trước
// const target = { a: 1, b: 2, c: 3, d: 4 };
// const keyword = ["a", "d"];

// function GetKeys(obj = {}, keys = []) {
//   return Object.keys(obj).reduce(
//     (t, v) => (keys.includes(v) && (t[v] = obj[v]), t),
//     {}
//   );
// }
// const getKeys = GetKeys(target, keyword);
// console.log("getKeys", getKeys);
// // 19. Chuyển đổi một array object sáng object sử dụng reduce
// const people = [
//   { area: "GZ", name: "YZW", age: 27 },
//   { area: "SZ", name: "TYJ", age: 25 },
// ];

// const map = people.reduce((t, v) => {
//   const { name, ...rest } = v;
//   t[name] = rest;
//   return t;
// }, {});

// console.log("map", map);
// 20. Hiệu suất khi sử dụng reduce javascript

const list = [...new Array(100000).keys()];
// khi sử dụng for
console.time("for");
let result1 = 0;
for (let i = 0; i < list.length; i++) {
  result1 += i + 1;
}
console.log("result1", result1);
console.timeEnd("for");

// khi sử dụng forEach
console.time("forEach");
let result2 = 0;
list.forEach((v) => (result2 += v + 1));
console.log("result2", result2);
console.timeEnd("forEach");

// khi sử dụng map
console.time("map");
let result3 = 0;
list.map((v) => ((result3 += v + 1), v));
console.log("result3", result3);
console.timeEnd("map");

// khi sử dụng reduce
console.time("reduce");
let result4 = list.reduce((t, v) => t + v + 1, 0);
console.log("result4", result4);
console.timeEnd("reduce");
