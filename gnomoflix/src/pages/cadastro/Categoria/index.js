import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import { Edit, Delete } from '@material-ui/icons';

import './index.css';

function Categoria() {

  const valoresIniciais = {
    titulo: '',
    categoria: '',
    descricao: '',
    cor: '#DB5419',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  // function handleCategory(event) {
  //   setValue(event.target.getAttribute('name'), event.target.value);
  // }

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gnomoflix.herokuapp.com/categorias'

    fetch(URL_TOP).then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Categoria {values.titulo}</h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);
        clearForm();
      }}>
        <FormField
          label="Título"
          type="text"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="Nome da Categoria"
          type="text"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleChange}
        />

        <button>Cadastrar</button>
      </form>

      {categorias.length === 0 && <div>Loading...</div>}

      <table>
        <tr style={{ fontWeight: 'bold' }}>
          <td>Titulo</td>
          <td>Categoria</td>
          <td>Descrição</td>
          {categorias.length > 0 && <td>Opções</td>}
        </tr>
        {categorias.map((categoria) => (
          <tr key={`${categoria.id}`}>
            <td>{categoria.titulo}</td>
            <td>{categoria.categoria}</td>
            <td>{categoria.descricao}</td>
            {categoria && (
              <td>
                <Edit onClick={() => alert('Ícone editar chamado')} />{' '}
                <Delete onClick={() => alert('Ícone delete chamado')} />
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
