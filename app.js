const yargs = require('yargs');
const commands = require('./commands');

let command = yargs.argv._[0];

let item = yargs.argv.item;
let price = yargs.argv.price;

switch (command) {
  case 'add':
    commands.add(item, price);
    break;
  case 'delete':
    commands.deleteItem(item);
  case 'print':
    commands.print();
  default:
    return;
}
