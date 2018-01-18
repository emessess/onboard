let readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('What is your name?');

reader.on('line', (line) => {
  console.log(`Hello, ${line}`);
  console.log('What did you say your name was again?');
});

