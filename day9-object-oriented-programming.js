/*
 1) Create Object 
 2) Access Porperties and Methods with dot notation and bracket
 3) Add properties and Methods 
 4) Remove Object Properties with "delete"
 5) Looping through Object Properties with "for ... in"
 6) Object.keys() and Object.values()
 7) Object.enteries()
 8) Object.assign()
 9) Object.freeze()
 10) Object.seal()
 11) Classes
 12) Extending a Class
 */


 // ############ 1) Create Object ############  //
/*
initialize an object with object literal
*/
const Car1 = {
    make: 'Ford',
    year: 2020,
    color: 'brown',
    desc: function () {
        return `this ${this.year} ${this.make} is  ${this.color} color.`;
    }
}

// Create a new Object
const micra = Object.create(Car1);
micra.make = 'Nissan';
micra.color= 'Blue';



// ############ 2) Access object properties ############  //
micra.color;
// Blue

micra['make'];
// Nissan

micra.desc();
// this Nissan 2020 is Blue color.



// ############ 3) Add object properties and methods ############  //
Car2.prototype.doors = 4;
micra.doors;
// 4

Car2.prototype.mpg = function() {
    return ("Real World MPG for " + this.year + " " + this.make + " is 6 liter per 100km.")
}

micra.mpg();
// Real World MPG for 2020 Nissan is 6 liter per 100km.


/*
########### 4) Remove Object Properties ###########
*/
delete Car2.doors;
micra.doors; 
// undefined



/*
########### 5) Looping through Object Properties ###########
 Javascript has built in "for ... in" Loop specially for object
*/
const Jeep = {
    make: "Jeep",
    year: 2020,
    color: 'Black'
}

for ( let key in Jeep){
    console.log(key + ': ' + Jeep[key])
}
/*
output: 
make: Jeep
year: 2020
color: Black
*/

/*
enumerating through object with Object.enteries
*/
for (let [key, value] of Object.entries(Jeep)){
    console.log(`${key}: ${value}`)
}
/*
output:
make: Jeep
year: 2020
color: Black
*/



/*
6) Object.keys and Object.values
Object.keys() creates an array containing the keys of an object
Object.values() creates an array containing the values of an object
*/
const Suv = {
    make: "Jeep",
    year: 2020,
    color: 'Black'
}

const suv_keys = Object.keys(Suv);
console.log(suv_keys);
// [ "make", "year", "color" ]


const suv_values = Object.values(Suv);
console.log(suv_values);
// ["Jeep", 2020, "Black"]

/*
Object.keys can be useful to loop through object
*/

Object.keys(Suv).forEach(key => {
    let value = Suv[key];

    console.log(`${key}: ${value}`);
})

const suv_length = Object.keys(Suv).length;


/*
7) Object.entries() 
creates a nested array of the key/value pairs of an object.
*/

const entries = Object.entries(Suv);
console.log(entries);
/*
[
    [ "make", "Jeep" ]
    [ "year", 2020 ]
    [ "color", "Black" ]
]

*/




/*
8) Object.assign() 
is used to copy values from one object to another
or merge them to gether
*/

const Car = {
    model: 'Volvo',
    year: 2020,
    color: 'Silver'
}

const Sedan = {
    type: 'sedan',
    doors: 4
}
const Volvo_S60 = Object.assign(Car, Sedan);
console.log(Volvo_S60);
/*
{
    color: "Silver",
    doors: 4,
    model: "Volvo",
    type: "sedan",
    year: 2020
}
*/

/*
To merge two object we can use spread operator
*/
const Volvo_s40 = {...Car, ...Sedan};




/*
9) Object.freeze() 
prevents modification (add,edit, remove) to properties and values
*/

const Volvo_S50 = Object.freeze(Volvo_S60);
Volvo_S50.name = "Volvo S50";
Volvo_S50.type = 'Suv';
console.log(Volvo_S50)
​/*
{
    color: "Silver",
    doors: 4,
    model: "Volvo",
    type: "sedan",
    year: 2020
}
*/


/*
10) Object.seal()
prevents new properties from being added to an object, 
but allows the modification of existing properties. 
*/

const Volvo_S80 = Object.seal(Volvo_S60);
Volvo_S80.name = "Volvo S80";
Volvo_S80.type = 'Suv';
console.log(Volvo_S80)
/*
{
    color: "Silver",
    doors: 4,
    model: "Volvo",
    type: "Suv",
    year: 2020
}
*/





/*
############ 11) Classes Are Functions  ##################
A constructor function is initialized with a number of parameters, 
which would be assigned as properties of this, referring to the function itself. 

It is a common practice in ES5 to define methods 
on the prototype for increased efficiency and code readability.
*/

// ES5 constructor function
function Car1(make, year, color){
    this.make = make;
    this.year = year;
    this.color = color;
}
Car1.prototype.desc= function () {
    return `this ${this.year} ${this.make} is  ${this.color} color.`;
}


// ES6 class constructor
// In ES6 With classes this syntax is simplified, and the method 
// can be added directly to the class. 
class Car2{
    constructor(make, year, color){
        this.make = make;
        this.year = year;
        this.color = color;
    }

    desc(){
        return `this ${this.year} ${this.make} is  ${this.color} color.`;
    }
}

let micra = new Car2('Nissan', 2020, 'Blue')




/*
 12) Extending a Class
An advantageous feature of constructor functions and classes is that they can be 
extended into new object blueprints based off of the parent. This prevents repetition 
of code for objects that are similar but need some additional or more specific features.
*/

// in ES6 classs, we can use super keyword to access parent functions
// Create new class from Car1
class Suv extends Car2{
    constructor(make, year, color, type){
        // chain constructor with super
        super(make, year, color);

        // Add a new property
        this.type = type;
    }
}

const Joke = new Suv('Nissan', 2020, 'Red', 'Suv'); 
console.log(Joke)
/*
{
    color: "Red",
    make: "Nissan",
    type: "Suv",
    year: 2020
}
*/


