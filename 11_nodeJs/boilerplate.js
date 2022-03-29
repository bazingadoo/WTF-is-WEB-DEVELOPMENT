
const fs = require('fs');
// console.log(fs);


//async 
// fs.mkdir('dogs', { recursive: true }, (err) => {
//     console.log("In the callback");
//     if (err) throw err;
// });

//sync 
// fs.mkdirSync('Cats');
// console.log('Hey there im out after mkdir');

// Creates /tmp/a/apple, regardless of whether `/tmp` and /tmp/a exist.
// fs.mkdir('/tmp/a/apple', { recursive: true }, (err) => {
//     if (err) throw err;
// });


const folderName = process.argv[2] || 'Projects';
// fs.mkdirSync(folderName);

//creating a file
try {
    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, ' ')
    fs.writeFileSync(`${folderName}/app.js`, ' ');
    fs.writeFileSync(`${folderName}/styles.css`, ' ');
} catch (e) {
    console.log("SOMETHING WENT WRONG");
    console.log(e);
}

// Create a new, empty file using the open() method:

// fs.writeFileSync(`${folderName}/index.html`, 'w', function (err) {
//     if (err) throw err;
//     console.log('File is created successfully.');
// });

