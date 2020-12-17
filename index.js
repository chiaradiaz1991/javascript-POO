// JavaScript uses functions as classes to create objects using the new keyword. Here is an example:

function Human(firstName, lastName) {
  // construct the object using the arguments
  this.firstName = firstName;
  this.lastName = lastName;

  // a method which returns the full name
  this.fullName = function() {
      return this.firstName + " " + this.lastName;
  }
}

var AHuman = new Human("Robert", "Plant");
console.log(AHuman.fullName());  // outputs "Robert Plant"

// Creating an object using the new keyword is the same as writing the following code:

var AHuman = {
  firstName : "Robert",
  lastName : "Plant",
  fullName : function() {
      return this.firstName + " " + this.lastName;
  }
}

// The difference between the two methods of creating objects is that the first method uses a class to define the object and then the new keyword to instantiate it,
// The second method immediately creates an instance of the object.