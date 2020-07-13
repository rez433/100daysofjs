/*
Intermediate Algorithm Scripting:
*/

/*
4) Wherefore art thou
*/
function whatIsInAName(collection, source) {
    // Only change code below this line
    let srcKey = Object.keys(source)
    
    return collection.filter(item => 
        srcKey.every(key => 
        item.hasOwnProperty(key) && item[key] === source[key]
        )
    )
  
    // Only change code above this line
  
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });



/*
5) Spinal Tap Case
*/
function spinalCase(str) {
    return str
        .split(/\s|_|(?=[A-Z])/)
        .join("-")
        .toLowerCase();
}

spinalCase('This Is Spinal Tap');


/*
6) Pig Latin
 */

function translatePigLatin(str) {
    if (str.match(/^[aeiou]/)) return str + "way";
  
    const consonantCluster = str.match(/^[^aeiou]+/)[0];
    return str.substring(consonantCluster.length) + consonantCluster + "ay";
}

// test here
translatePigLatin("consonant");


/* 
7) Search and Replace
*/

function myReplace(str, before, after) {
    let word = before[0] === before[0].toUpperCase() ? after.replace(after[0], after[0].toUpperCase()):after;
  
    str = str.replace(before, word)
    console.log(word)
    return str;
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");


/*
8) DNA Pairing 
*/

function pairElement(str) {
    let pair = {A: 'AT', T: 'TA', C: 'CG', G:'GC'}
    let arr = str.split('');
  
    arr = arr.map(x => pair[x].split(''))
    console.log(arr)
    return arr;
}

pairElement("GCG");


/*
9) Missing letters
*/
function fearNotLetter(str) {
    for(let i=0; i< str.length; i++){
        if(str.charCodeAt(i+1) - str.charCodeAt(i) >1 ){
            let d = str.charCodeAt(i) +1
            console.log(d)
            return String.fromCharCode(d)
        }
    }
}
fearNotLetter("abcde");


/*
10 Sorted Union 
*/
