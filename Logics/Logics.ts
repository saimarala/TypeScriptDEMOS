//"HelLo wElComE tO jAVascrIpT" - count the each character in this string
// const str:string = "HelLo wElComE tO jAVascrIpT";

// function countCharacters(input: string): Record<string, number> {
//   const counts: Record<string, number> = {};

//   for (const char of input) {
//     counts[char] = (counts[char] || 0) + 1;
//   }

//   return counts;
// }

// const result = countCharacters(str);
// console.log(result);

// write code for in str=aaabccccaaa", count repeated char
// const str = "aaabccccaaa";

// function countRepeatedChars(input: string): Record<string, number> {
//   const counts: Record<string, number> = {};

//   for (const char of input) {
//     counts[char] = (counts[char] || 0) + 1;
//   }

//   // Filter only repeated characters (count > 1)
//   const repeated: Record<string, number> = {};
//   for (const key in counts) {
//     if (counts[key] > 1) {
//       repeated[key] = counts[key];
//     }
//   }

//   return repeated;
// }

// const result = countRepeatedChars(str);
// console.log(result);

//write code in str =abcbdbb", result b=3
// const str = "abcbdbb";

// function countChar(input: string, target: string): number {
//   let count = 0;
//   for (const char of input) {
//     if (char === target) {
//       count++;
//     }
//   }
//   return count;
// }

// const result = countChar(str, "b");
// console.log(`b = ${result}`);


// const str = "this is sai";

// function reverseWords(input: string): string {
//   return input
//     .split(" ")                // split into words
//     .map(word => word.split("").reverse().join("")) // reverse each word
//     .join(" ");                // join back with spaces
// }

// const result = reverseWords(str);
//console.log(result); // siht siias



const str: string = "this@is#sai";

// Use a regex to match word characters (\w+) and replace them
const result: string = str.replace(/\w+/g, (word: string) => 
    word.split('').reverse().join('')
);

console.log(result); // Output: "siht@si#ias"



// onst nums: number[] = [1, 2, 0, 4, 0, 3, 0, 5, 0, 0];

// function moveZerosToEnd(arr: number[]): number[] {
//     let lastNonZeroIndex = 0;

//     // Step 1: Move all non-zero elements to the front
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[lastNonZeroIndex] = arr[i];
//             lastNonZeroIndex++;
//         }
//     }

//     // Step 2: Fill the rest of the array with zeros
//     for (let i = lastNonZeroIndex; i < arr.length; i++) {
//         arr[i] = 0;
//     }

//     return arr;
//}

// const nums: number[] = [1, 2, 0, 4, 0, 3, 0, 5, 0, 0];

// function moveZerosToEnd(arr: number[]): number[] {
//     let lastNonZeroIndex = 0;

//     // Step 1: Move all non-zero elements to the front
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== 0) {
//             arr[lastNonZeroIndex] = arr[i];
//             lastNonZeroIndex++;
//         }
//     }

//     // Step 2: Fill the rest of the array with zeros
//     for (let i = lastNonZeroIndex; i < arr.length; i++) {
//         arr[i] = 0;
//     }

//     return arr;
// }

// const result = moveZerosToEnd(nums);
// console.log(result); // Output: [1, 2, 4, 3, 5, 0, 0, 0, 0, 0]



// const str: string = 'typescript';

function printDuplicates(input: string): void {
    const charCount: Record<string, number> = {};
    const duplicates: string[] = [];

    // 1. Count frequencies
    for (const char of input) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    // 2. Identify characters with count > 1
    for (const char in charCount) {
        if (charCount[char] > 1) {
            duplicates.push(char);
        }
    }

    if (duplicates.length > 0) {
        console.log("Duplicate characters:", duplicates.join(', '));
    } else {
        console.log("No duplicate characters found.");
    }
}

printDuplicates("this is a test string");

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
            nstr =  word.charAt(j) + nstr;
        }
        
        // Add reversed word and a space
        reverseString = reverseString + nstr + " ";
    }

    console.log(inputString);
    console.log(reverseString.trim()); // trim() removes the trailing space
}

reverseEachWordOfString("this is sai");



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

// Example usage:
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

let nstr: string = "";
let rev=(inputString: string)=> {
    let word:string[]=inputString.split(" ");
    for (let i = 0; i < word.length; i++) {
        nstr = word[i]+" "+nstr;
        
    }
    console.log(nstr.trim());
    
}

rev("this is sai");