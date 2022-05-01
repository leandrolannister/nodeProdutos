const http = require('http');
const html = `<html><body><h1>Lista de Produtos</h1></body></html>`;

const server = http.createServer((req,res) => {
    res.end(html);
});

server.listen(3000, () =>{
    console.log('Server is running');
}); 