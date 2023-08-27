// Reverse a String:
function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('hello'));  // Output: 'olleh'

// Find Maximum Number:
function findMax(numbers) {
    return Math.max(...numbers);
}

console.log(findMax([3, 9, 1, 7]));  // Output: 9

// Remove Duplicates from Array:
function removeDuplicates(arr) {
    return [...new Set(arr)];
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));  // Output: [1, 2, 3, 4, 5]

// Count Occurrences of Element:
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5));  // Output: 120


// Reverse Words in a Sentence:
function reverseWords(sentence) {
    return sentence.split(' ').reverse().join(' ');
}

console.log(reverseWords('Hello world'));  // Output: 'world Hello'

// Title Case a Sentence:
function titleCase(sentence) {
    return sentence.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(titleCase('this is a test sentence'));  // Output: 'This Is A Test Sentence'

// Find Longest Word:
function findLongestWord(sentence) {
    return sentence.split(' ').reduce((longest, current) => current.length > longest.length ? current : longest, '');
}

console.log(findLongestWord('This is a test sentence'));  // Output: 'sentence'

// Remove Falsy Values from Array:
function removeFalsyValues(arr) {
    return arr.filter(item => Boolean(item));
}

console.log(removeFalsyValues([0, 'apple', '', false, 9]));  // Output: ['apple', 9]

// Swap Two Variables:
let a = 5, b = 10;
[a, b] = [b, a];
console.log(a, b);  // Output: 10 5

// Find Common Elements in Two Arrays:
const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];
const commonElements = array1.filter(item => array2.includes(item));
console.log(commonElements);  // Output: [3, 4, 5]

// Sort an Array of Objects by a Property:
const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
const sortedByAge = people.sort((a, b) => a.age - b.age);
console.log(sortedByAge);



