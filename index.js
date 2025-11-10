const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/usuarios", (req, res) => {
  db.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao buscar usuários" });
    }
    res.json(results);
  });
});

app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "Campos nome e email são obrigatórios" });
  }

  const sql = "INSERT INTO usuarios (nome, email) VALUES (?, ?)";
  db.query(sql, [nome, email], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao criar usuário" });
    }
    res.status(201).json({ id: result.insertId, nome, email });
  });
});

app.put("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ erro: "Campos nome e email são obrigatórios" });
  }

  const sql = "UPDATE usuarios SET nome = ?, email = ? WHERE id = ?";
  db.query(sql, [nome, email, id], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao atualizar usuário" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }
    res.json({ id, nome, email });
  });
});

app.delete("/usuarios/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM usuarios WHERE id = ?";
  db.query(sql, [id], (err, result) => {
    if (err) {
      return res.status(500).json({ erro: "Erro ao deletar usuário" });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ erro: "Usuário não encontrado" });
    }
    res.status(204).send();
  });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
