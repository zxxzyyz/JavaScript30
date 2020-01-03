// Refrence and copy of arrays
let players = [];
let team = [];

// Array refrence
players = ["koo", "kim", "park", "lee"];
team = players;

// Check array reference
console.group("Array Reference");
console.log("Before :", players, team);
team[3] = "test";
console.log("After :", players, team);
console.groupEnd("Array Reference");

// Array copy
players = ["koo", "kim", "park", "lee"];
team1 = players.slice();
team2 = [].concat(players);
team3 = Array.from(players);
team4 = [...players];

// Check array copy
console.group("Array Copy 1");
console.log("Before :", players, team1);
team1[3] = "test";
console.log("After :", players, team1);
console.groupEnd("Array Copy 1");

console.group("Array Copy 2");
console.log("Before :", players, team2);
team2[3] = "test";
console.log("After :", players, team2);
console.groupEnd("Array Copy 2");

console.group("Array Copy 3");
console.log("Before :", players, team3);
team3[3] = "test";
console.log("After :", players, team3);
console.groupEnd("Array Copy 3");

console.group("Array Copy 4");
console.log("Before :", players, team4);
team4[3] = "test";
console.log("After :", players, team4);
console.groupEnd("Array Copy 4");

// Refrence and copy of objects
let person = {};
let test = {};

// Object reference
person = {
  name: "koo",
  age: 30
}
test = person;

// Check object reference
console.group("Object Reference");
console.log("Before :", person, test);
test.age = 99;
console.log("After :", person, test);
console.groupEnd("Object Reference");

// Object copy 1
person = {
  name: "koo",
  age: 30
}
test = Object.assign({}, person);
//test = Object.assign({}, person, { name: "Tester", age: 50 });

// Check object copy 1
console.group("Object copy 1");
console.log("Before :", person, test);
test.age = 99;
console.log("After :", person, test);
console.groupEnd("Object copy 1");

// Object copy 2
person = {
  name: "koo",
  social: {
    email: "em@il",
    facebook: "face@book"
  }
}
test = Object.assign({}, person);

// Check object copy 2
console.group("Object copy 2");
console.log("Before :", person.social.email, test.social.email);
test.social.email = "testing@email";
console.log("After :", person.social.email, test.social.email);
console.groupEnd("Object copy 2");

// Object copy 3
person = {
  name: "koo",
  social: {
    email: "em@il",
    facebook: "face@book"
  }
}
test = JSON.parse(JSON.stringify(person));

// Check object copy 3
console.group("Object copy 3");
console.log("Before :", person.social.email, test.social.email);
test.social.email = "testing@email";
console.log("After :", person.social.email, test.social.email);
console.groupEnd("Object copy 3");