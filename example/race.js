'use strict'

async function foo() {
  for (let m = 0; m < 1e9; m++) {}
  return 'foo'
}

async function bar() {
  for (let m = 0; m < 1e6; m++) {}
  return 'bar'
}

async function race() {
  return await Promise.race([foo(), bar()])
}

race().then(console.log)

