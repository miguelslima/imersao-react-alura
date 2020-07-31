import React from 'react';
import {Link} from 'react-router-dom'

import './style.css';
// import jogo from './jogo';

function Page404() {
  return (
    <section>
      <h1 style={{textAlign: 'center'}}>Página não encontrada</h1>
      
      <div style={{textAlign: 'center'}}>
        <iframe src="https://mariosouto.com/flappy-bird-devsoutinho/" width="340" height="495"></iframe>
      </div>
      

      <Link to="/">
          <p style={{textAlign: 'center'}}>Retornar a Página Inicial</p>
      </Link>
    </section>
  )
}

export default Page404;