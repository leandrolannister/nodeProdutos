const http = require('http');
const home_html = `<html><body><h1>Welcome to home</h1></body></html>`;
const produtos_html = `<html><body><h2>Lista de Produtos</h2></body></html>`;

const server = http.createServer((req,res) => {
    if (req.url == '/produtos')
      res.end(produtos_html);
    
    res.end(home_html);
});

server.listen(3000, () =>{
    console.log('Server is running');
}); 