const fs = require('fs');
const result = fs.readFileSync('./user.json', 'utf8');
// console.log('result', result);
const obj = JSON.parse(result);
let formatStr = '';
obj.map((item) => {
  const str = `${item.username}	${item.total}	\r\n`;
  formatStr += str;
});
console.log('formatStr', formatStr);
fs.writeFileSync('./format-user.txt', formatStr);
