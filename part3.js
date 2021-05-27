//classes
class Human {}

const h1 = new Human();
console.log(h1);

Human.prototype.becomeHuman = function () {
  this.name = "human";
  this.species = "homosapien";
  this.gender = "choose not to disclose";
};

h1.becomeHuman();
console.log(h1);
