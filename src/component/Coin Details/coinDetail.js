import React ,{useState,useEffect} from 'react';
import './coinDetail.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export function Coin({match,props}){
    useEffect(()=>{
        fetchCoin();
       
    },[]);
    const [coin,setcoin]=useState({});
    const fetchCoin=async() => {
        const fetchCoin=await fetch(`https://api.coingecko.com/api/v3/coins/${match.params.id}?sparkline=true`)
        const coin=await fetchCoin.json();
        setcoin(coin);
    }
    const price_percentage=(coin.market_data)?coin.market_data.price_change_percentage_1h_in_currency.usd:''
    return(
        <div style={{overflowX:'auto'}}>
             <div className='container-sm'  style={{color:'whitesmoke', width:'100%'}} >
        <div className='row' style={{padding:'2rem'}}>
            
            <div className='col-sm'>
            <div style={{textAlign:'center'}}>
                <nav>
                
                    <ul>
                        <li><img src={(coin.image)?coin.image.small:''}></img></li>
                        <li><h3 >{coin.name}</h3> </li>
                        <li><h5>({coin.symbol})</h5></li>
                    </ul>
                </nav>

                </div>
            </div>    
                
                
            
            <div className='col-sm'></div>
            <div className='col-sm'>
                <ul>
                <li> 
                <h3 style={{textAlign:'center'}}>
                 ${(coin.market_data)?coin.market_data.current_price.usd:""}
                 
                </h3>
                </li>
                <li> <h5 style={(price_percentage>0)?{color:'green'}:{color:'red'}}>{price_percentage}</h5></li>
                   
                </ul>
               
               
                   
             

            
            </div>
        </div>
        <div className='row' style={{padding:'5px'}}>
            <div className='col-sm'>
                <div className='row'>
                    <div className='col-sm '>
                    <ul>
                        <li><h5>Market Cap</h5></li>
                        <li><button  style={{color:'#989898'}} disabled>#Rank{coin.market_cap_rank}</button></li>
                    </ul>
                    </div>
                </div>    
                <div className='row'>
                    <div className='col-sm'>
                    <ul>
                        <li><h5>Website</h5></li>
                        <li><a href={(coin.links)?coin.links.homepage:''}><button style={{backgroundColor:'#989898'}} >{(coin.links)?coin.links.homepage:''}</button></a> </li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className='col-sm'>
                <div className='row'>
                    <div className='col-sm'>
                        <div style={{textAlign:'center'}}>
                        <h5>Market Cap</h5>
                        <h6>{(coin.market_data)?coin.market_data.market_cap.usd:''}</h6>
                        </div>
                        
                    </div>
                    <div className='col-sm'>
                        <div style={{textAlign:'center'}}>
                           <h5> Total Volume</h5> 
                           <h6>${(coin.market_data)?coin.market_data.total_volume.usd:''}</h6>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-sm'>
                        <h5>24h Low</h5>
                        <h6>${(coin.market_data)?coin.market_data.low_24h.usd:''}</h6>
                    </div>
                    <div className='col-sm'>
                        <h5>24h High</h5>
                        <h6>${(coin.market_data)?coin.market_data.high_24h.usd:''}</h6>
                    </div>

                </div>
                <div className='row'>
                    <div className='col-sm'></div>
                    <div className='col-sm'>
                        <h5>Circulating Supply</h5>
                        <h6>${(coin.market_data)?coin.market_data.circulating_supply:''}</h6>
                    </div>
                    <div className='col-sm'></div>

                </div>
               
            </div>
        </div>
        <div className='about'style={{wordWrap:'break-word'}} >
            <h3 id='heading'>About {coin.name}</h3>
            <p style={{float:'left'}}>{(coin.description)?coin.description.en:''}</p>
        </div>

            
        </div>

        </div>
       
    

    )
}
{/* <Link to={}><button></button></Link> */}
