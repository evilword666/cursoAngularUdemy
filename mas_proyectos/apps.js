'use strict'
 
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar archivos rutas


//middlewares (se ejecutan antes de ejecutar la funcionalidad principal a la ruta que estamos utilizando)


app.use(bodyParser.urlencoded({extended:false}));

app.use(bodyParser.json());

//CORS

//rutas
app.get('/',(req,res) => {
    res.status(200).send("<h1>Pagina de inicio</h1>")
});


app.get('/test',(req,res) => {
    res.status(200).send({
        message:"Hola mundo desde mi API de nodejs"
    })
});

//exportar
module.exports = app;
