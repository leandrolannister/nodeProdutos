const route = require('express').Router();
const connection = require('../infra/connection.js');

route.get('/', (req,res) => {
    connection.query("select * from livros", (error,data) => {
      res.send(data);
    });

    //res.render("produtos/lista");
});

module.exports = route;

