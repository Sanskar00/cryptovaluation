import React ,{useState,useEffect} from 'react';

import { Table } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './coinList.css'
import {Link} from 'react-router-dom';
import { Navbar } from '../../navbar/navbar';


export function CoinsList(){
    useEffect(()=>{
        fetchCoins();
       
    },[]);
    const [coins,setcoins]=useState([]);
    const [search,setSearch]=useState("");
    
    const fetchCoins=async() => {
        const fetchCoin=await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true')
        const coins=await fetchCoin.json();
        setcoins(coins);

        
    }
    function handleChange(e){
        setSearch(e.target.value);
    }
    const filteredCoin=coins.filter(coin=>(
        coin.name.toLowerCase().includes(search.toLowerCase())
    ))

    return(
       <div style={{overflowX:'auto'}}>
           <input  className='search'
         type='searchField'
         placeholder= 'Search Coin'
         onChange={handleChange}></input>
            <Table striped  hover variant  ="dark" className="container">
                <thead>
                <tr>
                    <th>Logo</th>
                    <th>Name</th>
                    <th>Symbol</th>
                    <th>Current Price</th>
                    <th>Market Cap</th>
                    <th>Price Change 24h</th>
                    
                   
                </tr>
                </thead>
                <tbody>  
                {filteredCoin.map(coin=>(
                  <tr>
                    <td><img alt='coins' src={coin.image} style={{width:"50px",height:"50px"}}></img></td>
                    <td>

                    <Link to={`/${coin.id}`}>{coin.name}</Link>
                    </td>
                    <td>{coin.symbol}</td>
                    <td>${coin.current_price}</td>
                    <td >{coin.market_cap}</td>
                    <td style={(coin.price_change_24h>0)?{color:'lightGreen'}:{color:'red'}}>{coin.price_change_24h}</td>
            

                    </tr>

         ))} 
                </tbody>
            </Table>
       </div>
       

    )
}