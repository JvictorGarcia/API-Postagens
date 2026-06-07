# API de Gerenciamento de Postagens

Projeto desenvolvido em Node.js e Express para gerenciamento de postagens.

## Funcionalidades

* Criar nova postagem
* Listar todas as postagens
* Buscar postagem por ID
* Buscar postagens por título ou autor
* Cache com Redis usando express-redis-cache
* Compressão de respostas HTTP com compression
* Organização em camadas: rotas, controladores e serviços
* Tratamento de erros
* Validação de dados

## Tecnologias

* Node.js
* Express
* Redis
* express-redis-cache
* compression
* cors
* nodemon

## Estrutura do Projeto

```txt
src/
├── controllers/
├── middlewares/
├── routes/
├── services/
├── app.js
└── server.js
```

## Como executar

### Instalar as dependências

```bash
npm install
```

### Iniciar o Redis com Docker

```bash
docker start redis-postagens
```

Caso o container não exista:

```bash
docker run --name redis-postagens -p 6379:6379 -d redis
```

### Executar o projeto

```bash
npm run dev
```

A API estará disponível em:

```txt
http://localhost:3000
```

## Endpoints

### Criar postagem

POST `/posts`

Body:

```json
{
  "titulo": "Primeira postagem",
  "conteudo": "Conteúdo da postagem",
  "autor": "José Victor"
}
```

---

### Listar postagens

GET `/posts`

---

### Buscar por ID

GET `/posts/:id`

Exemplo:

```txt
GET /posts/1
```

---

### Buscar por título

GET `/posts/search?titulo=primeira`

---

### Buscar por autor

GET `/posts/search?autor=jose`

## Tratamento de erros

A API retorna mensagens de erro com códigos HTTP apropriados:

* 400 → Dados inválidos
* 404 → Postagem não encontrada
* 500 → Erro interno do servidor

## Objetivo do Projeto

O objetivo deste projeto é praticar conceitos relacionados ao desenvolvimento de APIs REST, organização em camadas, cache com Redis, compressão HTTP e boas práticas no backend utilizando Node.js e Express.
