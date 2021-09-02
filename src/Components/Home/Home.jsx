import api from '../../api/api';
import React, { useEffect, useState } from 'react';
import style from './Home.module.css';
import Loading from '../Loading';

const Home = () => {
  const [ dados, setDados ] = useState([]);

  useEffect (() => {
    api("https://floating-depths-35129.herokuapp.com/tattoo/studio", "GET")
      .then ((resp) => {
      setDados(resp)
    })
  }, [])

  if (!dados[0]){
  return (<Loading/>)
  }

  return (
    <main className={style.main}>
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

      <div className={style.home} id={style.img3}>Nossas unidades</div>
        <div className={style.home} id={style.bottom}>

          <div className={style.filiais} id={style.studio2}>
            <h2 className={style.address}> {console.log(dados)}
              {`Unidade ${dados[0]?.UNIDADE}`}<br />
              {`${dados[0]?.RUA + ' '}`}
              {`, ${dados[0]?.NUMERO}`}
              {` - ${dados[0]?.BAIRRO}`}<br />
              {`${dados[0]?.CIDADE}`}
              {` - ${dados[0]?.ESTADO}`}<br />
              {`${dados[0]?.TELEFONE}`}
            </h2> 
          </div>

          <div className={style.filiais} id={style.studio1}> 
            <h2 className={style.address}>
              {`Unidade ${dados[1]?.UNIDADE}`}<br />
              {`${dados[1]?.RUA + ' '}`}
              {`, ${dados[1]?.NUMERO}`}
              {` - ${dados[1]?.BAIRRO}`}<br />
              {`${dados[1]?.CIDADE}`}
              {` - ${dados[1]?.ESTADO}`}<br />
              {`${dados[1]?.TELEFONE}`}
            </h2>           
          </div>
 
          <div className={style.filiais} id={style.studio3}>
            <h2 className={style.address}>
              {`Unidade ${dados[2]?.UNIDADE}`}<br />
              {`${dados[2]?.RUA + ' '}`}
              {`, ${dados[2]?.NUMERO}`}
              {` - ${dados[2]?.BAIRRO}`}<br />
              {`${dados[2]?.CIDADE}`}
              {` - ${dados[2]?.ESTADO}`}<br />
              {`${dados[2]?.TELEFONE}`}
            </h2>           
          </div>
  
      </div>
    </main>
  );
};

export default Home;