import React from "react";
import style from "./Materiais.module.css";

const Materiais = () => {
    return (
        <main className={style.main}>
            <div id={style.textp}>
                Materiais - Máfia's Tatoo    
                </div>
            <div className={style.home} id={style.middle}>
                <div id={style.img}></div>
                <div id={style.text}>
                A ANVISA impõe normas de boas práticas para que os tatuadores possam trabalhar em estúdios e, assim, garantir a segurança tanto do cliente quanto a dele própria. As regras são simples e claras: deve haver esterilização de equipamentos de tatuagem, e desinfecção das superfícies no local.    
                </div>
            </div>
            <div id={style.texts}>  
                Conheça os materiais utilizados na Máfia's Tattoo.
            </div> 
            <div className={style.home} id={style.bottom}>
                <div className={style.mat} id={style.agulha}> 
                    <h2 className={style.materiais}>Agulhas</h2> 
                </div>

                <div className={style.mat} id={style.luva}>
                    <h2 className={style.materiais}>Luvas Descartáveis</h2> 
                </div>
        
                <div className={style.mat} id={style.maquina}>
                    <h2 className={style.materiais}>Máquina</h2> 
                </div>

                <div className={style.mat} id={style.cartucho}>
                    <h2 className={style.materiais}>Cartucho</h2> 
                </div>

                <div className={style.mat} id={style.biqueira}>
                    <h2 className={style.materiais}>Biqueira Descartável</h2> 
                </div>
            </div>
        </main>
    );
};
  
export default Materiais;