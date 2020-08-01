import React, { useEffect, useState } from 'react';
import './index.css';

import Menu from './components/Menu';

import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import PageDefault from './components/PageDefault'

import categoriaRepository from './repositories/categorias'

function App() {
  const [dadosIniciais, setDadosIniciais] = useState([])

  useEffect(() => {
      categoriaRepository.getAllWithVideos()
        .then((categoriasComVideos) => {
          setDadosIniciais(categoriasComVideos)
        })
        .catch((err) => {
          console.log(err.message)
        })
    }, []);

  return (
    <PageDefault paddingAll={0}>

      {dadosIniciais.length === 0 && (<div>Loading..</div>)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription="Humor para relaxar nessa quarentena eterna. Então vamos rir para ajudar!"
              />
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
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
