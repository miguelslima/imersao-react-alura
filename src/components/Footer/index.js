import React from 'react';
import { FooterBase } from './styles';
import { GitHub, LinkedIn } from '@material-ui/icons'

import logo from '../../assets/gnomoflix.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={logo} alt="Logo GnomoFlix" />
      </a>

      <p>
        Orgulhosamente criado durante a{' '}
        <a href="https://www.alura.com.br/">Imersão React da Alura</a>
      </p>

        <a href="https://github.com/miguelslima" target="_blank"><GitHub style={{ fontSize: 40, paddingRight: 10 }}/></a>
        <a href="https://www.linkedin.com/in/miguelslima1986/" target="_blank"><LinkedIn style={{ fontSize: 40 }}/></a>

    </FooterBase>
  );
}

export default Footer;
