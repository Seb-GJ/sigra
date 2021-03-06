/* var express = require ('express'),
    bodyParser = require ('body-parser'),
    cors = require ('cors');

var app = express();

//middlewares 
app.use = (cors());
app.use = (bodyParser.urlencoded({extended : false}));
app.use = (bodyParser.json());

// manejando los errores 404
app.use(function(req, res, next){
    var err = new Error ('Not Found');
    err.status = 404; 
    next(err);
});

//Iniciar el servidor
var server = app.listen(process.env.PORT || 3000, function(){

    console.log('Escuchando el puerto ' + server.address().port);
});


 */
var express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

// Objeto global de la app
var app = express();

// configuración de middlewares
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Manejando los errores 404
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Iniciando el servidor...
var server = app.listen(process.env.PORT || 3000, function(){
  console.log('Escuchando en el puerto ' + server.address().port);
});