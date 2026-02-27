/**************************************************\
 * *****************************************************
 * *********************************************
 */


//************************* */
//1. reverse the word in a string
let nstr: string = "";
let rev = (inputString: string) => {
    let word: string[] = inputString.split(" ");
    for (let i = 0; i < word.length; i++) {
        nstr = word[i] + " " + nstr;

    }
    console.log(nstr.trim());

}

rev("this is sai");
//Method 2
// const reverseWords = (input: string): void => {
//     const words = input.split(" ");
//     let result = "";

//     for (const word of words) {
//         // Prepend the word and a space to the result
//         result = `${word} ${result}`;
//     }

//     console.log(result.trim());
// };

// reverseWords("this is sai"); // Output: "sai is this"
//Method 3
const reverseWords = (input: string): string => {
    return input
        .split(" ")       // Split by space into an array of words
        .reverse()         // Reverse the array elements
        .join(" ");        // Join them back with a space
};

console.log(reverseWords("this is sai")); // Output: "sai is this"



//****************************** */


//2. reversed string********
//Method 1
// const revString = (input: string): string => {
//     let reversed = "";
//     for (const char of input) {
//         reversed = char + reversed;
//     }
//     return reversed;
// };
// console.log(revString("this is sai"));

//Method 2
const revString = (input: string): string => {
    return input.split("").reverse().join("");
};

console.log(revString("this is sai"));


//***************** */
//3 reverse each word of the string

function reverseEachWordOfString(inputString: string): void {
    // Split the string into an array of words
    const words: string[] = inputString.split(" ");
    let reverseString: string = "";

    for (let i = 0; i < words.length; i++) {
        const word: string = words[i];
        let nstr: string = "";

        // Reverse the individual word
        for (let j = 0; j < word.length; j++) {
            //  const ch: string = word.charAt(j);
            nstr = word.charAt(j) + nstr;
        }

        // Add reversed word and a space
        reverseString = reverseString + nstr + " ";
    }

    console.log(inputString);
    console.log(reverseString.trim()); // trim() removes the trailing space
}

reverseEachWordOfString("this is sai");


// function reverseEachWord(inputString: string): void {
//     const reversed = inputString
//         .split(" ")               // 1. Split into words
//         .map(word =>              // 2. For each word...
//             word
//                 .split("")        // ...split into characters
//                 .reverse()        // ...flip characters
//                 .join("")         // ...rejoin characters
//         )
//         .join(" ");               // 3. Join words back with spaces

//     console.log("Original:", inputString);
//     console.log("Reversed:", reversed);
// }

// reverseEachWord("this is sai"); // Output: "siht si ias"
//*************************************************************************************** */
//4. reverse each word of the string with special characters
function reverseEachWord(inputString: string): string {
    const words = inputString.split(" ");
    let result = "";

    for (const word of words) {
        let reversedWord = "";
        for (const char of word) {
            // This builds the word backwards
            reversedWord = char + reversedWord;
        }
        // Add the reversed word and a space
        result += reversedWord + " ";
    }

    return result.trim();
}

console.log(reverseEachWord("this@is&sai")); // Output: "siht@si&ias"


function reverseEachWordWithSymbols(inputString: string): string {
    // [a-zA-Z]+ matches any sequence of letters
    // 'g' finds all occurrences in the string
    return inputString.replace(/[a-zA-Z]+/g, (word) => {
        // Reverse only the matched sequence of letters
        return word.split("").reverse().join("");
    });
}

// Test Case
const result1 = reverseEachWordWithSymbols("this@is&sai");
console.log(result1); // Output: "siht@si&ias"

// Another Test Case
console.log(reverseEachWordWithSymbols("Hello, World! 123"));
// Output: "olleH, dlroW! 123"


function reverseAlphanumericWords(inputString: string): string {
    /**
     * [a-zA-Z0-9]+  -> Matches any sequence of letters (a-z, A-Z) or numbers (0-9)
     * /g            -> Global flag to find ALL occurrences in the string
     */
    const regex = /[a-zA-Z0-9]+/g;

    return inputString.replace(regex, (word) => {
        // Reverse only the alphanumeric "word" found by the regex
        return word.split("").reverse().join("");
    });
}

// --- Test Cases ---

// 1. Original requirement
console.log(reverseAlphanumericWords("this@is&sai"));
// Output: "siht@si&ias"

// 2. Requirement with numbers
console.log(reverseAlphanumericWords("hello@123&world456"));
// Output: "olleh@321&dlrow654"

// 3. Mixed punctuation
console.log(reverseAlphanumericWords("TypeScript-2024! is_awesome"));
// Output: "tpircSepeTy-4202! si_emosewa"



//********************** */

//5 – input array was given [ 1,1,2,2,3,4,5,5,6,6]
// Output – [3,4]

function findUniqueElements(nums: number[]): number[] {
    // 1. Create a Map to store the frequency of each number
    const frequencyMap = new Map<number, number>();

    for (const num of nums) {
        const count = frequencyMap.get(num) || 0;
        frequencyMap.set(num, count + 1);
    }

    // 2. Filter the array to keep only numbers that appeared once
    const result: number[] = [];
    for (const [num, count] of frequencyMap) {
        if (count === 1) {
            result.push(num);
        }
    }

    return result;
}

const inputArray = [1, 1, 2, 2, 3, 4, 5, 5, 6, 6];
console.log(findUniqueElements(inputArray)); // Output: [3, 4]


// Example usage:

function duplicateCharacterCount(inputString: string): void {
    // 1. Create a Map to store character frequencies (equivalent to HashMap)
    const charCountMap = new Map<string, number>();

    // 2. Iterate through each character of the string
    for (const char of inputString) {
        // Equivalent to !String.valueOf(c).isBlank()
        // Checks if the character is not just whitespace
        if (char.trim().length > 0) {
            // Get current count or default to 0, then increment
            const count = charCountMap.get(char) || 0;
            charCountMap.set(char, count + 1);
        }
    }

    console.log(`Duplicate Characters in : ${inputString}`);

    // 3. Iterate through map entries to find duplicates
    for (const [char, count] of charCountMap) {
        // if (count > 1) {
        console.log(`${char} : ${count}`);
        // }
    }
}
duplicateCharacterCount("Better Buttera");



function CharacterCount(inputString: string): void {
    const counts = inputString
        .split("") // Convert string to array of characters
        .filter(char => char.trim().length > 0) // Remove whitespace
        .reduce((acc: Record<string, number>, char) => {
            // Increment the count for the character in the accumulator object
            acc[char] = (acc[char] || 0) + 1;
            return acc;
        }, {});

    console.log(`Character Counts in: ${inputString}`);

    // Display the results using Object.entries
    Object.entries(counts).forEach(([char, count]) => {
        console.log(`${char} : ${count}`);
    });
}
CharacterCount("sai Better Buttera");
//****************************** */
//6. print each letter twice from a given string
function doubleCharacters(str: string): string {
    return str
        .split("")          // ["h", "e", "l", "l", "o"]
        .map(char => char + char) // ["hh", "ee", "ll", "ll", "oo"]
        .join("");          // "hheelloo"
}

console.log(doubleCharacters("hello"));
//..........................................
//7.program to gives Output: a2b2c3d2 for the Input String Str = “aabbcccdd” 
function compressString(str: string): string {
    if (!str) return "";

    let result = "";
    let count = 1;

    for (let i = 0; i < str.length; i++) {
        // If the next character is the same, increment the count
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            // If the next character is different, append current char and its count
            result += str[i] + count;
            // Reset count for the next unique character
            count = 1;
        }
    }

    return result;
}

const inputStr = "aabbcccdd";
console.log(compressString(inputStr)); // Output: "a2b2c3d2"
//*********************************
//8. program to gives two Output: “abcde”, “ABCDE” for the Input  String Str = “aBACbcEDed” */
function separateAndSort(str: string): void {
    // 1. Convert string to an array of unique characters to handle duplicates
    const uniqueChars = [...new Set(str)];

    // 2. Filter for lowercase, then sort alphabetically
    const lowerCase = uniqueChars
        .filter(char => char === char.toLowerCase())
        .sort()
        .join("");

    // 3. Filter for uppercase, then sort alphabetically
    const upperCase = uniqueChars
        .filter(char => char === char.toUpperCase())
        .sort()
        .join("");

    console.log(`"${lowerCase}", "${upperCase}"`);
}

const inputStr1 = "aBACbcEDed";
separateAndSort(inputStr1);
/*************************************** */
//9.program to gives two Output: “Subburaj”, “123” for the Input  String Str = “Subbu123raj”
//method1
function splitAlphaNumeric(str: string): void {
    // [a-zA-Z]+ matches all sequences of letters
    // [0-9]+ matches all sequences of digits
    const letters = str.match(/[a-zA-Z]+/g)?.join("") || "";
    const numbers = str.match(/[0-9]+/g)?.join("") || "";

    console.log(`"${letters}", "${numbers}"`);
}

const inputStr2 = "Subbu123raj";
splitAlphaNumeric(inputStr2); // Output: "Subburaj", "123"

//method2
function separateChars(str: string): void {
    let letters = "";
    let numbers = "";

    for (const char of str) {
        // Check if character is a digit
        if (char >= '0' && char <= '9') {
            numbers += char;
        } else {
            letters += char;
        }
    }

    console.log(`"${letters}", "${numbers}"`);
}

separateChars("Subbu123raj");
//************************* */
//10. program to gives Output: “32412120000” for the Input  String Str = “32400121200”
//method1
function shiftZerosToEnd(str: string): string {
    const nonZeros = str.split("").filter(char => char !== "0").join("");
    const zeros = str.split("").filter(char => char === "0").join("");

    return nonZeros + zeros;
}

const input = "32400121200";
console.log(shiftZerosToEnd(input)); // Output: "32412120000"
//method2
function moveZerosToEndManual(str: string): string {
    let nonZeroPart = "";
    let zeroPart = "";

    for (const char of str) {
        if (char === "0") {
            zeroPart += "0";
        } else {
            nonZeroPart += char;
        }
    }

    return nonZeroPart + zeroPart;
}

console.log(moveZerosToEndManual("32400121200"));
//****************************** */
// 11. Remove duplicates from an array and return the unique elements
function removeDuplicates(arr: number[]): number[] {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}

const nums: number[] = [1, 2, 2, 3, 4, 4, 5];

// ES6 Set approach (Fastest & Shortest)
const uniqueNums = [...new Set(nums)];

console.log(uniqueNums); // [1, 2, 3, 4, 5]


//*************** */
//12. swap two numbers without using a temporary variable
function swapWithoutTemp(a: number, b: number): [number, number] {
    a = a + b; // Step 1: a now holds the sum of a and b
    b = a - b; // Step 2: b now holds the original value of a
    a = a - b; // Step 3: a now holds the original value of b

    return [a, b];
}
console.log(swapWithoutTemp(5, 10)); // Output: [10, 5]

//13.swap two strings without using a temporary variable
function swapStringsWithoutTemp(str1: string, str2: string): [string, string] {
    str1 = str1 + str2; // Step 1: str1 now holds the concatenation of str1 and str2    
    str2 = str1.substring(0, str1.length - str2.length); // Step 2: str2 now holds the original value of str1
    str1 = str1.substring(str2.length); // Step 3: str1 now holds the original value of str2
    return [str1, str2];
}
console.log(swapStringsWithoutTemp("Hello", "World")); // Output: ["World", "Hello"]

//14 fibonacci series
function fibonacci(n: number): number[] {
    const sequence: number[] = [];
    let a = 0, b = 1;
    for (let i = 0; i < n; i++) {
        sequence.push(a);
        [a, b] = [b, a + b]; // Update a and b simultaneously
    }
    return sequence;
}
console.log(fibonacci(10)); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]


//15 Factorial of a number
function factorial(n: number): number {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
//method2
function factorialIterative(n: number): number {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}
console.log(factorialIterative(5)); // Output: 120
/*16 *
     **
     ***
     ****

//  */

function printPattern(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        console.log("*".repeat(i));
    }
}

printPattern(4);
/*****
***
**
*/
function printReversePattern(rows: number): void {
    for (let i = rows; i >= 1; i--) {
        console.log("*".repeat(i));
    }
}

printReversePattern(4);
//17.pryamid pattern
function printPyramid(rows: number): void {
    for (let i = 1; i <= rows; i++) {
        const spaces = " ".repeat(rows - i); // Calculate leading spaces
        const stars = "*".repeat(2 * i - 1); // Calculate stars for the current row
        console.log(spaces + stars); // Print the row with spaces and stars
    }
}

printPyramid(5);
/* Reverse Pyramid
*******
 *****
  ***
   *
   * */

for (let i = 4; i >= 1; i--) {
    console.log(" ".repeat(4 - i) + "*".repeat(2 * i - 1));
}

//18 diamond pattern
function printDiamond(rows: number): void {
    // Upper half of the diamond
    for (let i = 1; i <= rows; i++) {

        const spaces = " ".repeat(rows - i);
        const stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
    // Lower half of the diamond
    for (let i = rows - 1; i >= 1; i--) {

        const spaces = " ".repeat(rows - i);
        const stars = "*".repeat(2 * i - 1);
        console.log(spaces + stars);
    }
}

printDiamond(5);
//19.Number Diamond Pattern
function printNumberDiamond(rows: number): void {
    // Upper half of the diamond
    for (let i = 1; i <= rows; i++) {
        const spaces = " ".repeat(rows - i);
        let numbers = "";
        for (let j = 1; j <= i; j++) {
            numbers += j + " ";
        }
        console.log(spaces + numbers.trim());
    }
    // Lower half of the diamond
    for (let i = rows - 1; i >= 1; i--) {
        const spaces = " ".repeat(rows - i);
        let numbers = "";
        for (let j = 1; j <= i; j++) {
            numbers += j + " ";
        }
        console.log(spaces + numbers.trim());
    }
}
printNumberDiamond(5);
//20. multiplication table
function multiplicationTable(num: number): void {
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

multiplicationTable(5);

//21.Sum of digits in a number
function sumOfDigits(num: number): number {
    let sum = 0;
    while (num > 0) {
        sum += num % 10; // Add the last digit to sum
        num = Math.floor(num / 10); // Remove the last digit
    }
    return sum;
}

console.log(sumOfDigits(12345)); // Output: 15
//22. palindrome number
function isPalindrome(num: number): boolean {
    const str = num.toString();
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
console.log(isPalindrome(12321)); // Output: true
console.log(isPalindrome(12345)); // Output: false

//23 String palindrome
function isStringPalindrome(str: string): boolean {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
console.log(isStringPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isStringPalindrome("Hello")); // Output: false
console.log(isStringPalindrome("madam"));
//24 array palindrome
function isArrayPalindrome(arr: any[]): boolean {
    const len = arr.length;
    for (let i = 0; i < len / 2; i++) {
        if (arr[i] !== arr[len - 1 - i]) {
            return false;
        }
    }
    return true;
}
console.log(isArrayPalindrome([1, 2, 3, 2, 1])); // Output: true
console.log(isArrayPalindrome([1, 2, 3, 4, 5])); // Output: false
//Method2
function isPalindrome1(arr: number[]): boolean {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left] !== arr[right]) {
            return false;
        }
        left++;
        right--;
    }

    return true;
}

console.log(isPalindrome1([1, 2, 3, 2, 1])); // true
console.log(isPalindrome1([1, 2, 3, 4]));    // false
//Method3
function isPalindrome2(arr: number[]): boolean {
    const reversed = [...arr].reverse();
    return arr.every((value, index) => value === reversed[index]);
}

console.log(isPalindrome2([1, 2, 3, 2, 1])); // true
console.log(isPalindrome2([1, 2, 3, 4]));    // false


//25. Armstrong number
function isArmstrong(num: number): boolean {
    const strNum = num.toString();
    const numDigits = strNum.length;
    let sum = 0;
    for (const digit of strNum) {
        sum += Math.pow(parseInt(digit), numDigits);
    }
    return sum === num;
}
console.log(isArmstrong(153));

//Method2
function isArmstrongNumber(num: number): boolean {
    let temp = num;
    let sum = 0;
    const power = num.toString().length;

    while (temp > 0) {
        const digit = temp % 10;
        sum += digit ** power;
        temp = Math.floor(temp / 10);
    }

    return sum === num;
}
console.log(isArmstrongNumber(153)); // true
console.log(isArmstrongNumber(123)); // false   
//26. prime number
function isPrime(num: number): boolean {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}
console.log(isPrime(7));
//Method2
function isPrimeNumber(num: number): boolean {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) return false;
    }

    return true;
}
console.log(isPrimeNumber(7)); // true
console.log(isPrimeNumber(10)); // false
//Print Prime Numbers from 1–100
for (let i = 1; i <= 100; i++) {
    if (isPrime(i)) {
        console.log(i);
    }
}
//27. Anagram
function areAnagrams(str1: string, str2: string): boolean {
    const normalize = (str: string) =>
        str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().split("").sort().join("");
    return normalize(str1) === normalize(str2);
}
console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world")); // false
//Method2 
function isAnagram(str1: string, str2: string): boolean {
    if (str1.length !== str2.length) return false;

    const charCount: Record<string, number> = {};

    for (let char of str1) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char]) return false;
        charCount[char]--;
    }

    return true;
}

console.log(isAnagram("listen", "silent")); // true
//28. even or odd number
function isEven(num: number): boolean {
    return num % 2 === 0;
}
function isOdd(num: number): boolean {
    return num % 2 !== 0;
}
console.log(isEven(4)); // true
console.log(isOdd(4));
//Method2
function checkEvenOdd(num: number): string {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log(checkEvenOdd(4)); // "Even"
console.log(checkEvenOdd(5)); // "Odd"
//29. print even indexed characters from a string
function printEvenIndexedChars(str: string): string {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 === 0) {
            result += str[i];
        }
    }
    return result;
}
console.log(printEvenIndexedChars("Hello World")); // Output: "HloWrd"
//Method2
function getEvenIndexedCharacters(str: string): string {
    return str

        .split("") // Convert string to array of characters
        .filter((_, index) => index % 2 === 0) // Keep only characters at even indices
        .join(""); // Join back to a string
}
console.log(getEvenIndexedCharacters("Hello World")); // Output: "HloWrd"
//Method3
function printEvenIndexedChars1(str: string): void {
    for (let i = 0; i < str.length; i += 2) {
        console.log(str[i]);
    }
}

//30. odd indexed characters from a string
function printOddIndexedChars(str: string): string {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        if (i % 2 !== 0) {
            result += str[i];
        }
    }
    return result;
}
console.log(printOddIndexedChars("Hello World")); // Output: "el ol"
//Method2
function getOddIndexedCharacters(str: string): string {
    return str
        .split("") // Convert string to array of characters
        .filter((_, index) => index % 2 !== 0) // Keep only characters at odd indices
        .join(""); // Join back to a string
}
console.log(getOddIndexedCharacters("Hello World"));
//Method3
function printOddIndexedChars1(str: string): void {
    for (let i = 1; i < str.length; i += 1) {
        console.log(str[i]);
    }
}

//31.odd and even number count in a given range
function countEvenOddInRange(start: number, end: number): { evenCount: number; oddCount: number } {
    let evenCount = 0;
    let oddCount = 0;
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    return { evenCount, oddCount };
}
const rangeCount = countEvenOddInRange(1, 10);
console.log(`Even Count: ${rangeCount.evenCount}, Odd Count: ${rangeCount.oddCount}`);
//32.array sorting
function bubbleSort(arr: number[]): number[] {
    const sortedArr = [...arr]; // Create a copy to avoid mutating the original array
    const n = sortedArr.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (sortedArr[j] > sortedArr[j + 1]) {
                // Swap
                [sortedArr[j], sortedArr[j + 1]] = [sortedArr[j + 1], sortedArr[j]];
            }
        }
    }
    return sortedArr;
}
const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]
//Method2
function selectionSort(arr: number[]): number[] {
    const sortedArr = [...arr];
    const n = sortedArr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (sortedArr[j] < sortedArr[minIndex]) {
                minIndex = j;
            }


        }
        // Swap
        [sortedArr[i], sortedArr[minIndex]] = [sortedArr[minIndex], sortedArr[i]];
    }
    return sortedArr;
}
console.log(selectionSort(unsortedArray)); // Output: [11, 12, 22, 25, 34, 64, 90]

//33.array of strings sorting
function sortStringArray(arr: string[]): string[] {
    return arr.sort();
}
const stringArray = ["banana", "apple", "cherry", "date"];
console.log(sortStringArray(stringArray)); // Output: ["apple", "banana", "cherry", "date"]
``//method2
function sortStringArray1(arr: string[]): string[] {
    const n = arr.length;

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                // Swap
                const temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }

    return arr;
}

console.log(sortStringArray1(["banana", "apple", "cherry"]));


//34. largest and smallest number in an array
function findLargestAndSmallest(arr: number[]): { largest: number; smallest: number } {
    if (arr.length === 0) {

        throw new Error("Array cannot be empty");
    }
    let largest = arr[0];
    let smallest = arr[0];
    for (const num of arr) {
        if (num > largest) {
            largest = num;
        }
        if (num < smallest) {
            smallest = num;
        }
    }
    return { largest, smallest };
}
const numbers = [3, 5, 1, 8, 2];
const result = findLargestAndSmallest(numbers);
console.log(`Largest: ${result.largest}, Smallest: ${result.smallest}`);
//method2
function findMinMax(arr: number[]): { min: number; max: number } {
    if (arr.length === 0) {
        throw new Error("Array cannot be empty");
    }
    let min = arr[0];
    let max = arr[0];

    for (const num of arr) {
        if (num < min) {
            min = num;
        }

        if (num > max) {
            max = num;
        }
    }

    return { min, max };
}
const nums1 = [3, 5, 1, 8, 2];
const minMaxResult = findMinMax(nums1);
console.log(`Min: ${minMaxResult.min}, Max: ${minMaxResult.max}`);

//35. second largest and second smallest number in an array
function findSecondLargestAndSmallest(arr: number[]): { secondLargest: number; secondSmallest: number } {
    if (arr.length < 2) {
        throw new Error("Array must have at least two elements");
    }
    let largest = -Infinity;
    let secondLargest = -Infinity;
    let smallest = Infinity;
    let secondSmallest = Infinity;
    for (const num of arr) {
        if (num > largest) {
            secondLargest = largest;
            largest = num;
        } else if (num > secondLargest && num !== largest) {
            secondLargest = num;
        }
        if (num < smallest) {
            secondSmallest = smallest;
            smallest = num;
        } else if (num < secondSmallest && num !== smallest) {
            secondSmallest = num;
        }
    }
    return { secondLargest, secondSmallest };
}
const arr = [3, 5, 1, 8, 2];
const secondResult = findSecondLargestAndSmallest(arr);
console.log(`Second Largest: ${secondResult.secondLargest}, Second Smallest: ${secondResult.secondSmallest}`);
//method2
function findSecondMinMax(arr: number[]): { secondMin: number; secondMax: number } {
    // Remove duplicates
    const unique = [...new Set(arr)];

    if (unique.length < 2) {
        throw new Error("Not enough unique elements");
    }

    // Sort ascending
    unique.sort((a, b) => a - b);

    return {
        secondMin: unique[1],
        secondMax: unique[unique.length - 2]
    };
}

console.log(findSecondMinMax([4, 7, 1, 9, 2]));
//36.averge of prime numbers in a given range
function averageOfPrimesInRange(start: number, end: number): number {
    let sum = 0;
    let count = 0;
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
            count++;
        }
    }
    return count > 0 ? sum / count : 0;
}
console.log(averageOfPrimesInRange(1, 10)); // Output: 4.2
//Method2
function averageOfPrimes(start: number, end: number): number {
    let sum = 0;
    let count = 0;

    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            sum += i;
            count++;
        }
    }

    return count > 0 ? sum / count : 0;
}
console.log(averageOfPrimes(1, 10)); // Output: 4.2

//37.missing array number
function findMissingNumber(arr: number[], n: number): number {
    const expectedSum = (n * (n + 1)) / 2; // Sum of first n natural numbers
    const actualSum = arr.reduce((sum, num) => sum + num, 0); // Sum of array elements
    return expectedSum - actualSum; // The difference is the missing number
}
const arr1 = [1, 2, 4, 5];
console.log(findMissingNumber(arr1, 5)); // Output: 3
//Method2
function findMissing(arr: number[], n: number): number {
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = arr.reduce((acc, val) => acc + val, 0);
    return expectedSum - actualSum;
}
console.log(findMissing([1, 2, 4, 5], 5)); // Output: 3
//38. duplicate number in an array
function findDuplicate(arr: number[]): number | null {
    const seen = new Set<number>();
    for (const num of arr) {
        if (seen.has(num)) {
            return num; // Return the first duplicate found
        }
        seen.add(num);
    }
    return null; // No duplicates found
}
const arr2 = [1, 2, 3, 4, 2];
console.log(findDuplicate(arr2)); // Output: 2
//39. count of duplicate numbers in an array
function countDuplicates(arr: number[]): Record<number, number> {
    const countMap: Record<number, number> = {};
    for (const num of arr) {
        countMap[num] = (countMap[num] || 0) + 1;
    }
    const duplicatesCount: Record<number, number> = {};
    for (const num in countMap) {
        if (countMap[num] > 1) {
            duplicatesCount[parseInt(num)] = countMap[num];
        }
    }
    return duplicatesCount;
}
const arr3 = [1, 2, 3, 4, 2, 3, 5];
console.log(countDuplicates(arr3)); // Output: { 2: 2, 3: 2 }   
//40. count vowels and constants in a string
function countVowelsAndConsonants(str: string): { vowels: number; consonants: number } {
    const vowelsSet = new Set(["a", "e", "i", "o", "u"]);
    let vowels = 0;
    let consonants = 0;
    for (const char of str.toLowerCase()) {
        if (vowelsSet.has(char)) {
            vowels++;
        } else if (char >= "a" && char <= "z") {
            consonants++;
        }
    }
    return { vowels, consonants };
}
const inputStr3 = "Hello World";
const countResult = countVowelsAndConsonants(inputStr3);
console.log(`Vowels: ${countResult.vowels}, Consonants: ${countResult.consonants}`);
//Method2
function countVowelsAndConsonants1(str: string): { vowels: number; consonants: number } {
    let vowels = 0;
    let consonants = 0;

    const lowerStr = str.toLowerCase();

    for (let char of lowerStr) {
        if (char >= 'a' && char <= 'z') {
            if ("aeiou".includes(char)) {
                vowels++;
            } else {
                consonants++;
            }
        }
    }

    return { vowels, consonants };
}

console.log(countVowelsAndConsonants1("Hello World"));

//41. count of words in a string
function countWords(str: string): number {
    const words = str.trim().split(/\s+/); // Split by whitespace and remove extra spaces
    return words.filter(word => word.length > 0).length; // Count non-empty words
}
const inputStr4 = "Hello World, this is a test.";
console.log(countWords(inputStr4)); // Output: 6
//Method2
function wordCount(str: string): number {
    return str.trim().split(/\s+/).filter(word => word.length > 0).length;
}
console.log(wordCount("Hello World, this is a test.")); // Output: 6

//42. count occurrence of each word in a string
function countEachWord(str: string): Record<string, number> {
    const words = str.trim().split(/\s+/);
    const countMap: Record<string, number> = {};
    for (const word of words) {
        countMap[word] = (countMap[word] || 0) + 1;
    }
    return countMap;
}
const inputStr6 = "hello world, hello everyone";
console.log(countEachWord(inputStr6)); // Output: { hello: 2, world: 1, everyone: 1 }

//Method2
function countWordsOccurrence(str: string): Record<string, number> {
    const words = str.trim().split(/\s+/);
    const wordCountMap: Record<string, number> = {};
    for (const word of words) {

        wordCountMap[word] = (wordCountMap[word] || 0) + 1;
    }

    return wordCountMap;
}
console.log(countWordsOccurrence("hello world, hello everyone")); // Output: { hello: 2, world: 1, everyone: 1 }
//43. find first non-repeating character in a string
function firstNonRepeatingCharacter(str: string): string | null {
    const charCount: Record<string, number> = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null; // No non-repeating character found
}
const inputStr7 = "swiss";
console.log(firstNonRepeatingCharacter(inputStr7)); // Output: "w"
//Method2
function findFirstNonRepeatingChar(str: string): string | null {
    const charCount: Record<string, number> = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}
console.log(findFirstNonRepeatingChar("swiss")); // Output: "w"
//44. find only duplicate characters occurrence and count in a string

function countDuplicateCharacters(str: string): Record<string, number> {
    const charCount: Record<string, number> = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    const duplicates: Record<string, number> = {};
    for (const char in charCount) {
        if (charCount[char] > 1) {
            duplicates[char] = charCount[char];
        }
    }
    return duplicates;
}

const inputStr8 = "programming";
console.log(countDuplicateCharacters(inputStr8)); // Output: { r: 2, g: 2, m: 2 }

//Method2
function findDuplicateChars(str: string): Record<string, number> {
    const frequencyMap: Map<string, number> = new Map();

    // Count frequency
    for (let char of str) {
        frequencyMap.set(char, (frequencyMap.get(char) || 0) + 1);
    }

    const duplicates: Record<string, number> = {};

    // Extract only duplicates
    for (let [char, count] of frequencyMap) {
        if (count > 1) {
            duplicates[char] = count;
        }
    }

    return duplicates;
}

console.log(findDuplicateChars("programming")); // Output: { r: 2, g: 2, m: 2 }
//45.Max occuring character in a string
function maxOccurringCharacter(str: string): { char: string; count: number } {
    const charCount: Record<string, number> = {};
    let maxChar = "";
    let maxCount = 0;
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
        if (charCount[char] > maxCount) {
            maxCount = charCount[char];
            maxChar = char;
        }
    }
    return { char: maxChar, count: maxCount };
}
const inputStr9 = "hello world";
console.log(maxOccurringCharacter(inputStr9)); // Output: { char: "l", count: 3 }


//  Method2
function maxOccurringChar(str: string) {
    str = str.toLowerCase().replace(/\s/g, "");

    const map: Record<string, number> = {};
    let maxChar = "";
    let maxCount = 0;

    for (let char of str) {
        map[char] = (map[char] || 0) + 1;

        if (map[char] > maxCount) {
            maxCount = map[char];
            maxChar = char;
        }
    }

    return { char: maxChar, count: maxCount };
}

console.log(maxOccurringChar("playwright testing    ")); // Output: { char: "g", count: 3 }
//46 merge two sorted arrays
function mergeSortedArrays(arr1: number[], arr2: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            merged.push(arr1[i]);
            i++;
        } else {
            merged.push(arr2[j]);
            j++;
        }
    }
    // Add remaining elements
    while (i < arr1.length) {

        merged.push(arr1[i]);
        i++;
    }
    while (j < arr2.length) {
        merged.push(arr2[j]);
        j++;
    }

    return merged;
}
const sortedArr1 = [1, 3, 5];
const sortedArr2 = [2, 4, 6];
console.log(mergeSortedArrays(sortedArr1, sortedArr2)); // Output: [1, 2, 3, 4, 5, 6]

//47. merge two sorted arrays without duplicates
function mergeSortedArraysUnique(arr1: number[], arr2: number[]): number[] {
    const merged: number[] = [];
    let i = 0, j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (merged[merged.length - 1] !== arr1[i]) {
                merged.push(arr1[i]);
            }
            i++;
        } else if (arr1[i] > arr2[j]) {
            if (merged[merged.length - 1] !== arr2[j]) {
                merged.push(arr2[j]);
            }
            j++;
        } else {
            if (merged[merged.length - 1] !== arr1[i]) {
                merged.push(arr1[i]);
            }

            i++;
            j++;
        }
    }

    while (i < arr1.length) {
        if (merged[merged.length - 1] !== arr1[i]) {
            merged.push(arr1[i]);
        }
        i++;
    }
    while (j < arr2.length) {
        if (merged[merged.length - 1] !== arr2[j]) {
            merged.push(arr2[j]);
        }
        j++;
    }
    return merged;
}
const sortedArr3 = [1, 3, 5, 5];
const sortedArr4 = [2, 3, 4, 6];
console.log(mergeSortedArraysUnique(sortedArr3, sortedArr4)); // Output: [1, 2, 3, 4, 5, 6]

//48. find common elements in two arrays
function findCommonElements(arr1: number[], arr2: number[]): number[] {
    const set2 = new Set(arr2);
    return arr1.filter(num => set2.has(num));
}
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];
console.log(findCommonElements(array1, array2)); // Output: [3, 4]
//49. find common elements in three arrays
function findCommonInThreeArrays(arr1: number[], arr2: number[], arr3: number[]): number[] {
    const set2 = new Set(arr2);
    const set3 = new Set(arr3);
    return arr1.filter(num => set2.has(num) && set3.has(num));
}
const array3 = [1, 2, 3, 4];
const array4 = [3, 4, 5, 6];
const array5 = [2, 3, 4, 7];
console.log(findCommonInThreeArrays(array3, array4, array5)); // Output: [3, 4]
//50. find uncommon elements in three arrays
function findUncommonInThreeArrays(arr1: number[], arr2: number[], arr3: number[]): number[] {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    const set3 = new Set(arr3);
    const uncommon: number[] = [];
    for (const num of arr1) {
        if (!set2.has(num) && !set3.has(num)) {
            uncommon.push(num);
        }
    }
    for (const num of arr2) {
        if (!set1.has(num) && !set3.has(num)) {
            uncommon.push(num);
        }
    }
    for (const num of arr3) {

        if (!set1.has(num) && !set2.has(num)) {
            uncommon.push(num);
        }
    }
    return uncommon;
}
const array6 = [1, 2, 3, 4];
const array7 = [3, 4, 5, 6];
const array8 = [2, 3, 4, 7];
console.log(findUncommonInThreeArrays(array6, array7, array8)); // Output: [1, 5, 6, 7]

//51.sum of all elements in an array
function sumOfArray(arr: number[]): number {
    return arr.reduce((sum, num) => sum + num, 0);
}
const arr4 = [1, 2, 3, 4, 5];
console.log(sumOfArray(arr4)); // Output: 15
//Method2
function sumArray(arr: number[]): number {
    let sum = 0;
    for (const num of arr) {
        sum += num;

    }
    return sum;
}
console.log(sumArray([1, 2, 3, 4, 5])); // Output: 15

//52.sum of natural numbers
function sumOfNaturalNumbers(n: number): number {
    return (n * (n + 1)) / 2;
}
console.log(sumOfNaturalNumbers(5)); // Output: 15
//Method2
function sumNaturalNumbers(n: number): number {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumNaturalNumbers(5)); // Output: 15
//53 perfect number
function isPerfectNumber(num: number): boolean {
    if (num <= 1) return false;
    let sum = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i === 0) {
            sum += i;
        }
    }

    return sum === num;
}
console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28)); // true
console.log(isPerfectNumber(12)); // false

//54. find factors of a number
function findFactors(num: number): number[] {
    const factors: number[] = [];



    for (let i = 1; i <= num; i++) {
        if (num % i === 0) {
            factors.push(i);
        }
    }
    return factors;
}

console.log(findFactors(12)); // Output: [1, 2, 3, 4, 6, 12]
//55 Search element in an Array
function searchElement(arr: number[], target: number): boolean {
    return arr.includes(target);
}
const arr5 = [1, 2, 3, 4, 5];
console.log(searchElement(arr5, 3)); // Output: true
console.log(searchElement(arr5, 6)); // Output: false
//56. Array consists of integers and special characters,sum only integers in an array
function sumOnlyIntegers(arr: any[]): number {
    let sum = 0;

    for (let item of arr) {
        if (typeof item === "number" && Number.isInteger(item)) {
            sum += item;
        }
    }

    return sum;
}

console.log(sumOnlyIntegers([1, 2, "a", 3, "@", 4]));
// Output: 10
//Method2   
function sumOnlyIntegers1(arr: any[]): number {
    return arr
        .filter(item => typeof item === "number" && Number.isInteger(item))
        .reduce((sum, num) => sum + num, 0);
}
console.log(sumOnlyIntegers1([3, 2, "a", 3, "@", 4]));
// Output: 10

//57
