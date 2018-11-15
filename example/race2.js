'use strict'

const { promisify } = require('util')
const timeout = promisify(setTimeout)

async function foo() {
  await timeout(10000)
  return 'foo'
}

async function bar() {
  await timeout(1000)
  return 'bar'
}

async function race() {
  return await Promise.race([foo(), bar()])
}

race().then(console.log)
