const fs = require('fs');
const path = require('path');

function replaceInFile(filePath, replacements) {
    fs.readFile(filePath, 'utf8', function(err, data) {
        if (err) {
            return console.log(err);
        }

        let result = data;
        replacements.forEach(({ regex, replacement }) => {
            result = result.replace(regex, replacement);
        });

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

// Define replacement rules
const replacements = [
    {
        regex: /[\.\/a-zA-Z0-9_-]*\/([a-zA-Z0-9_-]*\.svg)/g,
        replacement: '/assets/theme_image/$1',
    },
    {
        regex: /url\(\"\.\.\/fonts\/([a-zA-Z0-9_-]*\.[a-zA-Z0-9_-]*)\"\)/g,
        replacement: 'url("/assets/theme_font/$1")',
    },
];

replaceInFile(filePath, replacements);