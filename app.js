const Koa = require("koa");

const app = new Koa();

const appRouter = require("./api/sql");

app.use(appRouter.routes());


app.listen(3000)