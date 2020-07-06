/* 
# Basic Algorithm Scripting:
*/

// 1) Convert Celsius to Fahrenhei
function convertToF(celsius) {
    let fahrenheit = 0;
    fahrenheit = celsius * (9/5) + 32;
    return fahrenheit;
}
convertToF(30);


// 2) Reverse a StringPassed
function reverseString(str) {
    // The split() method divides a String into an ordered list of substrings, 
    // puts these substrings into an array, and returns the array.

    return str.split('').reverse('').join('');
  
}
reverseString("hello");



// 3) Factorialize a Number
// For example: 5! = 1 * 2 * 3 * 4 * 5 = 120
function factorialize(num) {
    for(let i=1; num >=1; num--){
        i= i*num;
    }
    return i;
}
factorialize(5);


// 4) Find the Longest Word in a StringPassed
function findLongestWordLength(str) {
    let len = str.split(' ').map(word => word.length);
  
    let longest = Math.max(...len);
    console.log(longest)
    console.log(typeof(longest))
  
    return longest;
}
  
findLongestWordLength("The quick brown fox jumped over the lazy dog");



// 5)  Return Largest Numbers in Arrays
function largestOfFour(arr) {
    let largest = [];
    for (let i=0; i< arr.length; i++){
        let large = Math.max(...arr[i]);
        largest.push(large)
    }
    return largest;
}
  
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);



// 6)  Confirm the Ending using substring method
// e.g. 
// console.log('Mozilla'.substring(1, 3));
// expected output: "oz"
function confirmEnding(str, target) {

    let ending = str.substring(str.length - target.length);

    return ending === target ? true: false;
}

confirmEnding("Bastian", "n");



// 7) Repeat a String Repeat a String
function repeatStringNumTimes(str, num) {
    let i = 0;
    let str1 = '';
    while (i < num){
        str1 = str1.concat('',str);
        i++;
    }
  
    return str1;
}
repeatStringNumTimes("abc", 5);



// 8)  Truncate a String
function truncateString(str, num) {
    let s = ''
    if(num < str.length){
        s =  str.substring(0, num) + '...';
    } else{
        s = str
    }

    return s;
}
    
truncateString("A-tisket a-tasket A green and yellow basket", 8);




// 9)  Finders Keepers
function findElement(arr, func) {
    /* Array.find() returns the value of first element that matches 
    the criteria */
    return arr.find(func)


    /*
    to return a list of all elements that match the criteria 
    filter() returns an array of matches

    return arr.filter(num => func(num))

    */
}
  
findElement([1, 2, 3, 4], num => num % 2 === 0);



// 10) Check if a value is classified as a boolean primitive. Return true or false.
function booWho(bool) {
    return typeof(bool) === "boolean" ? true: false;
}
  
booWho(null);




// 11) Return the provided string with the first letter of each word capitalized. 
// Make sure the rest of the word is in lower case.
function titleCase(str) {
    str = str.toLowerCase().split(' ')
    str = str.map(word => {
        let firstChar = word.charAt(0).toUpperCase();
        return word.replace(word.charAt(0), firstChar);
    }).join(' ');
  
    return str;
}
  
titleCase("I'm a little tea pot");





//  12) Use the array methods slice and splice to copy each element of 
//  the first array into the second array, in order.
