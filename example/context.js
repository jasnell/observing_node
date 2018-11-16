'use strict'

const { promisify } = require('util')

const timeout = promisify(setTimeout)

async function foo(label) {
  await timeout(1000)
  return 'foo'
}

setImmediate(async () => {
  await foo('Scope B')
});

foo('Async 1').then((val) => {})


/*

Enter Scope A
Schedule Immediate 1
Execute Async 1
Schedule Timeout 1
Suspend Async 1
Exit Scope A
Event Loop Start
Trigger Immediate 1
Enter Scope B
Execute Async 2
Schedule Timer 2
Suspend Async 2
Exit Scope B
Trigger Timer 1
Enter Scope C
Exit Scope C
Resume Async 1
Enter Scope D
Exit Scope D
Trigger Timer 2
Enter Scope E
Exit Scope E
Resume Async 2

*/