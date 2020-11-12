const fs = require('fs');
const result = fs.readFileSync('./day.json', 'utf8');
// console.log('result', result);
const obj = JSON.parse(result);
let formatStr = '';
obj.map((item) => {
  const str = `${item.ds}	${item.uv}	${item.pv}\r\n`;
  formatStr += str;
});
console.log('formatStr', formatStr);
fs.writeFileSync('./format-day.txt', formatStr);
