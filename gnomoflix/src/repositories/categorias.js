import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possivel pegar os dados :(');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível pegar os dados :(');
    });
}

async function remove(categoriaObject) {
  console.log(categoriaObject);

  return fetch(`${URL_CATEGORIES}/${categoriaObject.id}`, {
    method: 'DELETE',
  }).then(async (responseServer) => {
    if (responseServer.ok) {
      const response = await responseServer.json();

      return response;
    }

    throw new Error('Não foi possível se conectar ao servidor!');
  });
}

export default {
  getAllWithVideos,
  getAll,
  remove
};
