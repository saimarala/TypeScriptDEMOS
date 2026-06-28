console.log("A");

// Wrap in an arrow function so it's a callback, not an immediate execution
setTimeout(() => console.log("B"), 0);

// Use a callback function inside .then() and fix the syntax
Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");

/*
output :
A
D
C
B


When corrected, the output will be: A, D, C, B. 
A & D (Synchronous): These run first on the main thread (Call Stack).
C (Microtask): Promises are added to the Microtask Queue, which has higher priority than timers and runs immediately after the synchronous code finishes.
B (Macrotask): setTimeout is added to the Task Queue (Macrotasks). Even with a 0ms delay, it must wait for both the synchronous code and all microtasks to clear.
*/

async function executeFlow() {
    console.log("A");

    // This stays a Macrotask (runs last)
    setTimeout(() => console.log("B"), 0);

    // 'await' pauses this function and puts the rest in the Microtask Queue
    await Promise.resolve();
    
    console.log("C");

    console.log("D");
}

executeFlow();
/*
output :
A
C
D
B
*/

async function executeFlow1() {
    console.log("A");

    setTimeout(() => console.log("B"), 0);

    // "Fire and forget" block
    void (async () => {
        await Promise.resolve();
        console.log("C");
    })();

    console.log("D");
}

executeFlow1();
// Output: A, D, C, B

//
/*

console.log("1. Start"); // Synchronous

setTimeout(() => console.log("2. Timeout"), 0); // Macrotask

Promise.resolve().then(() => console.log("3. Promise")); // Microtask

process.nextTick(() => console.log("4. nextTick")); // Node-specific Microtask

console.log("5. End"); // Synchronous
*/
/*
output:
1. Start and 5. End: Synchronous code on the Call Stack.
4. nextTick: Highest priority microtask (Node.js only).
3. Promise: Standard microtask.
2. Timeout: Macrotask, executes only after the Call Stack and Microtask Queue are both empty.
*/

