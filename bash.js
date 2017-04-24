var commands = require('./commands.js');

// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  // echo hello world
  var cmd = data.toString().trim().split(" ")[0]; // remove the newline
  var string = data.toString().trim().split(" ").slice(1).join(" ");

  commands[cmd](string);

  // process.stdout.write('\nprompt > ');

});
