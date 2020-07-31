import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

import './index.css';

function Categoria() {
  const valoresIniciais = {
    titulo: '',
    categoria: '',
    descricao: '',
    cor: '#DB5419',
  };

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleCategory(event) {
    setValue(event.target.getAttribute('name'), event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([...categorias, values]);

    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
      <h1>Em construção =)</h1>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleCategory}
        />

        <FormField
          label="Nome do vídeo"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleCategory}
        />

        <FormField
          label="Link"
          type="link"
          name="descricao"
          value={values.descricao}
          onChange={handleCategory}
        />

        <button type="submit">Cadastrar</button>
      </form>
      {/*
      <table>
        <tr style={{ fontWeight: 'bold' }}>
          <td>Titulo</td>
          <td>Categoria</td>
          <td>Descrição</td>
        </tr>
        {categorias.map((categoria) => (
          <tr key={`${categoria.name}`}>
            <td>{categoria.titulo}</td>
            <td>{categoria.categoria}</td>
            <td>{categoria.descricao}</td>
          </tr>
        ))}
      </table> */}

      <Link to="/">Home</Link>
      <div style={{ display: 'inline-block', padding: 20 }} />
      <Link to="/cadastro/categoria">Categoria</Link>
    </PageDefault>
  );
}

export default Categoria;
