// <!-- ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks. -->

const fs = require('fs');

const filePath = 'example.txt'; // Replace with your file path
const contentToWrite = 'Hello, this is new content!';

// Function to write contents to a file
const writeFile = (filePath, content) => {
  fs.writeFile(filePath, content, 'utf8', (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
      return;
    }

    console.log('File has been written successfully!');
  });
};

// Call the function to write to the file
writeFile(filePath, contentToWrite);
