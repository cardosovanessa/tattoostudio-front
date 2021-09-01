import api from '../../api/api';
import React, { useEffect, useState } from 'react';
import style from './Home.module.css';

const Home = () => {
  const [ dados, setDados ] = useState([]);

  useEffect (() => {
    api("https://floating-depths-35129.herokuapp.com/tattoo/studio", "GET")
      .then ((resp) => {
      setDados(resp)
    })
  }, [])

  // if (!dados){
  // return (<div></div>)
  // }

  return (
    <main className={style.main}>
      {console.log(dados)};
      <div className={style.home} id={style.img}>Mafia's Tattoo Studio</div>
      <div className={style.home} id={style.middle}>
        
        <div id={style.img2}></div>
        <div id={style.text}>
          <p>Dentro da tradição e das raízes da Resilia, a Mafia’s 
            Tattoo foi fundada pelo Zé com experiência no mercado de tatuagem há 10 anos, 
            tendo como propósito oferecer aos seus clientes a melhor experiência em tatuagem 
            do Brasil criando um novo conceito de estúdio. <br /><br />
            A família Mafia’s Tattoo conta com mais de dois artistas qualificados que oferecem 
            criações sob medida, possuem conhecimento e especialidades em diversos estilos e 
            materiais de alto padrão.
            Mais que um estúdio de tatuagem, a Mafia’s Tattoo é hoje uma experiência única e
            sem precedentes.
          </p>
        </div>
      </div>       

      <div className={style.home} id={style.img3}>Filiais</div>
        <div className={style.home} id={style.bottom}>
          
          <div className={style.filiais} id={style.studio1}> 
            <h2 className={style.address}>pipipi</h2> 
          </div>

          <div className={style.filiais} id={style.studio2}>
            <h2 className={style.address}>{dados[1]?.RUA+" " + dados[1]?.NUMERO}</h2> 
          </div>
            
          <div className={style.filiais} id={style.studio3}>
            <h2 className={style.address}>pipipi</h2> 
          </div>
  
      </div>
    </main>
  );
};

export default Home;