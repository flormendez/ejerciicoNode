function saludar(req, res) {
  res.send("Hola Mundo");
}

module.exports = {
  saludar: saludar
};
