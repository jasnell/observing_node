const { performance } = require('perf_hooks')
const {
  Worker, isMainThread, parentPort, workerData
} = require('worker_threads')

if (isMainThread) {
  performance.mark('A')
  const worker = new Worker(__filename)
  worker.on('exit', () => {
    performance.mark('B')
    performance.measure('A to B', 'A', 'B')
  })
} else {
  setTimeout(() => {}, 2000);
}
