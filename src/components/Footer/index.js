import React from 'react';
import { FooterBase } from './styles';

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
    </FooterBase>
  );
}

export default Footer;
