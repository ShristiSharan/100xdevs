// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output.

const fs = require('fs');

const filePath = 'example.txt'; 

const readFileAndPrint = (filePath) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(`Error reading file: ${err}`);
      return;
    }

    console.log('File Contents:');
    console.log(data);

    simulateExpensiveOperation();

    console.log('After Expensive Operation');
  });
};

// <!-- // Function to simulate an expensive operation -->
const simulateExpensiveOperation = () => {
  const startTime = Date.now();
 
  for (let i = 0; i < 1e7; i++) {
  }
  const endTime = Date.now();
  console.log(`Expensive Operation Time: ${endTime - startTime}ms`);
};

// <!-- // Call the function to read the file and print its contents -->
readFileAndPrint(filePath);
