/* importa o módulo do Flamework express */
var express = require('express');

/* importar o módulo do consign */
var consign = require('consign');

/* importar  o módulo do body-parser */
var bodyParser = require('body-parser');

/* impportar o módulo do express validator */
var expressValidator = require('express-validator');
/* iniciar o objeto do express */
var app = express();

/* setar as variáveis 'views engine' e 'views' do express */
app.set('view engine', 'ejs');
app.set('views', './app/views');

/* configurar os middleware express.static */
app.use(express.static('./app/public'));

/* configurar os middleware body-parser */
app.use(bodyParser.urlencoded({extended: true}));

/* configurar os middleware express-validator */
app.use(expressValidator());

/* efetua o auload das rotas, dos models e controllers para o objeto app */
    consign()
        .include('app/routes')
        .then('app/models')
        .then('app/controllers')
        .into(app);

/* exportar o objeto app */
module.exports = app;