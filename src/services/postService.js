let postagens = [];
let proximoId = 1;

function criarPostagem(dados) {
  const { titulo, conteudo, autor } = dados;

  if (!titulo || !conteudo || !autor) {
    const erro = new Error("Título, conteúdo e autor são obrigatórios.");
    erro.status = 400;
    throw erro;
  }

  if (titulo.length < 3) {
    const erro = new Error("O título deve ter pelo menos 3 caracteres.");
    erro.status = 400;
    throw erro;
  }

  if (conteudo.length < 10) {
    const erro = new Error("O conteúdo deve ter pelo menos 10 caracteres.");
    erro.status = 400;
    throw erro;
  }

  const novaPostagem = {
    id: proximoId++,
    titulo,
    conteudo,
    autor,
    dataCriacao: new Date().toISOString()
  };

  postagens.push(novaPostagem);

  return novaPostagem;
}

function listarPostagens() {
  return postagens;
}

function buscarPorId(id) {
  const postagem = postagens.find((post) => post.id === Number(id));

  if (!postagem) {
    const erro = new Error("Postagem não encontrada.");
    erro.status = 404;
    throw erro;
  }

  return postagem;
}

function buscarPorTituloOuAutor(titulo, autor) {
  if (!titulo && !autor) {
    const erro = new Error("Informe um título ou autor para realizar a busca.");
    erro.status = 400;
    throw erro;
  }

  const resultado = postagens.filter((post) => {
    const tituloConfere = titulo
      ? post.titulo.toLowerCase().includes(titulo.toLowerCase())
      : true;

    const autorConfere = autor
      ? post.autor.toLowerCase().includes(autor.toLowerCase())
      : true;

    return tituloConfere && autorConfere;
  });

  return resultado;
}

module.exports = {
  criarPostagem,
  listarPostagens,
  buscarPorId,
  buscarPorTituloOuAutor
};