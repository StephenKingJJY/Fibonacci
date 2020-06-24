var logo = require('./logo.js');
var fs = require('fs');

logo.run(fs.readFileSync("fibnacci.lgo","utf8"));
start = Date.now();
//logo.run('fb [1] [1] 10 $log :g_b').then(()=>{console.log(Date.now()-start);});
logo.run('fb [1] [1] 10000 $log :g_b').then(()=>{console.log(Date.now()-start);});