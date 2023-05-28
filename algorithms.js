// 5 kyu Moving Zeros To The End

// function moveZeros(arr) {
//   return arr
//     .filter(function (x) {
//       return x !== 0;
//     })
//     .concat(
//       arr.filter(function (x) {
//         return x === 0;
//       })
//     );
// }

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));

// moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]); // returns[false,1,1,2,1,3,"a",0,0]

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// 5 kyu
// Best travel

// function chooseBestSum(t, k, ls) {
//   // your code
//   return ls;
// }
// console.log(chooseBestSum(163, 3, [50, 55, 56, 57, 58]));
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// 5 kyu
// Land perimeter

// function landPerimeter(arr) {
//   let one = arr.map((val, ind, arr) => {
//     return [...val].map((val1, ind1, arr1) => {
//       return val1 === "X" ? ind1 : "";
//     });
//   });
//   return one
//     .map((val) => {
//       return val.filter((val) => {
//         return val !== "";
//       });
//     })
//     .toString()
//     .split(",")
//     .sort()
//     .filter((val) => {
//       return val.length;
//     })
//     .map((val, ind, arr) => {
//       return parseInt(val);
//     });
// }
// const myArr = ["XOOO", "XOXO", "XOXO", "OOXX", "OOOO"];

// console.log(landPerimeter(myArr));

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// function findHack(arr) {
//   let one = arr.map((val, ind, arr) => {
//     let total = val[2].map((val1, ind, arr) => {
//       if (val1 === "A") {
//         return 30;
//       } else if (val1 === "B") {
//         return 20;
//       } else if (val1 === "C") {
//         return 10;
//       }
//     });
//     if (total.length >= 5 && !total.includes(10)) total = total.concat(20);
// let myLength = val[2].length;
// return (
//   total.length >= 5 &&
//   total.map((val1, ind, arr) => {
//     return val1 === 10 + 20;
//   })
// );
// total = total.reduce((total, val2, ind, arr) => {
//   return total + val2;
// });
//     return total;
//   });
//   return one;
// }

// var myArray = [
//   ["name1", 445, ["B", "A", "A", "C", "A", "A"]],
//   ["name2", 110, ["B", "A", "A", "A"]],
//   ["name3", 200, ["B", "A", "A", "C"]],
//   ["name4", 200, ["A", "A", "A", "A", "A", "A", "A"]],
// ];

// console.log(findHack(myArray));

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// 5 kyu
// Simple Fun #220: Simplified Array

// function simplifiedArray(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
//   }
// }

// console.log(simplifiedArray([1, 2, 3, 4, 5]));

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// 5 kyu
// Don't Drink the Water

// function separateLiquids(glass) {
//   let myLength = glass.length;
//   console.log(myLength);
//   let one = glass.toString().split(",").sort();
//   let two = new Set(one);
//   let three = [...two];
//   let empty = [];
//   for (let i = 0; i <= one.length; i++) {
//     empty = empty.concat(i);
//   }
//   let multiples = empty.filter((val, ind, arr) => {
//     return val % 4 === 0;
//   });
//   return one.slice(multiples);
// }
// ======================
// |   Density Chart    |
// ======================
// | Honey   | H | 1.36 |
// | Water   | W | 1.00 |
// | Alcohol | A | 0.87 |
// | Oil     | O | 0.80 |
// ----------------------
// const myArr = [
//   ["H", "H", "W", "O"],
//   ["W", "W", "O", "W"],
//   ["H", "H", "O", "O"],
// ];
// const myArr = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12],
// ];
// console.log(separateLiquids(myArr));

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// function isValid(square, gap) {
// let one = square.map((val, ind, arr) => {
//   return val.reduce((total, val, ind, arr) => {
//     return total + val;
//   });
// });
//   let emptyArr = [];
//   for (let i = 0; i < square.length; i++) {
//     for (let j = 0; j < square.length; j++) {
//       emptyArr = emptyArr.concat(square[j][i]);
//     }
//   }
//   return emptyArr;
// }
// const myArr = [
//   [8, 1, 6],
//   [3, 5, 7],
//   [4, 9, 2],
// ];

// console.log(isValid(myArr));

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// 6 kyu
// Count characters in your string

// function count(str) {
//   let one = str.split("").sort();
//   let two = one.map((val, ind, arr) => {
//     return arr[ind] === arr[ind + 1] ? (val = 1) : val;
//   });

//   let letters = new Set(one);
//   letters = [...letters];
//   let times = two.map((val, ind, arr) => {
//     return typeof val !== "number" ? "1" + val : val;
//   });
//   times = times
//     .join("")
//     .split(/[A-Za-z]/g)
//     .filter((val) => val.length)
//     .map((val) => val.length);
//   let empty = [];
//   for (let i = 0; i < letters.length; i++) {
//     empty = empty.concat(letters[i].concat(times[i]));
//   }
//   return empty.reduce(
//     (acc, val) => ({
//       ...acc,
//       [val[0]]: parseInt(val[1]),
//     }),
//     {}
//   );
// }

// function count(string) {
//   var count = {};
//   string.split("").forEach(function (s) {
//     count[s] ? count[s]++ : (count[s] = 1);
//   });
//   return count;
// }
// console.log(count("baaaab"));
// console.log(count("a"));
// console.log(count("aba"));
// console.log(count("ABC"));
// {'a': 2, 'b': 1}
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// 6 kyu
// Salesman's Travel
// function travel(r, zipcode) {
//   // your code
//   let one = r.split(",").filter((val, ind, arr) => {
//     return val.includes(zipcode);
//   });
//   let two = one.map((val, ind, arr) => {
//     return val.split(" ");
//   });
//   let firstNumbers = two
//     .map((val, ind, arr) => {
//       return val[0];
//     })
//     .join(",");
//   let four = two
//     .map((val, ind, arr) => {
//       return val.slice(1).join(" ");
//     })
//     .join(",");
//   let result = zipcode + ":" + four + "/" + firstNumbers;
//   return result;
// }
// const ad =
//   "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432," +
//   "54 Holy Grail Street Niagara Town ZP 32908,3200 Main Rd. Bern AE 56210,1 Gordon St. Atlanta RE 13000," +
//   "10 Pussy Cat Rd. Chicago EX 34342,10 Gordon St. Atlanta RE 13000,58 Gordon Road Atlanta RE 13000," +
//   "22 Tokyo Av. Tedmondville SW 43098,674 Paris bd. Abbeville AA 45521,10 Surta Alley Goodtown GG 30654," +
//   "45 Holy Grail Al. Niagara Town ZP 32908,320 Main Al. Bern AE 56210,14 Gordon Park Atlanta RE 13000," +
//   "100 Pussy Cat Rd. Chicago EX 34342,2 Gordon St. Atlanta RE 13000,5 Gordon Road Atlanta RE 13000," +
//   "2200 Tokyo Av. Tedmondville SW 43098,67 Paris St. Abbeville AA 45521,11 Surta Avenue Goodtown GG 30654," +
//   "45 Holy Grail Al. Niagara Town ZP 32918,320 Main Al. Bern AE 56215,14 Gordon Park Atlanta RE 13200," +
//   "100 Pussy Cat Rd. Chicago EX 34345,2 Gordon St. Atlanta RE 13222,5 Gordon Road Atlanta RE 13001," +
//   "2200 Tokyo Av. Tedmondville SW 43198,67 Paris St. Abbeville AA 45522,11 Surta Avenue Goodville GG 30655," +
//   "2222 Tokyo Av. Tedmondville SW 43198,670 Paris St. Abbeville AA 45522,114 Surta Avenue Goodville GG 30655," +
//   "2 Holy Grail Street Niagara Town ZP 32908,3 Main Rd. Bern AE 56210,77 Gordon St. Atlanta RE 13000";
// const r =
//   "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432";
// console.log(travel(r, "OH 43071"));
// console.log(
//   travel(ad, "AA 45522")
//   // "AA 45522:Paris St. Abbeville,Paris St. Abbeville/67,670"
// );
// console.log(
//   travel(ad, "EX 34342")
//   // "EX 34342:Pussy Cat Rd. Chicago,Pussy Cat Rd. Chicago/10,100"
// );
// console.log(travel(ad, "EX 34345"), "EX 34345:Pussy Cat Rd. Chicago/100");
// console.log(
//   travel(ad, "AA 45521"),
//   "AA 45521:Paris bd. Abbeville,Paris St. Abbeville/674,67"
// );
// console.log(travel(ad, "AE 56215"), "AE 56215:Main Al. Bern/320");
// console.log(travel(ad, ""), ":/");

// r = "123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,786 High Street Pollocksville NY 56432"
// travel(r, "OH 43071") --> "OH 43071:Main Street St. Louisville,Main Long Road St. Louisville/123,432"
// travel(r, "NY 56432") --> "NY 56432:High Street Pollocksville/786"
// travel(r, "NY 5643") --> "NY 5643:/"

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// 6 kyu
// Multiplication table

// multiplicationTable = function (size) {
//   let empty = [];
//   for (var i = 1; i <= size; i++) {
//     for (var j = 1; j <= size; j++) {
//       empty = empty.concat(i * j);
//     }
//   }
//   const lastOnes = empty.slice(empty.length - size);
//   const restArr = empty.slice(0, empty.length - size);
//   return restArr
//     .map((val, ind, arr) => {
//       return val % 5 === 0 ? val + " " : val;
//     })
//     .join(" ")
//     .split(" ")
//     .map((val) => (val !== "" ? Number(val) : ""))
//     .concat(lastOnes);
// };

// console.log(multiplicationTable(5));

// [[1,2,3],[2,4,6],[3,6,9]]

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// function expandedForm(num) {
//   let lengthy = num.toString().length;
//   console.log(lengthy);
//   let one = num
//     .toString()
//     .split("")
//     .map((val, ind, arr) => {
//       return val === "0" ? "1" : val;
//     })
//     .map((val, ind, arr) => {
//       return val + "0".repeat(lengthy - (ind + 1)) + " +";
//     });
//   // .join(" ");
//   return one;
//   // return (one = one.slice(0, one.length - 2));
// }

// function expandedForm(num) {
//   let lengthy = num.toString().length;
//   console.log(lengthy);
//   let one = num.toString().split("");

//   return one;
// }

// // console.log(expandedForm(12)); // Should return '10 + 2'
// // console.log(expandedForm(42)); // Should return '40 + 2'
// console.log(expandedForm(70304)); // Should return '70000 + 300 + 4'

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// 5 kyu
// The Hashtag Generator

// function generateHashtag(str) {
//   let trimy = str.trim();
//   if (trimy === "" || trimy === " ") return false;
//   let one = str
//     .trim()
//     .split(" ")
//     .map((val, ind, arr) => {
//       let upp = val.slice(0, 1).toUpperCase();
//       let rest = val.slice(1);
//       return upp + rest;
//     });
//   one = "#" + one.join("");
//   if (one.length > 140) return false;
//   return one;
// }

// console.log(generateHashtag(" Hello there thanks for trying my Kata"));
// console.log(generateHashtag("    Hello     World   "));
// console.log(generateHashtag(""));
// console.log(generateHashtag("  ".repeat(140)));

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

// If the final result is longer than 140 chars it must return false.
// If the input or the result is an empty string it must return false.
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

// 5 kyu
// Simple Fun #89: Boxes Packing

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
// 5 kyu
// T.T.T.57: Reverse a number
// function reverseNumber(n) {
//   //coding here...
//   let one = n.split("");
//   return one
//     .sort((a, b) => {
//       return a - b;
//     })
//     .reverse()
//     .join("");
// }
// console.log(reverseNumber("654321"));
/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/

/********************************************************************************************************************************/
/********************************************************************************************************************************/
/********************************************************************************************************************************/
