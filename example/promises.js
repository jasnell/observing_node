'use strict'

async function everythingIsFine() {
  for (let m = 0; m < 1e9; m++) {}
  return 'A'
}

async function doBadThings() {
  const tasks = [];
  for (let n = 0; n < 10; n++) {
    tasks.push(everythingIsFine())
  }
  return await Promise.all(tasks)
}

doBadThings().then(() => console.log('done!'))
