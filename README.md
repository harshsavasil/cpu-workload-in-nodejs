# cpu-workload-in-nodejs

Worker thread pools in Node.js are a group of running worker threads that are available to be used for an incoming task. When a new task comes in, it can be passed to an available worker. Once the worker completes the task, it can pass the result back to the parent and that particular worker is again available to accept new tasks. Workers (threads) are useful for performing CPU-intensive JavaScript operations. They do not help much with I/O-intensive work. The Node.js built-in asynchronous I/O operations are more efficient than Workers can be.

