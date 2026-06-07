const postService = require("../services/postService");

function criarPostagem(req, res, next) {
  try {
    const novaPostagem = postService.criarPostagem(req.body);
    return res.status(201).json(novaPostagem);
  } catch (error) {
    next(error);
  }
}

function listarPostagens(req, res, next) {
  try {
    const postagens = postService.listarPostagens();
    return res.status(200).json(postagens);
  } catch (error) {
    next(error);
  }
}

function buscarPorId(req, res, next) {
  try {
    const postagem = postService.buscarPorId(req.params.id);
    return res.status(200).json(postagem);
  } catch (error) {
    next(error);
  }
}

function buscarPorTituloOuAutor(req, res, next) {
  try {
    const { titulo, autor } = req.query;
    const resultado = postService.buscarPorTituloOuAutor(titulo, autor);
    return res.status(200).json(resultado);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  criarPostagem,
  listarPostagens,
  buscarPorId,
  buscarPorTituloOuAutor
};