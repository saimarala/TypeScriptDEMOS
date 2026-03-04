function countEachWord(str: string): Map<string, number> {

    const countMap = new Map<string, number>();
    //  for (const word of  str.match(/\w+|[^\w\s]/g) || []) {    ==>  this regex matches words and punctuation separately, ensuring that punctuation is also counted as individual tokens.
    // 1. Remove special characters (keep only letters, numbers, and spaces)
    // /[^a-zA-Z0-9 ]/g matches anything NOT in the brackets
    // const cleanStr = str.replace(/[^a-zA-Z0-9 ]/g, "");

    for (const word of str.split(/\s+/)) {
        countMap.set(word, (countMap.get(word) || 0) + 1);
    }
    for (const [word, count] of countMap.entries()) {
        console.log(`${word}: ${count}`);// This will print each word and its count to the console  
        // hello: 2
        //world,: 1
        //everyone: 1
    }

    return countMap;
}
const inputStr6 = "hello world, hello everyone";
console.log(countEachWord(inputStr6)); 