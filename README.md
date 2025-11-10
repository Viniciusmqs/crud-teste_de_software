# 🧩 AT4 - API CRUD de Usuários MySQL com Postman e Relatório de Testes

Este projeto foi desenvolvido como parte da **Atividade AT4 - Testes de Software**, implementando uma **API RESTful** em Node.js com **MySQL** para operações de **CRUD (Create, Read, Update e Delete)** de usuários.  
A API foi testada e validada com o **Postman**, e os resultados foram exportados em formato JSON e documentados neste repositório.

---

## 📂 Estrutura do Repositório

| Arquivo / Pasta | Descrição |
|-----------------|------------|
| [`index.js`](./index.js) | Servidor principal da aplicação (Express + rotas CRUD). |
| [`db.js`](./db.js) | Conexão com o banco de dados MySQL. |
| [`package.json`](./package.json) | Dependências e scripts NPM do projeto. |
| [`postman_collection_api_usuarios.json`](./postman_collection_api_usuarios.json) | Collection do Postman com os endpoints da API. |
| [`api_usuarios_mysql_AT4.postman_collection.json`](./api_usuarios_mysql_AT4.postman_collection.json) | Versão exportada da collection com variáveis de ambiente. |
| [`API_Usuarios_MySQL_AT4.postman_test_run.json`](./API_Usuarios_MySQL_AT4.postman_test_run.json) | Resultado da execução automatizada da suite de testes do Postman. |
| [`relatorio-testes-api-usuarios.md`](./relatorio-testes-api-usuarios.md) | Relatório técnico detalhado dos testes executados. |
| [`.gitignore`](./.gitignore) | Arquivos e pastas ignoradas pelo Git. |
| 📸 **Capturas de Tela** | Evidências visuais dos testes realizados no Postman. |

---

## ⚙️ Tecnologias Utilizadas

- **Node.js (v20.19.5)**
- **Express.js**
- **MySQL (Homebrew 9.4.0)**
- **Postman + Newman** para automação de testes
- **JavaScript (ES6+)**
- **macOS** (ambiente de desenvolvimento)

---

## 🚀 Instruções de Execução da API

### 1. Clonar o repositório

```bash
git clone https://github.com/Viniciusmqs/crud-teste_de_software.git
cd crud-teste_de_software
```

### 2. Instalar dependências

```bash
npm install
```

### 3. Configurar o banco de dados

No MySQL Workbench, crie o schema `usuariosdb` e a tabela:

```sql
CREATE TABLE usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE
);
```

### 4. Executar o servidor

```bash
npm run dev
```

A aplicação rodará em:
```
http://localhost:3000
```

---

## 📡 Endpoints Disponíveis

| Método | Endpoint | Descrição |
|--------|-----------|------------|
| `GET` | `/usuarios` | Retorna todos os usuários cadastrados |
| `POST` | `/usuarios` | Cria um novo usuário |
| `PUT` | `/usuarios/:id` | Atualiza os dados de um usuário |
| `DELETE` | `/usuarios/:id` | Remove um usuário existente |

---

## 🧪 Testes com Postman

### ✅ Collection

A collection com os endpoints e scripts de teste pode ser importada diretamente no Postman:

📄 [`postman_collection_api_usuarios.json`](./postman_collection_api_usuarios.json)

### 🧾 Resultado de Execução

O arquivo abaixo contém o **resultado completo dos testes automatizados** executados no Postman:

📊 [`API_Usuarios_MySQL_AT4.postman_test_run.json`](./API_Usuarios_MySQL_AT4.postman_test_run.json)

---

## 📸 Evidências Visuais

| Etapa | Imagem |
|-------|--------|
| Execução dos testes no Postman | ![Execução dos testes no Postman](./Captura%20de%20Tela%202025-11-10%20às%2010.19.27.png) |
| Resultados gerais no Postman | ![Resultados gerais no Postman](./Captura%20de%20Tela%202025-11-10%20às%2010.16.49.png) |
| Detalhes de execução (GET/POST) | ![Detalhes GET e POST](./Captura%20de%20Tela%202025-11-10%20às%2010.16.56.png) |
| Detalhes PUT e DELETE | ![Detalhes PUT e DELETE](./Captura%20de%20Tela%202025-11-10%20às%2010.17.10.png) |
| Lista completa dos testes aprovados | ![Todos os testes aprovados](./Captura%20de%20Tela%202025-11-10%20às%2010.17.15.png) |
| Visualização do relatório Newman | ![Relatório HTML gerado via Newman](./Captura%20de%20Tela%202025-11-10%20às%2010.17.25.png) |

---

## 📄 Relatório de Testes

📘 [`relatorio-testes-api-usuarios.md`](./relatorio-testes-api-usuarios.md)

O relatório técnico inclui:
- Descrição dos endpoints
- Resultados esperados x obtidos
- Logs de execução e status HTTP
- Evidências de aprovação (PASS)

---

## 🧰 Comandos úteis

Gerar relatório HTML com Newman:
```bash
newman run postman_collection_api_usuarios.json -r html
```

Executar API e abrir no navegador:
```bash
npm run dev
open http://localhost:3000/usuarios
```

---

## 👨‍💻 Autor

**Vinícius M. Queiroz Silva**  
📚 *Engenharia de Software*  
🗓️ Novembro / 2025  

Repositório: [https://github.com/Viniciusmqs/crud-teste_de_software](https://github.com/Viniciusmqs/crud-teste_de_software)

---

## ✅ Conclusão

A API foi totalmente implementada, testada e validada com sucesso.  
Todos os **casos de teste CRUD** executaram corretamente (Status 200, 201, 204).  
O repositório contém **todo o código-fonte, evidências e documentação exigida** para a entrega da **AT4 - Testes de Software**.
