const livereload = require('livereload');
livereload.createServer().watch(__dirname + "/public");

console.log("Watching for changes.");
