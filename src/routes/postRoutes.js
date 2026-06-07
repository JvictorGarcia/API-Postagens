const express = require("express");
const cache = require("express-redis-cache")({
  host: "localhost",
  port: 6379,
  expire: 60
});

const postController = require("../controllers/postController");

const router = express.Router();

router.post("/", postController.criarPostagem);

router.get("/", cache.route(), postController.listarPostagens);

router.get("/search", cache.route(), postController.buscarPorTituloOuAutor);

router.get("/:id", cache.route(), postController.buscarPorId);

module.exports = router;