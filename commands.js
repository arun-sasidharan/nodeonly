const fs = require('fs');
const add = (item, price) => {
  let list = [];
  try {
    list = JSON.parse(fs.readFileSync('list.json'));
  } catch (e) {
    // console.log('an error occured', e);
  }
  list.push({ item: item, price: price });
  list = JSON.stringify(list);
  fs.writeFileSync('list.json', list);
};

const deleteItem = item => {
  let list = [];
  try {
    list = JSON.parse(fs.readFileSync('list.json'));
  } catch (e) {
    // console.log('an error occured', e);
  }
  let updated = list.filter(listItem => listItem.item != item);
  updated = JSON.stringify(updated);
  fs.writeFileSync('list.json', updated);
};
const print = () => {
  try {
    list = JSON.parse(fs.readFileSync('list.json'));
    console.log(list);
  } catch (e) {
    // console.log('an error occured', e);
  }
};

module.exports = {
  add,
  deleteItem,
  print
};
