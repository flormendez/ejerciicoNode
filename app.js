var express = require("express");
var bodyParser = require("body-parser");
var dotenv = require("dotenv");

dotenv.config();

var app = express();
var port = process.env.PORT || 3000;

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

//Products

app.get("/productos", function(req, res) {
  res.status(200).send("Todos los productos");
});

app.get("/categorias/:id", function(req, res) {
  res.status(200).send("Obtener una categoria por el id");
});

app.get("/productos/:id", function(req, res) {
  res.status(200).send("Obtener un elemento por el id");
});

app.post("/productos/:id", function(req, res) {
  res.status(200).send("Agregar un nuevo producto");
});

app.put("/productos/:id", function(req, res) {
  res.status(200).send("Actualizo un producto por su id");
});

app.delete("/productos/:id", function(req, res) {
  res.status(200).send("Borrar un elemento por el id");
});

app.listen(port, function() {
  console.log("Running app on port" + port);
});
