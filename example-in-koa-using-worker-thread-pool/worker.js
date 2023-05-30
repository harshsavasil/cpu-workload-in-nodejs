const { parentPort, threadId } = require('worker_threads');

parentPort.on('message', (task) => {
    const { a, b } = task
    console.log(`running task on thread: ${threadId}`)
    parentPort.postMessage(multiply(parseInt(a), parseInt(b)))
})

function multiply(a, b) {
    let output = 0
    for (let i = 0; i < b; i++)
        output += a
    return output
}