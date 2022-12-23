const express = require("express");
const app = express();
const biu = require("./biu.json");
 
// 跨域
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.get("/biu", (req, res) => {
    res.send(biu)
})
 
app.listen(3300, () => {
    console.log('服务器运行在3300');
})