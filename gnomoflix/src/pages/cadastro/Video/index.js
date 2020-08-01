import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useForm from '../../../hooks/useForm';

import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';
import videosRepository from '../../../repositories/videos';
import categoriasReposiroty from '../../../repositories/categorias'

import './index.css';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: 'Video padrão',
    url: 'https://www.youtube.com/watch?v=XtDXp-E38x4',
    categoria: 'Games',

  });

  useEffect(() => {
    categoriasReposiroty
      .getAll()
      .then((categoriasFromServer) => {
        setCategorias(categoriasFromServer);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de videos</h1>

      <form onSubmit={(event) => {
        event.preventDefault();
        // alert('Video Cadastrado');

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);

        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,

        })
          .then(() => {
            history.push('/');
          });
      }}
      >
        <FormField
          label="Título do Vídeo "
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />
        <FormField
          label="Url do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
          suggestions={categoryTitles}
        />

        <button type="submit">
          Cadastrar
        </button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
