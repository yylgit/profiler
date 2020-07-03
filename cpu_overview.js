const os = require('os')
module.exports = function(opts = {}) {
  return new Promise(function(resolve, reject) {
    const tick = opts.interval || 1000;
    const win = { time: process.hrtime(), cpu: process.cpuUsage()};
    let timer = setTimeout(computed,tick);
    function computed() {
      const mem = process.memoryUsage()
      const total = os.totalmem()
      const memResult = {
        percent: mem.rss / total,
        rss: mem.rss,
        total,
        heapPercent: mem.heapUsed / mem.heapTotal,
        heapUsed: mem.heapUsed,
        heapTotal: mem.heapTotal,
        external: mem.external
      };
      const cpuDelta = process.cpuUsage(win.cpu)
      const timeDelta = process.hrtime(win.time)
      const us = timeDelta[0] * 1e6 + timeDelta[1] / 1e3
      const cpuResult =  {
        time: us,
        percent: (cpuDelta.system + cpuDelta.user) / us,
        system: cpuDelta.system,
        user: cpuDelta.user
      }
      clearTimeout(timer);

      resolve({
        // mem: memResult,
        cpu: cpuResult
      });
    }
  })
}
