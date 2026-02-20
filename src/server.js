import express from "express";

const app = express();

const PORT = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Olá mundo!");
});

app.use(express.json());

app.get("/tarefas", (req, res) => {
  res.json([
    { id: 1, descricao: "Estudar para o enem", concluida: false },
    { id: 2, descricao: "Fazer exercícios de matemática", concluida: true }
  ]);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});