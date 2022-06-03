/*
    CIT 281 Project 2
    Name: Rahul Paudel
*/
// Returns a random number between min (inclusive) and max (exclusive)
const getRandomInteger = function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

// Returns a singular random generated letter from alphabet constant //
const getRandomLetter = function(){
    return alphabet[getRandomInteger(0,alphabet.length)]; }

// Function will return a random length string, calls getRandomLetter, adjusted getRandomInteger() parameters between 10 (inclusive) and 21 (exclusive)//
const getRandomString = function(minLength, maxLength){
let results = "";
minLength = "";
maxLength = "";
for (let i = 0; i < lengthOfOutputString; i++) {
    results += getRandomLetter();
}
return results;
}

//Will return a string in ascending order //
const getSortedString = function(string) {return string.split('').sort().join('');};console.log(getSortedString("xpacd"))

let lengthOfOutputString = getRandomInteger(10, 21);

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

for (let i = 0; i < lengthOfOutputString; i++) {
    result += getRandomLetter();
}
console.log(getRandomString())