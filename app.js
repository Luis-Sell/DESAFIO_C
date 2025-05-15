const express = require('express');                 // Importa o framework Express para criar o servidor web
const app = express();                              // Aplicação Express, que vai tartar as requisições

app.use(express.json());

let tarefas = []                                    // Armazena as tarefas na memória
let proximoId = 1                                   // Controla o próximo ID único para cada tarefa

                                                    // POST para inserir múltiplas tarefas
app.post('/insert-tasks', (req, res) => {
    const data = req.body;                          // Recebe o array de tarefas enviado no corpo da requisição

                                                    // Verifica se o corpo é um array
    if (!Array.isArray(data)) {
    return res.status(400).json({ erro: 'Esperado um array de tarefas.' });
}

                                                    // Valida e adiciona tarefas
    const tarefasValidas = data
                                                    // Primeiro, valida se todos os campos necessários existem
    .filter(tarefa =>
        tarefa.description && tarefa.responsable && tarefa.status
    )
                                                    // Depois, adiciona um ID automático para cada tarefa válida
    .map(tarefa => {
        const novaTarefa = {
            id: String(proximoId++),                // Gera um ID único em formato string
            description: tarefa.description,
            responsable: tarefa.responsable,
            status: tarefa.status
        };
        return novaTarefa;
    });

    tarefas = [...tarefas, ...tarefasValidas];      // Adiciona as novas tarefas validadas na lista geral de tarefas

    res.status(201).json({ 
    mensagem: 'Tarefa cadastrada com sucesso!',
    tarefas: tarefasValidas
    });
});

                                                    // GET para listar todas as tarefas
app.get("/get-tasks", (req, res) => {
    res.status(200).json({
    mensagem: 'Essa é sua lista de tarefas!', 
    listaTarefas: tarefas
    });
});

module.exports = app;                               // Exporta o app para ser usado em outro arquivo


