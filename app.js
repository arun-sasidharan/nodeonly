const yargs = require('yargs');

let command = yargs.argv._[0];

let item = yargs.argv.item;
let price = yargs.argv.price;
console.log(command);
