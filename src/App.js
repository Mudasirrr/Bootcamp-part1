import React from 'react';
import './App.css';
import { render } from '@testing-library/react';


function Programmer(props){

  return(
    <h1>{props.name}</h1>
  )
}

class  App extends  React.Component {
  state={
    name:"Mudasir Hussain"
  }
  render(){
  return (
    <div className="App">
      <h1>Hello World</h1>
      <Programmer name={this.state.name}/>
      <button onClick={()=>this.setState({name:"Fayyaz Awan"})}>Change Name</button>
    </div>
  );
  }
}

export default App;
