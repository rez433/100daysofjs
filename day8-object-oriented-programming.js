/*
 1) Create Object 
 2) Access Porperties and Methods with dot notation and bracket
 3) Add properties and Methods 
 4) Remove Object Properties with "delete"
 5) Looping through Object Properties with "for ... in"
6) 


 */


// Create an object with object literal
const Car1 = {
    make: 'Ford',
    year: 2020,
    color: 'brown',
    desc: function () {
        return `this ${this.year} ${this.make} is  ${this.color} color.`;
    }
}

// class constructor
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

// Access object properties
micra.color;
// Blue

micra['make'];
// Nissan

micra.desc();
// this Nissan 2020 is Blue color.



/*
########### Add new properties and Methods to object ###########
*/
Car2.prototype.doors = 4;
micra.doors;
// 4

Car2.prototype.mpg = function() {
    return ("Real World MPG for " + this.year + " " + this.make + " is 6 liter per 100km.")
}

micra.mpg();
// Real World MPG for 2020 Nissan is 6 liter per 100km.


/*
########### Remove Object Properties ###########
*/
delete Car2.doors;
micra.doors; 
// undefined



/*
########### Looping through Object Properties ###########
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