const path = require('path');
const os = require('os')
const Koa = require('koa');

const app = new Koa()

function multiply(a, b) {
    let output = 0;
    for (let i = 0; i < b; i++)
        output += a;
    return output;
}

app.use(async ctx => {
    const { a, b } = ctx.query
    ctx.body = await new Promise((resolve) => {
        return resolve(multiply(parseInt(a), parseInt(b)))
    });
    ctx.status = 200;

});

app.listen(8001)