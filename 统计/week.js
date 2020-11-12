const fs = require('fs');
const result = fs.readFileSync('./week.json', 'utf8');
// console.log('result', result);
const obj = JSON.parse(result);
let formatStr = '';
obj.map((item) => {
  const str = `${item.week}	${item.uv}	${item.pv}\r\n`;
  formatStr += str;
});
console.log('formatStr', formatStr);
fs.writeFileSync('./format-week.txt', formatStr);
