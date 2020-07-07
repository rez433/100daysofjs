/* 
# Basic Algorithm Scripting:
*/

//  12) Use the array methods slice and splice to copy each element of 
//  the first array into the second array, in order.
function frankenSplice(arr1, arr2, n) {
    // slice() makes a shallow copy of arr2
    // so that arr2 remains unchanged
    let arr = arr2.slice()
    arr.splice(n, 0, ...arr1.slice(0))
    return arr;
}
    
frankenSplice([1, 2, 3], [4, 5, 6], 1);
// [ 4, 1, 2, 3, 5, 6 ]



//  13) Remove all falsy values from an array.
function bouncer(arr) {
    let falsy = [false, null, 0, "", undefined,NaN]

    // it is possible to check the arr against other values too
    let arr1 = arr.filter(val => falsy.includes(!val))

    // The better solution is to filter for booleans
    // filter() return an array of all truthy values
    // let arr1 = arr.filter(Boolean)


    console.log(arr1)
    return arr1;
}

bouncer([7, "ate", "", false, 9]);
// [ 7, 'ate', 9 ]



// 14) Return the lowest index at which a value (second argument) should
// be inserted into an array (first argument) once it has been sorted.
// The returned value should be a number.
function getIndexToIns(arr, num) {
    arr.push(num);
    arr.sort((a,b)=> {
        return a - b;
    });
  
    console.log(arr.indexOf(num))
    return arr.indexOf(num);
}
  
getIndexToIns([40, 60], 50);



// 15) Return true if the string in the first element of the array contains all 
// of the letters of the string in the second element of the array.
function mutation(arr) {
    let arr1 = arr[0].toLowerCase().split('');
    let arr2 = arr[1].toLowerCase().split('');
    return arr2.every(char => arr1.includes(char)?true:false)
}

mutation(["hello", "hey"]);



// 16) Write a function that splits an array (first argument) into groups the
// length of size (second argument) and returns them as a two-dimensional array.
function chunkArrayInGroups(arr, size) {
    // Break it up.
   let arr1 = [];
    for (let i=0; i<arr.length; i+=size){
        arr1.push(arr.slice(i, i+size))
    }
    console.log(arr1)
    return arr1;
}

chunkArrayInGroups(["a", "b", "c", "d", "e"], 2);
// [ [ 'a', 'b' ], [ 'c', 'd' ], ['e'] ]