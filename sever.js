const http  = require("http");
const port = 8080;
http

.createServer((req, res) =>{
    console.log("url: " , req.url);
    console.log("method: " , req.method);
    if(req.url === '/' ){
        res.end(`<h1> home</h1>`);
    }
    if(req.url === '/controller'){
        res.end(`<h1>controller</h1>`);
    }
    
})
.listen(port,()=>{
    console.log(`ung dung dang dươc chạy:${port}`);
})

