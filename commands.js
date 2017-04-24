const fs = require('fs');
const request = require('request');
const chalk = require('chalk');
const prompt = chalk.blue('\nprompt > ');

function pwd() {
  process.stdout.write(process.cwd());
  process.stdout.write(prompt);
};

function date(){
  process.stdout.write(Date());
  process.stdout.write(prompt);
};

function ls(){
  fs.readdir('.', function(err, files) {
    if (err) throw err;
    process.stdout.write(files.join("\n"));
    process.stdout.write(prompt);
  });
};

// echo hello $DEFAULT_USER
function echo(args){ //hello $DEFAULT_USER
  const output = args
  .split(' ')
  .map(function(arg){ // [hello, $DEFAULT_USER]
    return arg[0] === '$' ? process.env[arg.slice(1)] : arg;
  })
  .join(" ");
  process.stdout.write(output);
  process.stdout.write(prompt);
};

function cat(fileName){
  fs.readFile(fileName, function(err, data) {
    if (err) throw err;
    process.stdout.write("\n");
    process.stdout.write(data);
    process.stdout.write(prompt);
  });
};

function head(fileName){
  fs.readFile(fileName, function(err, data) {
    if (err) throw err;
    process.stdout.write("\n");
    var toString = String(data);

    process.stdout.write(toString.split('\n').slice(0,5).join('\n'));
    process.stdout.write(prompt);
  });
};

function tail(fileName){
  fs.readFile(fileName, function(err, data) {
    if (err) throw err;
    process.stdout.write("\n");
    data = String(data);
    process.stdout.write(data.split('\n').slice(-5).join('\n'));
    process.stdout.write(prompt);
  });
};

function sort(fileName){
  fs.readFile(fileName, function(err, data) {
    if (err) throw err;
    process.stdout.write("\n");
    data = String(data);
    process.stdout.write(data.split('\n').sort().join('\n'));
    process.stdout.write(prompt);
  });
};

function wc(fileName){
  fs.readFile(fileName, function(err, data) {
    if (err) throw err;
    process.stdout.write("\n");
    data = String(data);
    process.stdout.write(data.split('\n').length.toString());
    process.stdout.write(prompt);
  });
};

function uniq(fileName){
  fs.readFile(fileName, function(err, data) {
    if (err) throw err;
    process.stdout.write("\n");
    data = String(data).split('\n');
    for(var i = 0; i < data.length - 1; i++) {
      if(data[i] === data[i + 1]) {
        data.splice(i,1);
        i--;
      }
    }
    data = data.join("\n").toString();

    process.stdout.write(data);
    process.stdout.write(prompt);
  });
};

function curl(url){
  request(url, function (err, response, body) {
    if (err) throw err;
    console.log(body); // Print the HTML for the Google homepage.
  });
};



module.exports = {
  pwd:    pwd,
  date:   date,
  ls:     ls,
  echo:   echo,
  cat:    cat,
  head:   head,
  tail:   tail,
  sort:   sort,
  wc:     wc,
  uniq:   uniq,
  curl:   curl
}
