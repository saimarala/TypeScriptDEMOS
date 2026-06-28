//write code for str="automation 123", print automation is online and 123 is one line without inbuilt method
// let str: string = "automation 123";

// let word1: string = "";
// let word2: string = "";
// let spaceFound: boolean = false;

// // manually separate words without using split()
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === " ") {
//         spaceFound = true;
//         continue;
//     }
//     if (!spaceFound) {
//         word1 += str[i];
//     } else {
//         word2 += str[i];
//     }
// }

// console.log(word1 + " is online");
// console.log(word2 + " is one line");


// write a code for str="automation 123", replace first char and last char without inbuilt method
let str: string = "automation 123";

// choose replacement characters
let firstReplacement: string = "#";
let lastReplacement: string = "$";

let result: string = "";

for (let i = 0; i < str.length; i++) {
    if (i === 0) {
        // replace first character
        result += firstReplacement;
    } else if (i === str.length - 1) {
        // replace last character
        result += lastReplacement;
    } else {
        // keep original character
        result += str[i];
    }
}

console.log("Original:", str);
console.log("Modified:", result);


const inputStr: string = "I am Satheesh and I am an Engineer";

const removeDuplicateWords = (str: string): string => {
    const words = str.split(" ");
    const seen = new Set<string>();
    
    // Filter to only include words not already in the 'seen' Set
    const uniqueWords = words.filter(word => {
        if (seen.has(word)) {
            return false;
        }
        seen.add(word);
        return true;
    });

    return uniqueWords.join(" ");
};

console.log(removeDuplicateWords(inputStr)); 
// Output: "I am Satheesh and an Engineer"


let currentNumber: number = 1;
const rows: number = 4;

for (let i = 1; i <= rows; i++) {
    let rowContent: string = "";
    
    for (let j = 1; j <= i; j++) {
        rowContent += currentNumber + " ";
        currentNumber++;
    }
    
    console.log(rowContent.trim());
}


const numbers: number[] = [1, 2, 2, 3, 4, 4, 5];
const uniqueNumbers: number[] = numbers.filter((value, index, self) => {
  return self.indexOf(value) === index;
});

console.log(uniqueNumbers);




function isPalindromeNum(num: number): boolean {
    let str = num.toString();   // convert number to string

    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left++] !== str[right--]) {
            return false;
        }
    }

    return true;
}

// Examples
console.log(isPalindromeNum(121));   // true
console.log(isPalindromeNum(123));   // false
console.log(isPalindromeNum(1221));  // true

function isPalindromeString(str: string): boolean {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left++] !== str[right--]) {
            return false;
        }
    }

    return true;
}

function isPalindromeArray(arr: number[]): boolean {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        if (arr[left++] !== arr[right--]) {
            return false;
        }
    }

    return true;
}

// Examples
console.log(isPalindromeArray([1, 2, 3, 2, 1])); // true
console.log(isPalindromeArray([1, 2, 3]));       // false



function lastNonRepeatingChar(str: string): string {
    const freq: Record<string, number> = {};

    // Step 1: Count frequency
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    // Step 2: Traverse from right
    for (let i = str.length - 1; i >= 0; i--) {
        if (freq[str[i]] === 1) {
            return str[i];
        }
    }

    // Step 3: If none found
    return '$';
}

function lastNonRepeatingCharMap(str: string): string {
    const freqMap = new Map<string, number>();

    // Step 1: Count frequency
    for (const char of str) {
        freqMap.set(char, (freqMap.get(char) || 0) + 1);
    }

    // Step 2: Traverse from right
    for (let i = str.length - 1; i >= 0; i--) {
        if (freqMap.get(str[i]) === 1) {
            return str[i];
        }
    }

    // Step 3: If none found
    return '$';
}

str = "%^%^%^%&Playwright^%&^%&"

console.log(str.replace(/[^a-zA-Z]+/g,""))

// const str = "%^%^%^%&Playwright^%&^%& Typescript^%&^%&";

// // Step 1: Remove all non-alphabetic and space characters
// const cleaned = str.replace(/[^a-zA-Z\s+]/g, "");

// // Step 2: Normalize spacing (collapse multiple spaces into one)
// const normalizedSpaces = cleaned.replace(/\s+/g, " ").trim();

// // Step 3: Normalize casing (e.g., lowercase everything)
// const output = normalizedSpaces.toLowerCase();

// console.log(output); // "playwright typescript"
// console.log(output.split(" ")); // ["playwright", "typescript"]
// console.log(cleaned); // "playwright typescript"

//merge tow sort array
// let arr1=[1,3,4,5],arr2=[2,4,6];


// let arr3=[...arr1,...arr2].sort((a,b)=>a-b);
// let arr4=arr1.concat(arr2).sort((a,b)=>a-b)
// console.log(arr3)
// mergeSortedArraysUnique
// let arr1=[1,3,4,5],arr2=[2,4,6,7,1];
// const arrs=[...new Set(arr1.concat(arr2))].sort((a,b)=>a-b)
// console.log(arrs)
// //method 2
// const mergeWithSet = (a: number[], b: number[]): number[] => {
//   // Set automatically removes all duplicates from the combined array reference
//   return Array.from(new Set([...a, ...b])).sort((x, y) => x - y);
// };

//console.log(mergeWithSet(arr1,arr2))

// let arr1 =[111,12,4,10];
// let arr2 =[2,3,4,5,6,8,7];
// let i = 0, j = 0;

// // STEP 1: Both arrays MUST be sorted for this algorithm to work
// arr1.sort((a, b) => a - b);
// arr2.sort((a, b) => a - b);
// console.log(arr1)
// const merged: number[] = [];

// // STEP 2: Use includes() to ensure global uniqueness
// const pushUnique = (val: number) => {
//     if (!merged.includes(val)) {
//         merged.push(val);
//     }
// };

// while (i < arr1.length && j < arr2.length) {
//     if (arr1[i] < arr2[j]) {
//         pushUnique(arr1[i]);
//         i++;
//     } else if (arr2[j] < arr1[i]) {
//         pushUnique(arr2[j]);
//         j++;
//     } else {
//         pushUnique(arr1[i]);
//         i++;
//         j++;
//     }
// }

// while (i < arr1.length) {
//     pushUnique(arr1[i]);
//     i++;
// }

// while (j < arr2.length) {
//     pushUnique(arr2[j]);
//     j++;
// }

// console.log(merged); // Output: [1, 2, 3, 4, 5, 6, 7]
//commom elements
// let arr1 =[1,3,2,1];
// let arr2 =[3,4,5,2];
// let arr3 =[2,3,6,1];

// const set2 = new Set(arr2);
// const set3 = new Set(arr3);

// // FIX: Wrap arr1 in a new Set() first, then convert it to an array using the spread operator [...]
// // This converts [1, 3, 2, 1] into, eliminating the duplicate '1' before filtering.
// let a = [...new Set(arr1)].filter(n => set2.has(n) && set3.has(n));

// console.log(a); 

//uncoomom elements
let arr1 =[1,3,2,1];
let arr2 =[3,4,5,2];
let arr3 =[2,3,6,1];

// 1. Create sets for efficient lookups
const set1 = new Set(arr1);
const set2 = new Set(arr2);
const set3 = new Set(arr3);

// 2. Combine all arrays into one unique list of all numbers present
//const allUniqueElements = [...new Set([...arr1, ...arr2, ...arr3])];

// 3. Keep an element only if it fails to appear in at least one of the sets
const allUncommon = [...new Set([...arr1, ...arr2, ...arr3])].filter(
  n => !set1.has(n) || !set2.has(n) || !set3.has(n)
);

console.log(allUncommon);