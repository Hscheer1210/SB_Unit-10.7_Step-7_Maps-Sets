
// Quick Question #1
// What does the following code return?

new Set([1,1,2,2,3,4]) // {1, 2, 3, 4}


// Quick Question #2
// What does the following code return?

[...new Set("referee")].join("") // 'ref'


// Quick Question #3
// What does the Map m look like after running the following code?

let m = new Map();
m.set([1,2,3], true);
m.set([1,2,3], false);
// 0: {Array(3) => true}
// 1: {Array(3) => false}


// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate(arr) {
    let arrSet = new Set(arr);
    return arrSet.size !== arr.length;
}

/* 
Solution:
const hasDuplicate = arr => new Set(arr).size !== arr.length
*/


// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.



function vowelCount(str) {

    function vowelCheck(letter) {
        let vowels = ['a', 'e', 'i', 'o', 'u'];
        return vowels.includes(letter);
    }

    let vowelMap = new Map();
    let vowelMod = str.toLowerCase().split("");

    for (let char of vowelMod) {
        if(vowelCheck(char)) {
            if(vowelMap.has(char)) {
                vowelMap.set(char, vowelMap.get(char) + 1);
            } else {
                vowelMap.set(char, 1);
            }
        }
    }
    return vowelMap;
}
