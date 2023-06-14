// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

let counter = 0;
function counter1(){
    counter++;
    console.log(counter);
    setTimeout(counter1,1*1000);
}

setTimeout(counter1,1*1000);