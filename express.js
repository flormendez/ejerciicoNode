var express = require("express");
var controller = require("./controller/controller");

var app = express();

app.get("/saludar", controller.saludar);

var puerto = "8080";

app.listen(puerto, function() {
  console.log("Escuchando pedidos en el puerto " + puerto);
});
