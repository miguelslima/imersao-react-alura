import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND_TOP}/categorias`;
const DELAY = 2000;

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
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve(resposta);
          }, DELAY);
        });
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

function create(categoria) {
  return fetch(URL_CATEGORIES,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(categoria),
    })
    .then(async (response) => {
      if (response.ok) {
        const categorias = await response.json();
        return categorias;
      }
      throw new Error('Não foi possível gravar os dados :(');
    });
}

export default {
  getAllWithVideos,
  getAll,
  remove,
  create
};
