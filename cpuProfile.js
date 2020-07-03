const v8Profiler = require('v8-profiler-node8');
const fs = require('fs');

function cputest() {
  let sum = 0
  for(let i =0 ;i< 1 * 1000 * 1000 * 100;i++) {
    sum++;
  }
  setTimeout(cputest,1000)
}
cputest();

function cpuProfile(duration) {
  let title = Date.now()+'';
  let profilingTime = duration;
  return new Promise(resolve => {
    v8Profiler.startProfiling(title, true);
    setTimeout(() => {
      const profiler = v8Profiler.stopProfiling(title);
      profiler.delete();
      resolve(profiler);
    }, +profilingTime);
  })
}

cpuProfile(5000).then(res=>{
  fs.writeFileSync('cpu1.json', JSON.stringify(res));
  console.log('done!')
})



