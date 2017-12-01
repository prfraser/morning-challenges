/*

  Where should state live?
  
  Get the below app working. It should track how many times
  each button has been clicked.

  Hint: Each button should have it's own state.

  Beast mode:
  Add a button "Clik here to add another button"
  Add a "Total clicks" to the top of the App component.

*/

import React, { Component } from 'react';
import './App.css';

let currentId = 1
const genId = () => ++currentId

class App extends Component {
  state = {
    buttons: [],
    totalClicks: 0
  }

  handleAddButton = () => {
    this.setState(prevState => ({
      buttons: [...prevState.buttons, genId()]
    }))
  }

  handleTotalClicks = () => {
    this.setState(prevState => ({
      totalClicks: prevState.totalClicks + 1
    }))
  }

  render() {
    return (
      <div className="App">
        <p>Total Clicks: {this.state.totalClicks}</p>
        <button onClick={this.handleAddButton}>Add another button</button>
        {
          this.state.buttons.map(id => <Button 
                                        key={id} 
                                        parentsHandleTotalClicks={this.handleTotalClicks}/>)
        }
      </div>
    );
  }
}

class Button extends Component {
  constructor(props){
    super(props)
    this.state = {
      clicked: 0
    }
  }
  
  handleClick = () => {
    this.setState(prevState => ({
      clicked: prevState.clicked + 1
    }))
    this.props.parentsHandleTotalClicks()
  }

  render (){
    return (
      <button onClick={this.handleClick}>I have been clicked {this.state.clicked} times</button>
    )
  }
}

export default App;
