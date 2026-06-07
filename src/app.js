const express = require("express");
const cors = require("cors");
const compression = require("compression");
const postRoutes = require("./routes/postRoutes");
const errorHandler = require("./middlewares/errorHandler");

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    mensagem: "API de Gerenciamento de Postagens",
    documentacao: {
      listar: "GET /posts",
      criar: "POST /posts",
      buscarPorId: "GET /posts/:id",
      buscarPorTituloOuAutor: "GET /posts/search?titulo=react ou /posts/search?autor=jose"
    }
  });
});

app.use("/posts", postRoutes);

app.use(errorHandler);

module.exports = app;