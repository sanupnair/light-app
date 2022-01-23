import React, { Component } from 'react';
import './Light.css';

class App1 extends Component {
  constructor(props) {
      super(props);
      this.state = {
      BackgroundColor: "BLACK"};
      
  }
 

render(){
    return (
        <div className='app'>
       <div className='div1'>    
      <div className={this.state.BackgroundColor === "BLACK" ? "off" : "on"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}></div>
      <div className='buttondiv'>
      <button className={this.state.BackgroundColor === "WHITE" ? "Whitebutton" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>ON</button>
        <button className={this.state.BackgroundColor === "BLACK" ? "Whitebutton" : "nothing"}
        onClick={() => {this.setState({BackgroundColor: "WHITE"})}}>OFF</button>
        
     </div>
     </div> 
     
     
      </div>
      
    );
  }
}
class App2 extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        BackgroundColor: "BLACK"};
        
    }
   
  
  render(){
      
      return (
        <div className='app1'>
        <div className='div2'>    
        <div className={this.state.BackgroundColor === "BLACK" ? "off" : "on"}
          onClick={() => {this.setState({BackgroundColor: "BLACK"})}}></div>
        <div className='buttondiv'>
        <button className={this.state.BackgroundColor === "WHITE" ? "Whitebutton" : "nothing"}
          onClick={() => {this.setState({BackgroundColor: "BLACK"})}}>ON</button>
          <button className={this.state.BackgroundColor === "BLACK" ? "Whitebutton" : "nothing"}
          onClick={() => {this.setState({BackgroundColor: "WHITE"})}}>OFF</button>
          
       </div>
       </div> 
       
       
        </div>
        
      );
    }
  }

export {App1, App2};

