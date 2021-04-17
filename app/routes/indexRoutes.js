module.exports = function(application){
    application.get('/', function(req, res){
        application.app.controllers.indexController.indexController(application, req, res);
    });
}