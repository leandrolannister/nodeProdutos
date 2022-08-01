const app = require('./app/config/express.js');
const bodyparse = require('body-parser');

const homeRoute = require('./app/routes/home.js');
const produtosRoute = require('./app/routes/produtos.js');
const userRoute = require('./app/routes/user.js');

app.use(bodyparse.urlencoded({extended:true})); //To form
app.use(bodyparse.json()); //To api

app.use('/', homeRoute);
app.use('/produtos', produtosRoute);
app.use('/users', userRoute);

//Exemplo de middleware, quando a rota não existe
app.use((req,res,next) => {
    res.status(404).render('errors/404');
});

//Em caso de error essa função será executada antes da anterior
app.use((error,req,res,next) => {
    res.status(500).render('errors/500');
    next();
});

app.listen(3000, () => {
    console.log('Server is running');
}); 