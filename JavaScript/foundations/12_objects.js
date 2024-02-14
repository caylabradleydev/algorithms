//===============//
//====OBJECTS====//
//===============//

//object: a data structure that allows us to have key-value pairs; so we can have distinct keys and each key is mapped to a value that can be of any JavaScript data type

const cayla = {
  firstName: "Cayla",
  lastName: "Bradley",
  age: 29,
  job: "Developer",
  friends: ["Kerry", "Carla", "Iliana"],
};

//=====ACCESSING OBJECT DATA=====//

//Dot Notation
console.log(cayla.firstName); //Cayla

//Brackey Notation
console.log(cayla["firstName"]); //Cayla

//=====OBJECT METHODS=====//
const jonas = {
  firstName: "Jonas",
  lastName: "Schmedtmann",
  birthYear: 1991,
  job: "Developer",
  friends: ["Kerry", "Carla", "Iliana"],
  calcAge: function (birthYear) {
    return 2024 - birthYear;
  },
};

console.log(jonas.calcAge(1991)); //33
console.log(jonas.calcAge(jonas.birthYear)); //33

//=====THIS KEYWORD=====//
const kerry = {
  firstName: "Kerry",
  lastName: "Wade",
  birthYear: 1992,
  job: "Developer",
  friends: ["Cayla", "Carla", "Iliana"],
  calcAge: function () {
    this.age = 2024 - this.birthYear;
    return this.age;
  },
};

console.log(kerry.calcAge()); //32
