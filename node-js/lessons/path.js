const path = require('path');

// Path joining
console.log(path.join('first', 'second'));

//Get absolute path
console.log(path.relative('/first', 'second', 'third'));

//Get dirname (Absolute Path)
console.log(__dirname);