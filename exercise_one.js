// 1.1 Create a new Object
const newObject = {}; // change this line

// 1.2 Create a simple person object
const person = {};
// Add specific PROPERTIES to the Object
// The person firstName should be "Harry"
person.firstName = "Harry";

// The person lastName should be "Potter"

person.lastName = "Potter";
// The person job should be "wizard"

person.job = "wizard";

// 1.3 Add a METHOD(function) to the Person Object
// EXAMPLE: A short greeting: Hello, my name is Harry!
person.greet = function () {
  return `Hello, my name is ${this.firstName}!`;
};

// TODO: Add a long greeting method tot he Object:  Hello, my name is Harry Potter and I am a wizard!
person.longGreet = function () {
  return `Hello, my name is ${this.firstName} ${this.lastName} and I am a ${this.job}!`;
}; // Add your code here

// 1.4 Create an object and add PROPERTIES inline
// TODO: Pay attention to the bellow and uncomment the lines that add the missing properties
const famousPerson = {
  firstName: "Harry",
  lastName: "Styles",
  job: "singer"
};

// 1.5 Update an Object properties
const normalPerson = {
  firstName: "Bob",
  lastName: "The Sponge",
  job: "sponge",
};

// TODO: Change normalPerson's lastName to "The Hacker" instead of "The Sponge"
normalPerson.lastName = "The Hacker";

// TODO: Change normalPerson's job to "developer" instead of "sponge"

normalPerson.job = "developer";

// 1.6 Extract the keys of an object
// REMEBER: Objects are "dictionaries" that contain KEYS which allows us to access their PROPERTIES

// TODO: Uncomment the rest of the properties for the happyPerson
const happyPerson = {
  firstName: "Patrick",
  lastName: "The Star",
  job: "Spong Bob's friend"
};

// TODO: Use Object.keys(YOUR_OBJECT) to extract the happy person KEYS
const happyPersonKeys = Object.keys(happyPerson);


// 1.7 Extract the PROPERTIES of an object
// TODO:
// 1. Use Object.keys(YOUR_OBJECT) with .
// 2. Use .map((KEY) => (YOUR_OBJECT[KEY])) on the key array to return all the object PROPERTIES
const happyPersonProperties = happyPersonKeys.map((key) => (happyPerson[key]));


// ------- THE END ------------------------------------
/*
   _____          _   __          ___ _   _     _____                            
  / ____|        | |  \ \        / (_) | | |   |  __ \                           
 | |     ___   __| | __\ \  /\  / / _| |_| |__ | |  | |_ __ __ _  __ _  ___  ___ 
 | |    / _ \ / _` |/ _ \ \/  \/ / | | __| '_ \| |  | | '__/ _` |/ _` |/ _ \/ __|
 | |___| (_) | (_| |  __/\  /\  /  | | |_| | | | |__| | | | (_| | (_| | (_) \__ \
  \_____\___/ \__,_|\___| \/  \/   |_|\__|_| |_|_____/|_|  \__,_|\__, |\___/|___/
                                                                  __/ |          
                                                                 |___/           
*/

// DO NOT TOUCH THIS CODE
module.exports = function testWrapper() {
  return {
    one: newObject,
    two: person,
    three: person,
    four: famousPerson,
    five: normalPerson,
    six: happyPersonKeys,
    seven: happyPersonProperties,
  };
};
