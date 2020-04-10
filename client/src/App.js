import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import axios from 'axios';
import  SearchForm  from './components/SearchForm';





class App extends React.Component{
  constructor(){
    super();
    this.state = {
      playerData: []
    }
  }
  
  componentDidMount(){
    axios.get('http://localhost:5000/api/players').then(res => {
      console.log('axios get', res)
      this.setState({
        playerData: res.data
      })
    })
    .catch(err => console.error(err));
  }

  handleSearch = input => {
    this.setState({
      playerData: this.state.playerData.filter(item =>{
        return item.name.includes(input);
      })
    })
  }

  render(){
  return (
    <div className="App">
      <h1>Women's World Cup Soccer Players</h1>
    <SearchForm handleSearch={this.handleSearch}/>
     <PlayerCard 
      value = {this.state.playerData}
     
     
     />
    </div>
  );
  }//closes render
}//closes function

export default App;
