const readline = require('node:readline'); // used to get input from stdin

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question('Welcome to Holberton School, what is your name? \n', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close(); // stops readline from listening to stdin since we are done receiving input
//   console.log('This important software is now closing')
});
// listens for the close evnt then prints out the clossing msg
rl.on('close', () => {
  console.log('This important software is now closing');
});
