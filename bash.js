var commands = require('./commands.js');
const chalk = require('chalk');

const prompt = chalk.blue('\nprompt > ');
// Output a prompt
process.stdout.write(prompt);

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  // console.log(data);
  const cmd = data.toString().trim().split(" ")[0]; // remove the newline
  var string = data.toString().trim().split(" ").slice(1).join(" ");

  if(commands[cmd]) commands[cmd](string);
  else process.stderr.write(chalk.red('command not found ') + cmd + '\n' + prompt);
});


/*
Key Takeaways:
- must convert anything written in stdout.write to a string
- use utf8 in readFile parameter, otherwise will not read data/text file as a string. will read it as an object. it will look like a BUFFER OBJECT. to read it can call b.toString() which will convert it to string.
  - mainly apply 'utf8' as argument on read and writefiles

*/
