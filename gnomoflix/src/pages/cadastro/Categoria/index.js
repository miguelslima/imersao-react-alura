import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Edit, Delete } from '@material-ui/icons';

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
      <h1>Cadastro de Categoria {values.categoria}</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleCategory}
        />

        <FormField
          label="Nome da Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleCategory}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleCategory}
        />

        <FormField
          label="Descrição"
          type="textArea"
          name="descricao"
          value={values.descricao}
          onChange={handleCategory}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <table>
        <tr style={{ fontWeight: 'bold' }}>
          <td>Titulo</td>
          <td>Categoria</td>
          <td>Descrição</td>
          {categorias.length > 0 && <td>Opções</td>}
        </tr>
        {categorias.map((categoria) => (
          <tr key={`${categoria.name}`}>
            <td>{categoria.titulo}</td>
            <td>{categoria.categoria}</td>
            <td>{categoria.descricao}</td>
            {categoria && (
              <td>
                <Edit /> <Delete />
              </td>
            )}
          </tr>
        ))}
      </table>

      <Link to="/">Home</Link>
    </PageDefault>
  );
}

export default Categoria;
