const path = require('path');

// Path joining
console.log(path.join('first', 'second'));

//Get absolute path
console.log(path.relative('/first', 'second', 'third'));

//Get dirname (Absolute Path)
console.log(__dirname);

//Parse path
console.log(path.parse(__dirname));


//URL
const siteUrl = 'http://localhost:8080/users?id=15'
const url = new URL(siteUrl)
console.log(url)