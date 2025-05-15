    Projeto Backend - Node.js v18 | Express | JavaScript

    bash

    1.
    git clone [URL]
    cd projeto-backend

    2. Instalar dependências
    "npm install"

    3. Iniciar o servidor
    "npm run dev"
______________________________________

 Endpoints disponíveis

 POST /insert-tasks (Cadastra uma ou mais tarefas)

 Cada tarefa deve conter os seguintes campos:*  
→ `description` | `responsable` | `status`  
O campo `id` será gerado automaticamente pelo servidor.

Exemplo com curl:

```bash
curl -X POST http://localhost:8085/insert-tasks \
-H "Content-Type: application/json" \
-d '[ 
  { "description": "Criar Login", "responsable": "bruno", "status": "done" },
  { "description": "Criar Menu", "responsable": "bruno", "status": "doing" }
]'

- - - - - - - - - - - - - - - - - - - - 

    GET /get-tasks (Retorna a lista de todas as tarefas cadastradas)
    Exemplo com curl:
    curl http://localhost:8085/get-tasks

______________________________________
Alterações - package.json

    "start": "node app.js",
    "dev": "nodemon app.js"

______________________________________
                                      |
    Autor: Luis Fernando Sell         |
    E-mail: luisfernandosell@gmail.com|
______________________________________|