const obj = {
  name: "kevin",
  occu: "chef/coder",
  friend: { name: "alex", friend: { name: "Q", age: 21, occu: "coder" } },
};
const {
  friend: {
    friend: { name, ...newObj },
  },
} = obj;

console.log(newObj);

// console.log(friend);
// console.log(name);
