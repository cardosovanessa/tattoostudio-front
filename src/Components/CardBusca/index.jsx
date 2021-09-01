import React from 'react';
import { CardPortifolio } from './style';

const CardBusca = ({ portfolio }) => {
    
	return ( 
	<CardPortifolio>
		
		<div>
			<img src={portfolio.image_url} alt="image-tattoo" />
		</div>
			
		<div>
			<p><strong>Descrição: </strong>{portfolio.description}</p>
			<p><strong>Tamanho: </strong>{portfolio.size}</p>
			<p><strong>Disponivel: </strong>{portfolio.avaliable ? <span>Sim</span> : <span>Não</span>}</p>
			<p><strong>Cor: </strong>{portfolio.color}</p>
		</div>
			
	</CardPortifolio> );
}
 
export default CardBusca;