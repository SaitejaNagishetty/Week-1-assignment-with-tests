/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    return 0.01;
}/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    let ans = 0;
    for(let i = 1; i <= n; i++){
        ans += i;
    }

    return ans ;
}


let start = Date.now();
let ans = calculateTime(100);
let end = Date.now();
let timeElapsed = end - start;
console.log(`Total time to Calculate sum from 1 to 100 = ${timeElapsed/1000} seconds`);

let start1 = Date.now();
let ans1 = calculateTime(100000);
let end1 = Date.now();
let timeElapsed1 = end1 - start1;
console.log(`Total time to Calculate sum from 1 to 100000 = ${timeElapsed1/1000} seconds`);

let start2 = Date.now();
let ans2 = calculateTime(1000000000);
let end2 = Date.now();
let timeElapsed2 = end2 - start2;
console.log(`Total time to Calculate sum from 1 to 1000000000 = ${timeElapsed2/1000} seconds`);