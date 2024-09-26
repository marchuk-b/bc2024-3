const { program } = require('commander');
const fs = require('fs');

program
    .option('-i, --input <char>', 'path to file, which need to read')
    .option('-o, --output <char>', 'path to file, where result will be written')
    .option('-d, --display', 'show result in console');

program.parse();

const options = program.opts();

if(options.input === undefined) console.log('Please, specify input file');