const route = require('express').Router();

route.get('/', (req,res) => {
    res.render("produtos/lista");
});

module.exports = route;

