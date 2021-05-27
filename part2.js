// const obj = {
//   name: "wendy",
//   createObj: function () {
//     obj.obj2 = {
//       name: "chad",
//       sayName: () => {
//         console.log(this.name);
//       },
//     };
//   },
// };
// obj.createObj();
// obj.obj2.sayName();
// const val = "one"
// switch (val) {
//     case "one":
//         {
//             const one = "something"
//             break;
//         }
//     case "two":
//         {
//             const one = "something else";
//             break;
//         }
// }

//rest and spread
const obj = { name: "lindsey", occu: "coder", friend: { name: "Jesus" } };
const obj2 = { age: 21, networth: "alot" };
const arr = [1, 2];
const arr2 = [3, 4];
const combined = { ...obj, ...obj2, home: "california", ...obj2, ...obj2 };
const arrCombined = [...arr2, ...arr2, ...arr];
obj.name = "angelica";
obj.friend.name = "Joel";
console.log(combined);
console.log(arrCombined);

function addAll(...rest) {
  //   console.log(rest);
  //   let sum = 0;
  //   for (let i = 0; i < rest.length; i++) {
  //     //sum = sum + rest[i]
  //     sum += rest[i];
  //   }
  //   return sum;
  return rest.reduce((accum, val) => accum + val, 0);
}

console.log(addAll(...[1, 2, 3, 4, 5, 6, 7])); //as (1,2,3,4)
