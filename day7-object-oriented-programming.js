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
function Dog(name, color, numLegs) {
    this.name = name;
    this.color= color;
    this.numLegs = numLegs;
}
let hound = new Dog('Skippy', 'Blue', 4)




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



// 15) Override the fly() method for Penguin so that it 
//  returns "Alas, this is a flightless bird."
function Bird() { }

Bird.prototype.fly = function() { return "I am flying!"; };

function Penguin() { }
Penguin.prototype = Object.create(Bird.prototype);
Penguin.prototype.constructor = Penguin;

// Only change code below this line

Penguin.prototype.fly = function () {
    return "Alas, this is a flightless bird."
}

// Only change code above this line

let penguin = new Penguin();
console.log(penguin.fly());




// 16) Use a Mixin to Add Common Behavior Between Unrelated Objects
let bird = {
    name: "Donald",
    numLegs: 2
};

let boat = {
    name: "Warrior",
    type: "race-boat"
};

// Only change code below this line
let glideMixin = function (obj) {
    obj.glide = function () {
        console.log('glide')
    }
}

glideMixin(boat);
glideMixin(bird)




// 17) Use Closure to Protect Properties
//  Within an Object from Being Modified Externally
function Bird() {
    let weight = 15;
  
    this.getWeight = function () {
        return weight;
    }
}




// 18)  Understand the Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("A cozy nest is ready");
})();
  




// 19) Use an IIFE to Create a Module
let funModule = (function () {
    return {
        isCuteMixin : function(obj) {
            obj.isCute = function() {
            return true;
            };
        },
        singMixin : function(obj) {
            obj.sing = function() {
            console.log("Singing to an awesome tune");
            };
        }
  
    }
})();


/* 
    ##############  Object Oriented Porgramming   ###############
*/

// Lexical Scope vs Execution Contexts (in memory) Scope



// Closures



// Function Object


// Call Time


/* 
The call() method calls a function with a given 
"this" value and arguments provided individually.
*/



// Prototype Chains
/* 
The Object.create() method creates a new object, 
using an existing object as the prototype of the newly created object.
*/
const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
  
const me = Object.create(person);

me.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();
// expected output: "My name is Matthew. Am I human? true"


// ####################################
// (1) Object Decorator Pattern
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
        this.loc++;
    };
    
    return obj;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();


// (2) it is possible to ommit "this" because everytime carlike called
// it creates a closure obj that refers to one object therefor no need for "this"
var carlike = function(obj, loc) {
    obj.loc = loc;
    obj.move = function() {
       return obj.loc++;
    };
    return obj;
};

var amy = carlike({}, 1);
amy.move();
var ben = carlike({}, 9);
ben.move();


// (3) Decorator code vs Classes
// The Decorator code from (2) can be rewritten as a Class
// ES5 Class:
var Car = function (loc) {
    var obj = {loc: loc};
    obj.move = function () {
        obj.loc++;
        console.log(obj.loc)
    };

    return obj;
}
var amy1 = Car(1);
amy1.move();
var ben2 = Car(9);
ben2.move();


// ES6 Class:
class Car{
    constructor (loc) {
        this.loc = loc;
    }
    move() {
        this.loc++;
        console.log(this.loc)
    }
}
let amy2 = new Car(1);
amy2.move();
let ben2 = new Car(9);
ben2.move();

