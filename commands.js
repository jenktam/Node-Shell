var fs = require('fs');
var request = require('request');

module.exports = {
  pwd: function() {
    process.stdout.write(process.cwd());
    process.stdout.write('\nprompt > ');
  },
  date: function(){
    process.stdout.write(Date());
    process.stdout.write('\nprompt > ');
  },
  ls: function(){
    fs.readdir('.', function(err, files) {
      if (err) throw err;
      files.forEach(function(file) {
        process.stdout.write("\n");
        process.stdout.write(file.toString());
      })
      process.stdout.write('\nprompt > ');
    });
  },
  echo: function(string){
    process.stdout.write(string);
    process.stdout.write('\nprompt > ');
  },
  cat: function(fileName){
    fs.readFile(fileName, function(err, data) {
      if (err) throw err;
      process.stdout.write("\n");
      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    });
  },
  head: function(fileName){
    fs.readFile(fileName, function(err, data) {
      if (err) throw err;
      process.stdout.write("\n");
      var toString = String(data);

      process.stdout.write(toString.split('\n').slice(0,5).join('\n'));
      process.stdout.write('\nprompt > ');
    });
  },
  tail: function(fileName){
    fs.readFile(fileName, function(err, data) {
      if (err) throw err;
      process.stdout.write("\n");
      data = String(data);
      process.stdout.write(data.split('\n').slice(-7).join('\n'));
      process.stdout.write('\nprompt > ');
    });
  },
  sort: function(fileName){
    fs.readFile(fileName, function(err, data) {
      if (err) throw err;
      process.stdout.write("\n");
      data = String(data);
      process.stdout.write(data.split('\n').sort().join('\n'));
      process.stdout.write('\nprompt > ');
    });
  },
  wc: function(fileName){
    fs.readFile(fileName, function(err, data) {
      if (err) throw err;
      process.stdout.write("\n");
      data = String(data);
      process.stdout.write(data.split('\n').length.toString());
      process.stdout.write('\nprompt > ');
    });
  },
  uniq: function(fileName){
    fs.readFile(fileName, function(err, data) {
      if (err) throw err;
      process.stdout.write("\n");
      data = String(data).split('\n');
      for(var i = 0; i < data.length - 1; i++) {
        if(data[i] === data[i + 1]) data.splice(i,1);
      }
      data = data.join("\n").toString();

      process.stdout.write(data);
      process.stdout.write('\nprompt > ');
    });
  },
  curl: function(url){
    request(url, function (err, response, body) {
      if (err) throw err;
      console.log(body); // Print the HTML for the Google homepage.
    });
  },

}
