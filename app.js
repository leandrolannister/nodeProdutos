const app = require('./app/config/express.js');
const produtosRoute = require('./app/routes/produtos.js');

app.use('/produtos', produtosRoute);

app.listen(3000, () => {
    console.log('Server is running');
}); 