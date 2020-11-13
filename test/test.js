var fs = require('fs')
fs.watchFile('.git/HEAD',()=>{
    console.info('-----file change-----');
})