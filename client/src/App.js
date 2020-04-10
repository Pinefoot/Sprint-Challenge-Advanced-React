import React from 'react';
import './App.css';
import PlayerCard from './components/PlayerCard';
import axios from 'axios';





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

  render(){
  return (
    <div className="App">
     <PlayerCard 
      value = {this.state.playerData}
     
     
     />
    </div>
  );
  }//closes render
}//closes function

export default App;
