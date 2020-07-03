const v8Profiler = require('v8-profiler-node8');
const fs = require('fs');
global.leakedArray = [];
function createb() {
  for(let i=0;i<10;i++) {
    leakedArray.push(new Array(1 * 1024 * 1024).join('1'));
  }
}
console.log(require('process').pid);
createb();
const snapshot1 = v8Profiler.takeSnapshot();
snapshot1.export(function(error, result) {
  fs.writeFileSync('snapshot4.heapsnapshot', result);
  snapshot1.delete();
});


// snapshot2.export()
//   .pipe(fs.createWriteStream('3.heapsnapshot'))
//   .on('finish', snapshot2.delete);
// server.listen('8090')

const http = require('http');

const server = http.createServer(function() {

});

server.listen(8090);



