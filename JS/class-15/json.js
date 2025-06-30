const user = {
  name: "jhon doe",
  age: 20,
  isEmpolyed: true,
};

console.log(user, "JS Object");
console.log("-----------------------");
console.log(JSON.stringify(user), "JSON");
const stringOfUser = JSON.stringify(user);
console.log(typeof stringOfUser, stringOfUser);

const userParsed = JSON.parse(stringOfUser);
console.log(typeof userParsed, userParsed);
