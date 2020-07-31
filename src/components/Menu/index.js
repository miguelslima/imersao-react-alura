import React from 'react';

import { Link } from 'react-router-dom'

import logo from '../../assets/gnomoflix.png'
import './styles.css';
import Button from '../ButtonLink';

// import ButtonLink from '../ButtonLink';


function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={logo} alt="Logo GnomoFlix"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;