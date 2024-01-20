const http = require('http');
const server = http.createServer((req,resp)=>{
    console.log('request made')
});

server.listen(3000,'localhost',()=>{
    console.log('listening........')
})
