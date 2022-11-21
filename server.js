const Koa = require('koa');
const app = new Koa();
const mime = require('mime-types')
const fs = require('fs');

app.use(ctx => {
    var path = "./index.html";
    var mimeType = mime.lookup(path);
    const src = fs.createReadStream(path);
    ctx.response.set("content-type", mimeType);
    ctx.body = src;
});

app.listen(5000, () => {
    console.log(`Application running on port 5000`);
});