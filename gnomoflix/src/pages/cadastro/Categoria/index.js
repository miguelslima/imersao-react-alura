import React, { useState, useEffect } from 'react';
import { confirmAlert } from 'react-confirm-alert';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import { Edit, Delete, Autorenew } from '@material-ui/icons';

import categoriaRepository from '../../../repositories/categorias'
// import 'react-confirm-alert/src/react-confirm-alert.css';

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

  useEffect(() => {
    const URL_TOP = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://gnomoflix.herokuapp.com/categorias'

    fetch(URL_TOP).then(async (respostaServidor) => {
      const resposta = await respostaServidor.json();
      setCategorias([...resposta]);
    });
  }, []);

  async function handleDelete(id) {
    try {
      await categoriaRepository.remove({
        id,
      });
      const updatedList = categorias.filter((item) => item.id !== id);
      setCategorias(updatedList);

      toast.success('A categoria foi excluída com sucesso!');
    } catch (err) {
      toast.error('Não foi possível deletar a categoria');
    }
  }

  function confirmDelete(id) {
    confirmAlert({
      title: 'Confirmação de exclusão',
      message: 'Você quer mesmo excluir essa categoria?',
      buttons: [
        {
          label: 'Sim',
          onClick: () => handleDelete(id),
        },
        {
          label: 'Não',
          onClick: () => {},
        },
      ],
    });
  }



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

      {categorias.length === 0 && <Autorenew size={24} />}
      <table>
        <tr style={{ fontWeight: 'bold' }}>
          <td>Categoria</td>
          <td>Titulo</td>
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
                <Delete onClick={() => confirmDelete(categoria.id)} />
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
