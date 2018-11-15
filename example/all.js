'use strict'

async function foo() {
  for (let m = 0; m < 1e9; m++) {}
  return 'foo'
}

async function bar() {
  for (let m = 0; m < 1e6; m++) {}
  return 'bar'
}

async function all() {
  return await Promise.all([foo(), bar()])
}

all().then(console.log)

