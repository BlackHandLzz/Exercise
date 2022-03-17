const koa = require("koa");
const router = require("koa-router");

const app = new koa();
const route = new router();

// 中间件   拦截器
app.use(async (ctx, next) => {
    console.log("中间件拦截器开始");
    await next();
    console.log("中间件拦截器结束");
})

route.get('/api/text', (ctx, next) => {
    var json = {
        name: 'jack'
    }
    ctx.body = JSON.stringify(json);
    console.log("中间件拦截器进行中");
})
app.use(route.routes());

app.listen(3030, () => {
    console.log('koa服务启动，端口号：' + 3030)
})