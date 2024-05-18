import React from 'react';
import { Link } from 'react-router-dom';

const AuthNavbar = () => {
  return (
    <nav>
    <Link to="/about">Sobre Nós</Link>
    <Link to="/ods3">ODS</Link>
    <Link to="/login">Entrar</Link>
    <Link to="/register">Cadastrar</Link>
    </nav>
  );
};

export default AuthNavbar;
