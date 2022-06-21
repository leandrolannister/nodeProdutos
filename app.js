const app = require('./app/config/express.js');
const produtosRoute = require('./app/routes/produtos.js');
const bodyparse = require('body-parser');

app.use(bodyparse.urlencoded({extended:true})); //To form
app.use(bodyparse.json()); //To api

app.use('/produtos', produtosRoute);

app.listen(3000, () => {
    console.log('Server is running');
}); 