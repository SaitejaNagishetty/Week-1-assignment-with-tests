// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require('fs');

setTimeout(function(){
    let ctr = 0;
    while(ctr < 1000000000){
        ctr++;
    }
    console.log(ctr);
},1000);

fs.readFile('02-async-js/easy/file.txt', 'utf8', (error, data) => {
    if (error) {
      console.error("Couldn't read file");
      return;
    }
  
    console.log('File contents are as follows ------>', data);
  });

