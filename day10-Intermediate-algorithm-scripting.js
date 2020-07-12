/*
Intermediate Algorithm Scripting:
*/

// 1) Sum All Numbers in a Range
function sumAll([num1, num2]) {
    console.log(num1 + " " + num2)

    if(num1>num2) {[num1, num2] = [num2, num1]};
    console.log(num1 + " " + num2)

    let len = num2-num1;
    let sum = 0;

    for (let i=0; i <= len; i++){
        sum+=(num1+i);
    }
    console.log(sum)
    return sum;
}

sumAll([5, 10]);



/*
2) Diff Two Arrays
*/

function diffArray(arr1, arr2) {
    let newArr = [];
  
    let arr = [...arr1, ...arr2]
    newArr = arr.filter(item => !arr1.includes(item)|| !arr2.includes(item))
        return newArr;
}
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);



/*
3) Seek and Destroy
*/
function destroyer(arr) {
    // Remove all the values
    let newArr = Array.from(arguments);
    for (let i=0; i<arr.length; i++){
        for (let j=0; j<newArr.length; j++){
            if (arr[i] === newArr[j]){
            delete arr[i];
            }
        }
    }
    
    return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);



/*
4) Wherefore art thou
*/