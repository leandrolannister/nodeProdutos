const express = require('express');
const app = express();
const produtos_html = `<html><body><h2>Lista de Produtos</h2></body></html>`;

app.get('/produtos', (req,res) => {
    res.send(produtos_html);
});

app.listen(3000, () => {
    console.log('Server is running');
}); 