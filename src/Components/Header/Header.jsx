import React from 'react';
import style from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = ()=>{
  return( 
    <header className={style.cabecalho}>
      <nav className={style.nav}>
      {/* <Link className={style.logo} to='/'><img alt="foto-logo" src={Foto}/></Link> */}
        <Link className={style.item} to='/Home'>Home</Link>
        <Link className={style.item} to='/Cadastro'>Cadastro</Link>
        <Link className={style.item} to='/Portfolio'>Portfólio</Link>
        <Link className={style.item} to='/Materiais'>Materiais</Link>
      </nav>
    </header>
  )
}

export default Header;