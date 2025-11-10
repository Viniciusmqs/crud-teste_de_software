# Relatorio de Testes - API Usuarios MySQL - AT4

## 1. Informacoes gerais

- Nome da suite de testes: API Usuarios MySQL - AT4
- Arquivo de origem: API_Usuarios_MySQL_AT4.postman_test_run.json
- Data e hora da execucao: 2025-11-10T12:54:53.869Z
- Status da execucao: finished
- Total de testes bem sucedidos: 5
- Total de testes com falha: 0
- Total de iteracoes: 1
- Tempo total da execucao: 85 ms

## 2. Resumo dos testes

Foram executadas 4 requisicoes, cobrindo as operacoes de CRUD previstas na atividade:

| Ordem | Nome do caso de teste                          | Metodo | URL                               | Status HTTP | Resultado do teste |
| ----- | ---------------------------------------------- | ------ | --------------------------------- | ----------- | ------------------ |
| 1     | Listar usuarios - GET /usuarios                | GET    | http://localhost:3000/usuarios    | 200 OK      | Pass               |
| 2     | Criar usuario - POST /usuarios                 | POST   | http://localhost:3000/usuarios    | 201 Created | Pass               |
| 3     | Atualizar usuario - PUT /usuarios/:id          | PUT    | http://localhost:3000/usuarios/1  | 200 OK      | Pass               |
| 4     | Deletar usuario - DELETE /usuarios/:id         | DELETE | http://localhost:3000/usuarios/1  | 204 No Content | Pass            |

Todos os testes automatizados definidos nos scripts do Postman foram executados com sucesso, sem falhas.

---

## 3. Detalhamento por endpoint

### 3.1 Listar usuarios - GET /usuarios

- Metodo: GET  
- URL: `http://localhost:3000/usuarios`  
- Tempo de resposta: 57 ms  
- Codigo de resposta: 200 OK  

**Testes automatizados**

- "Status code 200"  
  - Resultado: Pass  

**Conclusao**

A operacao de listagem de usuarios esta respondendo corretamente com status 200 e retorna os dados em tempo adequado.

---

### 3.2 Criar usuario - POST /usuarios

- Metodo: POST  
- URL: `http://localhost:3000/usuarios`  
- Tempo de resposta: 18 ms  
- Codigo de resposta: 201 Created  

**Testes automatizados**

- "Status code 201"  
  - Resultado: Pass  
- "Resposta contem id"  
  - Resultado: Pass  

**Conclusao**

A criacao de usuario esta funcionando corretamente. A API retorna status 201 e o corpo da resposta inclui o campo `id`, confirmando que o registro foi criado no banco de dados.

---

### 3.3 Atualizar usuario - PUT /usuarios/:id

- Metodo: PUT  
- URL: `http://localhost:3000/usuarios/1`  
- Tempo de resposta: 6 ms  
- Codigo de resposta: 200 OK  

**Testes automatizados**

- "Status code 200"  
  - Resultado: Pass  

**Conclusao**

A atualizacao de dados de usuario esta funcionando corretamente. A API retorna status 200 para atualizacoes bem sucedidas.

---

### 3.4 Deletar usuario - DELETE /usuarios/:id

- Metodo: DELETE  
- URL: `http://localhost:3000/usuarios/1`  
- Tempo de resposta: 4 ms  
- Codigo de resposta: 204 No Content  

**Testes automatizados**

- "Status code 204"  
  - Resultado: Pass  

**Conclusao**

A exclusao de usuario esta funcionando corretamente. A API retorna status 204 indicando que o recurso foi removido com sucesso e nao ha corpo na resposta.

---

## 4. Conclusao geral

Com base no arquivo de resultado gerado pelo Postman (API_Usuarios_MySQL_AT4.postman_test_run.json), todos os testes automatizados executados para a API de Usuarios MySQL foram aprovados.  

As quatro operacoes especificadas na atividade da AT4 foram validadas:

- GET /usuarios: listagem de usuarios
- POST /usuarios: criacao de novo usuario
- PUT /usuarios/:id: atualizacao de usuario existente
- DELETE /usuarios/:id: exclusao de usuario

Nao foram identificadas falhas na execucao dos testes. O relatorio anexo e o arquivo JSON exportado do Postman servem como evidencia formal da execucao e aprovacao da suite de testes.
