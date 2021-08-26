import React from 'react';
import style from './Header.module.css';
import {Link} from 'react-router-dom';

const Header = ()=>{
  return( 
    <header className={style.cabecalho}>
      <nav className={style.nav}>
        <Link className={style.item} to='/Branches'>Branches</Link>
        <Link className={style.item} to='/Home'>Home</Link>
      </nav>
    </header>
  )
}

export default Header;