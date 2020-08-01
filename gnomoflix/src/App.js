import React, { useEffect, useState } from 'react';
import './index.css';

import Menu from './components/Menu';

import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import PageDefault from './components/PageDefault'
import Footer from './components/Footer';

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

      {dadosIniciais.length >= 1 && (
          <>
          <BannerMain
            videoTitle={dadosIniciais[0].videos[0].titulo}
            url={dadosIniciais[0].videos[0].url}
            videoDescription="Os tiros mais longo da história de um Snipers! Top 3: Rob Furlong (2.430m), Top 2: Craig Harrison (2.475m) , Top 1: Soldado Não identificado canadense (3.450m)"
          />

          <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
        </>

      )}

{/*
      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Carousel category={dadosIniciais.categorias[3]} />

      <Carousel category={dadosIniciais.categorias[4]} />

      <Carousel category={dadosIniciais.categorias[5]} /> */}

    </PageDefault>
  );
}

export default App;
