const { program } = require('commander');
const { error } = require('node:console');
const fs = require('node:fs');

program
    .option('-i, --input <char>', 'path to file, which need to read')
    .option('-o, --output <char>', 'path to file, where result will be written')
    .option('-d, --display', 'show result in console');

program.parse();

const options = program.opts();
const filepath = options.input;

if(options.input === undefined) console.error('Please, specify input file');

if(!fs.existsSync(filepath)) 
    console.error('Cannot find input file');

if(options.output === undefined && options.display === undefined) return;




