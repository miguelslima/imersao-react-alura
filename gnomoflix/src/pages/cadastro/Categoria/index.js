import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormField from '../../../components/FormField';
import PageDefault from '../../../components/PageDefault';

function Categoria() {
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: ''
  }

  const [categorias, setCategorias] = useState([]);
  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    })
  }

  function handleCategory(event) {
    setValue(
      event.target.getAttribute('name'),
      event.target.value
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);

    setValues(valoresIniciais)
  }

  return (
    <PageDefault>
      <h1>Cadastro de Categoria: {values.nome}</h1>

      <form onSubmit={handleSubmit}>
      
        <FormField 
          label="Nome da Categoria"
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleCategory}
        />

        {/* <div>
          <label htmlFor="">
            Descrição:
            <textarea 
              type="text" 
              name="descricao"
              placeholder={values.descricao}
              onChange={handleCategory}
            />
          </label>
        </div> */}

        <FormField
          label="Descrição"
          type="????"
          name="descricao"
          value={values.descricao}
          onChange={handleCategory}
        />

        {/* <div>
          <label htmlFor="">
            Cor:
            <input 
              type="color" 
              name="cor"
              placeholder={values.cor}
              onChange={handleCategory}
            />
          </label>
        </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleCategory}
        />

      <button>Cadastrar</button>
      </form>

      <ul style={{listStyle: 'none'}}>
        {categorias.map((categoria, id) => {
          return (
            <li key={`${categoria}${id}`}>
              {categoria.nome}
            </li>
          )
        })}
      </ul>

      <Link to="/">
        Home
      </Link>
    </PageDefault>
  )
}

export default Categoria;