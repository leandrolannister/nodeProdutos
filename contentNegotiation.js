const http = require('http');

var config = {
    hostname: 'localhost',
    port:3000,
    path:'/produtos',
    headers:{
        'Accept':'application/json'
        //'Accept':'text/html'
    }
};

http.get(config, (res) => {
   console.log('StatusCode',res.statusCode); 
   res.on('data', (body) => {
      console.log('Body'+body); 
   });
});