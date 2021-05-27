//Scope
declare();
expression();
// var i = 1;
// function scope
// var one = 2;
// function myFun(one) {
//     var one = 1;
//     let two = 2;
//     const three = 3;
// }
// myFun(3);
// if (1 === 1) {
//   var myvar = "chad";
// }
// console.log(rod);
// for (var i = 0; i < 100; i++) {}
// console.log(i * 100);
// console.log(myvar);

// var rod = "rod";

//HOISTING

//function dec. gets hoisted!
function declare() {
  console.log("I'M ALIVE!");
}

//function exp. is better!
const expression = () => console.log("I'm not alive yet!");
const expression2 = function () {
  console.log("YAY!");
};
