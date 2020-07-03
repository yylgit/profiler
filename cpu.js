
const overview = require('./cpu_overview');
console.log(process.pid)
function cputest() {
  let sum = 0
  for(let i =0 ;i< 1 * 1000 * 1000 * 100;i++) {
    sum++;
    if(i % (1000 * 1000 * 10) === 0) {
      overview().then(res=>{
        console.log(res);
      })
    }
  }
  setTimeout(cputest,1000)
}
cputest();

