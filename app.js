/* Importar as configurações do servidor */
var app = require('./config/server');

/* Parametrizar a porta de escuta */
var server = app.listen(80, function(){
    console.log('Servidor ON');
});

var io = require('socket.io').listen(server);

/* Criar a conexão por websocket */
io.on('connection', function(socket) {
   console.log('Usuário Conectou'); 
   
   socket.on('disconnect', function() {
       console.log('Usuário Desconectou'); 
    });
});