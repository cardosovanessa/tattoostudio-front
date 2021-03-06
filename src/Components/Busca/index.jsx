import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import CardBusca from '../CardBusca';
import Alert from '../Alert';
import { BuscaDiv } from '../Busca/styled';
import Loading from '../Loading';
const urlPortfolio = "https://estudiotattooapi-portfolio.herokuapp.com/portfolio/tag/"

const Busca = () => {
	const [search, setSearch] = useState("");
	const [portfolios, setPortfolios] = useState([])
	const [isLoaded, setIsLoaded] = useState(false)
	const [submited, setSubmited] = useState(false)
	const [showAlert, setShowAlert] = useState(false)

	const onSubmit = (e) => {
		setSubmited(true)
		e.preventDefault()
		setShowAlert(false)
		api(urlPortfolio+search, 'GET')
		.then((resp) => {
			setPortfolios(resp.result)
			if(resp.result)
				setIsLoaded(true)
			else
				setShowAlert(true)
		})
	}
    
	return (
		<>  
		<BuscaDiv>
			<form onSubmit={onSubmit}>
				<label>Busca</label>
				<input type="search" placeholder="Digite o tema da tatuagem"
				onChange={(e)=>{setSearch(e.target.value)}} name="pesquisa" />
			</form>
				<Alert show={showAlert}>Tema não encontrado!</Alert>
					<div className="cards">
						{	submited && (isLoaded ? portfolios.map((portfolio)=>{
							return <CardBusca portfolio={portfolio} />
							})
							: <Loading />)
						}
					</div>
		</BuscaDiv>
	</>);
}
 
export default Busca;