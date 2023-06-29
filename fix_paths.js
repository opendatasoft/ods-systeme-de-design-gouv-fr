const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, regex, replacement) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }
        let result = data.replace(regex, replacement);

        fs.writeFile(filePath, result, 'utf8', function(err) {
            if (err) {
                return console.log(err);
            }
            console.log(`Successfully replaced values in ${filePath}`);
        });
    });
}

const filePath = process.argv[2];
if (!filePath) {
    console.log('Please provide a file path as a command line argument.');
    process.exit(1);
}

const regex = /[\.\/a-zA-Z0-9_-]*\/([a-zA-Z0-9_-]*\.svg)/g;
const replacement = '/assets/theme_image/$1';

replaceInFile(filePath, regex, replacement);