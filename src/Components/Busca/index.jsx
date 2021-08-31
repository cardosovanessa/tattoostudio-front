import React, { useEffect, useState } from 'react';
import api from '../../api/api';
import CardBusca from '../CardBusca';
import Portfolio from '../Portfolio/Portfolio';
const urlPortfolio = "https://estudiotattooapi-portfolio.herokuapp.com/portfolio/tag/"

const Busca = (props) => {
    const [search, setSearch] = useState("");
    const [portfolios, setPortfolios] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    const onSubmit = (e)=>{
        e.preventDefault()
        api(urlPortfolio+search, 'GET')
        .then((resp)=>{
            setPortfolios(resp.result)
            setIsLoaded(true)
        })
    }
    
    return (
    <>
        <form onSubmit={onSubmit}>
            <input type="search" onChange={(e)=>{setSearch(e.target.value)}} name="pesquisa" />
        </form>
        {
            isLoaded && <CardBusca portfolio={portfolios} />
        }
    </>);
}
 
export default Busca;