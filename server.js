const app = require('./app')
const port = 8085;                                              // Define a porta


                                                                // Inicia o servidor para "escutar" a porta
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);  // Exibe a mensagem no terminal
});