function errorHandler(error, req, res, next) {
  const status = error.status || 500;

  return res.status(status).json({
    erro: true,
    mensagem: error.message || "Erro interno no servidor."
  });
}

module.exports = errorHandler;