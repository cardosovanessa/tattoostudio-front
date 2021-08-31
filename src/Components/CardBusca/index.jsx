import React from 'react';

const CardBusca = ({portfolio}) => {
    
    return ( 
    <div>
        <p><strong>Descrição: </strong>{portfolio.description}</p>
        <p><strong>Tamanho: </strong>{portfolio.size}</p>
        <p><strong>Disponivel: </strong>{portfolio.avaliable ? <span>Sim</span> : <span>Não</span> }</p>
        <p><strong>Cor: </strong>{portfolio.color}</p>
    </div> );
}
 
export default CardBusca;