const koa = require("koa");
const Router = require("koa-router");

const app = new koa();
const route = new Router();

app.use(async (ctx, next) => {
    // 开发环境设置，生产环境谨慎使用
    ctx.set("Access-Control-Allow-Origin", "*");
    ctx.set("Access-Control-Allow-Headers", "X-Requested-With");
    ctx.set("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    ctx.set("Content-Type", "application/json;charset=utf-8");

    if (ctx.method == 'OPTIONS') {
        ctx.body = '';
        ctx.status = 200;
    } else {
        await next();
    }
});

route.get('/', (ctx, next) => {
    console.log(ctx);
    ctx.body = {
        info: "请求成功",
        sattus: "200"
    }
})

route.get('/ajax/:id', (ctx, next) => {
    console.log(ctx);
    ctx.body = {
        info: "请求成功111111",
        sattus: "200"
    }
})

app.use(route.routes());

app.listen(5500, () => {
    console.log("koa服务已启动,端口号：" + 5500);
})