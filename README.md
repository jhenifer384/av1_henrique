# av1_henrique

Este repositório contém uma API simples em Node.js + Express para a atividade AV1.

Como rodar

1. Instale dependências:

```powershell
npm install
```

2. Rode o servidor:

```powershell
npm run dev
```

O servidor será iniciado em http://localhost:3000

Rotas disponíveis

 - GET /volei -> lista todas as tarefas (status 200)
 - POST /volei -> cria uma nova tarefa. Requer JSON no corpo com o campo `titulo`. Retorna 201 se criado ou 400 se `titulo` ausente/empty.

Exemplo de requisição POST (PowerShell):

```powershell
$body = @{ titulo = 'Nova tarefa' } | ConvertTo-Json
Invoke-RestMethod -Uri http://localhost:3000/volei -Method POST -Body $body -ContentType 'application/json'
```
