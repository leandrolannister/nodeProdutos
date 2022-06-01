const res = require('express/lib/response');
const http = require('http');

const config = {
    hostname:"localhost",
    port:3000,
    path:"/produtos",
    method:"post",
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json'        
    }   
}

const store = http.request(config, (res) => {
    console.log('Status', res.statusCode);
    res.on('data', (body) => {
      console.log(body);    
    });
});

const livro = {
    titulo:'Ruby on Rails',
    preco:'100',
    descricao:'How to built an app with Ruby on Rails'
}

store.end(JSON.stringify(livro));