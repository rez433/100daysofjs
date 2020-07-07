/*
Object Oriented Programming

*/

// 1) Create a Basic JavaScript Object
let dog = {
    name: 'Skippy',
    numLegs: 4
}


// 2) Use Dot Notation to Access the Properties of an Object
let dog = {
    name: "Spot",
    numLegs: 4
};
// Only change code below this line
console.log(dog.name)
console.log(dog.numLegs)
// Spot
// 4


// 3) Create a Method on an Object
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function () {
      return `This dog has ${dog.numLegs} legs.`;
    }
  
};

dog.sayLegs();



// 4) Make Code More Reusable with the this Keyword
let dog = {
    name: "Spot",
    numLegs: 4,
    sayLegs: function() {return `This dog has ${this.numLegs} legs.`;}
};

dog.sayLegs();




// 5) Define a Constructor Function
// ES6 way:
class Dog{
    constructor (name, color, numLegs) {
        this.name = name;
        this.color = color;
        this.numLegs = numLegs
    }
}

let dog = new Dog('Skippy', 'Brown', 4);
console.log(dog.name + " is " + dog.color + " and has " + dog.numLegs + " legs.")
// Skippy is Brown and has 4 legs.


// ES5 way:
function Dog(name, color) {
    this.name = name;
    this.color= color;
    this.numLegs = 4
}
let hound = new Dog('Skippy', 'Blue')




// 5) Verify an Object's Constructor with instanceof
function House(numBedrooms) {
    this.numBedrooms = numBedrooms;
}

// Only change code below this line
let myHouse = new House(5);
console.log(myHouse instanceof House);
// true





// 6) Understand Own Properties

function Bird(name) {
    this.name = name;
    this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];

// Only change code below this line
for (let props in canary) {
    if(canary.hasOwnProperty(props)){
        ownProps.push(props)
    }
}




//  7)  Use Prototype Properties to Reduce Duplicate Code
function Dog(name) {
    this.name = name;
}

// Only change code above this line
let beagle = new Dog("Snoopy");
Dog.prototype.numLegs = 4;




//  8) Iterate Over All Porperties
function Dog(name) {
    this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line
for ( let prop in beagle){
    if (beagle.hasOwnProperty(prop)){
        ownProps.push(prop)
    }else {
        prototypeProps.push(prop)
    }
}




// 9)  Understand the Constructor Property
function Dog(name) {
    this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
    if(candidate.constructor == Dog){
        return true;
    }else {
        return false;
    }
}





// 10)  Change the Prototype to a New Object
function Dog(name) {
    this.name = name;
}
  
Dog.prototype = {
    // Only change code below this line
    constructor: Dog, // define the constructor property
    numLegs: 4,
    eat: function(){
        console.log('num num')
    },
    describe: function() {
        console.log('My name is '+ this.name)
    }
};
  
let dog = new Dog('skippy')




// 11) Understand Where an Object’s Prototype Comes From
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line
Dog.prototype.isPrototypeOf(beagle)


// 12) Understand the Prototype ChainPassed
function Dog(name) {
    this.name = name;
}

let beagle = new Dog("Snoopy");

Dog.prototype.isPrototypeOf(beagle);  // yields true

// Fix the code below so that it evaluates to true
Object.prototype.isPrototypeOf(Dog.prototype);



// 13) Use Inheritance So You Don't Repeat Yourself
function Animal() { }

Animal.prototype = {
    constructor: Animal,
    eat: function() {
        console.log("nom nom nom");
    }
};

function Dog() { }

// Only change code below this line


let beagle = new Dog();
Dog.prototype = Object.create(Animal.prototype)




// 14)  Add Methods After Inheritance
function Animal() { }
Animal.prototype.eat = function() { console.log("nom nom nom"); };
function Dog() { }

// Only change code below this line
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.bark = function() {
    console.log('Woof!')
}

// Only change code above this line
let beagle = new Dog();




