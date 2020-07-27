import React from 'react';

import logo from '../../assets/gnomoflix.png'
import './styles.css';
import Button from '../ButtonLink';
// import ButtonLink from '../ButtonLink';


function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={logo} alt="Logo GnomoFlix"/>
      </a>

      <Button className="ButtonLink" href="/">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;