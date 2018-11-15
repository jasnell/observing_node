
const EventEmitter = require('events')

async function a(val) { console.log('A', val) }

setImmediate(() => console.log('B'))

const ee = new EventEmitter()
ee.on('foo', async (val) => {
  await a(val)
})

new Promise((res) => {
  for (let n = 0; n < 1e9; n++) {}
  setImmediate(() => console.log('C'))
  res('D')
}).then(console.log);

//queueMicrotask(() => console.log('D'));

(async (res) => {
  for (let n = 0; n < 1e6; n++) {}
  process.nextTick(() => console.log('E'))
  return 'F'
})().then(console.log)

process.nextTick(() => console.log('G'))

const promises = [];
let n = 0;
for (; n < 10; n++)
  promises.push(a(n))

setTimeout((val) => ee.emit('foo', val), 1000, n)

console.log('H')

Promise.all(promises)
