console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read(); // This will read the input
  if (name !== null) { // meaning there is something user has typed
    process.stdout.write(`Your name is: ${name}`);
  }
});

// console.log adds a new line by default
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});
