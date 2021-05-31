import './App.css';
import { Component } from 'react';
import { CoinsList } from './component/CoinLIst/coinLIst/coinList';
import { Navbar } from './component/navbar/navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { About } from './component/navbar/about';
import { Coin } from './component/Coin Details/coinDetail';

class App extends Component
{
  constructor(){
    super();
    this.state={
      // CryptoCurrency:[],
      searchField:""
    }
  }

  handleChange=e=>{
    this.setState({searchField: e.target.value})
  }
  render(){
    
    // const {CryptoCurrency,searchField}=this.state
    // const filteredCurrency=CryptoCurrency.filter(coins=>(
    //   coins.name.toLowerCase().includes(searchField.toLowerCase())
    // ))
    return (
      <Router>      
        <div className="App">
          <Navbar placeholder='Search Currency' handleChange ={this.handleChange}/>
          <Switch>
          <Route path='/' exact component={CoinsList} />
         <Route path="/about" component={About}/>
         <Route path="/:id" component={Coin}/>
          </Switch>
        

        
       
      </div>
      </Router>

    );  
  }
}

export default App;
