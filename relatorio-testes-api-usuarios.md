# Relatorio de Testes - API de Usuarios MySQL

## 1. Informacoes gerais

- Projeto: API de Usuarios - AT4
- Linguagem: Node.js (Express)
- Banco de dados: MySQL
- Desenvolvedor responsavel: [Seu nome]
- Data dos testes: [preencher]

### Versoes de ferramentas

- Node.js: v20.19.5
- MySQL Server: 9.4.0 Homebrew
- Postman: [versao]
- Sistema operacional: macOS [versao]

---

## 2. Descricao da API

A API implementa operacoes de CRUD basicas para gerenciamento de usuarios, conforme tabela abaixo.

| Acao                   | Metodo | Endpoint         | Descricao                          |
| ---------------------- | ------ | ---------------- | ---------------------------------- |
| Buscar todos usuarios  | GET    | /usuarios        | Retorna lista de usuarios          |
| Criar novo usuario     | POST   | /usuarios        | Recebe dados no body e cria usuario |
| Atualizar usuario      | PUT    | /usuarios/{id}   | Atualiza dados de um usuario       |
| Deletar usuario        | DELETE | /usuarios/{id}   | Remove um usuario                  |

---

## 3. Ambiente de teste

- Servidor local rodando em `http://localhost:3000`
- Banco de dados `usuariosdb` com tabela `usuarios`:
  - `id INT AUTO_INCREMENT PRIMARY KEY`
  - `nome VARCHAR(100) NOT NULL`
  - `email VARCHAR(100) NOT NULL UNIQUE`

---

## 4. Casos de teste

### 4.1. GET /usuarios - Listar todos os usuarios

- **Objetivo**  
  Verificar se a API retorna a lista de usuarios cadastrados com sucesso.

- **Requisicao**  
  - Metodo: GET  
  - URL: `http://localhost:3000/usuarios`

- **Resultado esperado**  
  - Status HTTP 200  
  - Corpo da resposta em formato JSON, contendo um array de objetos com os campos `id`, `nome` e `email`.

- **Resultado obtido**  
  - Status: [preencher]  
  - Observacoes: [exemplo: retornou lista com N registros]

---

### 4.2. POST /usuarios - Criar novo usuario

- **Objetivo**  
  Validar a criacao de um novo usuario no banco de dados.

- **Requisicao**  
  - Metodo: POST  
  - URL: `http://localhost:3000/usuarios`  
  - Body (JSON):
    ```json
    {
      "nome": "Usuario Teste",
      "email": "usuario.teste@example.com"
    }
    ```

- **Resultado esperado**  
  - Status HTTP 201  
  - Corpo da resposta contendo o `id` gerado, `nome` e `email` enviados.

- **Resultado obtido**  
  - Status: [preencher]  
  - Observacoes: [exemplo: id gerado corretamente, registro visivel no banco]

---

### 4.3. PUT /usuarios/{id} - Atualizar usuario

- **Objetivo**  
  Verificar se a API atualiza corretamente os dados de um usuario existente.

- **Precondicao**  
  Usuario previamente criado com id conhecido (exemplo: 1).

- **Requisicao**  
  - Metodo: PUT  
  - URL: `http://localhost:3000/usuarios/1`  
  - Body (JSON):
    ```json
    {
      "nome": "Usuario Atualizado",
      "email": "usuario.atualizado@example.com"
    }
    ```

- **Resultado esperado**  
  - Status HTTP 200  
  - Corpo da resposta com os dados atualizados.

- **Resultado obtido**  
  - Status: [preencher]  
  - Observacoes: [exemplo: dados atualizados e refletidos no banco]

---

### 4.4. DELETE /usuarios/{id} - Deletar usuario

- **Objetivo**  
  Verificar se a API remove um usuario existente.

- **Precondicao**  
  Usuario existente com id conhecido (exemplo: 1).

- **Requisicao**  
  - Metodo: DELETE  
  - URL: `http://localhost:3000/usuarios/1`

- **Resultado esperado**  
  - Status HTTP 204  
  - Sem corpo na resposta  
  - Registro removido da tabela `usuarios`.

- **Resultado obtido**  
  - Status: [preencher]  
  - Observacoes: [exemplo: registro nao encontrado apos exclusao]

---

## 5. Evidencias

- Prints de tela do Postman para cada endpoint executado com sucesso.
- Opcional: video curto navegando pela collection, executando as requisoes e exibindo as respostas.

Sugestao de organizacao no repositorio Git:

- `postman_collection_api_usuarios.json`
- `relatorio-testes-api-usuarios.md`
- pasta `evidencias/` com imagens ou video dos testes.

---

## 6. Conclusao

A API de usuarios foi testada com as operacoes de CRUD previstas na atividade, utilizando MySQL como banco de dados e Postman como ferramenta de teste.  
Os casos de teste descritos neste relatorio cobrem os fluxos principais de uso e servem como base para futuras evolucoes da API.
