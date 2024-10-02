const { program } = require('commander');
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

const filecontent = fs.readFileSync(filepath, {
    'encoding': 'utf-8',
    'flag': 'r'
});

const jsonData = JSON.parse(filecontent);

const requiredfields = ["Доходи, усього", "Витрати, усього"];

const outputData = [];

jsonData.forEach(element => {
    if(requiredfields.includes(element.txt)) {
        outputData.push(element.txt + " : " + element.value)
    }
});

if(options.output) {
    fs.writeFileSync(options.output, outputData.join("\n"));
}

if(options.display) console.log(outputData.join("\n"))
