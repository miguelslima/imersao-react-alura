import React, { useEffect, useState } from 'react';

import './index.css';

import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import PageDefault from './components/PageDefault';
import Loading from './components/Loading';
import categoriaRepository from './repositories/categorias';

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    categoriaRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setLoading(true);
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      })
      .finally(() => {
        setLoading(false);
      })
  }, []);

  return (
    <PageDefault paddingAll={0}>
      <Loading loading={loading} />

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Humor para relaxar nessa quarentena eterna. Então vamos rir para ajudar!"
              />
              <Loading />
              <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
            </div>
          );
        }

        return <Carousel key={categoria.id} category={categoria} />;
      })}

      {/*
      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} />
      */}
    </PageDefault>
  );
}

export default App;
