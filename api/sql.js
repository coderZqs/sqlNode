const Router = require("koa-router");
const router = new Router();
const fs = require("fs");
const connection = require("./conect");

router.get("/", async ctx => {
    ctx.body = fs.readFileSync(__dirname + "/index.html").toString();
})


router.get("/user", async ctx => {
    const [data] = await connection.query("Select name,age from datas");
    ctx.body = {
        code: 200,
        user: data
    }
})



module.exports = router;